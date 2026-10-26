import dotenv from "dotenv";
dotenv.config({path : "./apikey.env"})
import express from "express";
import { GoogleGenAI } from "@google/genai";
import { readFileSync } from "node:fs";
import { generatedImage } from "./imageGeneration.js";
import { catalogItem, measurementUnit } from "../serverFrontend/Catalog.js";


const app = express();
const geminiAi = new GoogleGenAI({
  apiKey: process.env.geminiApiKey
});

app.use(express.json());
app.get("/", (req, res) => {
  res.redirect("/mainPage.html");
});
app.use(express.static("../serverFrontend"));

const systemInstruction = readFileSync(
  "./promptInstructions.txt",
  "utf8"
);

const returnStructure = JSON.parse(
  readFileSync("./returnStructure.json", "utf8")
);

const furnitureCatalog = catalogItem;
function prioritizeCatalogProducts(catalog) {
  const prioritized = {};

  for (const [category, products] of Object.entries(catalog)) {
    const entries = Object.entries(products);

    for (let i = entries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    prioritized[category] = Object.fromEntries(entries);
  }
  return prioritized;
}

app.post("/api/design", async (incomingRequest, outputResponse) => {
  try {
    const userRequest = incomingRequest.body;

    // This part waits for gemini to respond to user's request.
    const response = await geminiAi.models.generateContent({
      model: process.env.geminiModel,
      contents: JSON.stringify({
        user_Request: userRequest,
        furniture_measurement_unit: measurementUnit,
        available_catalog_products: prioritizeCatalogProducts(furnitureCatalog)
      }),
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseJsonSchema: returnStructure,
        thinkingConfig: {
          thinkingLevel: "low"
        }
      }
    });

    const design = JSON.parse(response.text);

    const verfiedReccomendations = [];

    for (const recommendation of design.catalog_recommendations) {
      const product = Object.values(furnitureCatalog).map(category => category[recommendation.product_id]).find(Boolean);

      if (!product) continue;

      let variant;
      if (product && product.variants){
        variant = product.variants.find(
        version => version.variantId === recommendation.variant_id
      );}

      if (recommendation.variant_id && !variant) {
        continue;
      }

      let price = product.price;
      let imageUrl = product.imageUrl;
      let productUrl = product.productUrl;
      if(!variant){
        price = product.price;
        imageUrl = product.imageUrl;
        productUrl = product.productUrl;
      }
      else{
        price = variant.price;
        imageUrl = variant.imageUrl;
        productUrl = variant.productUrl;
      }


      verfiedReccomendations.push({
        product_id: recommendation.product_id,
        variant_id: recommendation.variant_id,
        name: product.name,
        price: price,
        imageUrl: imageUrl,
        productUrl: productUrl,
        reason: recommendation.reason
      });
    }
    let totalCost = 0;
    for(const reccomendations of verfiedReccomendations){
      totalCost += Number(reccomendations.price);
    }
    const budget = Number(userRequest.budget_usd);

    const remainingBudget = budget - totalCost;

    const withinBudget = totalCost <= budget;

    if (!withinBudget) {
      return (outputResponse.status(422).json({
        error: "The recommended furniture exceeds your budget.",
        budget_summary: {
          budget,
          totalCost,
          remainingBudget,
          withinBudget
        },
        design,
        products: verfiedReccomendations
      }));
    }
    const imageResult = await generatedImage(design,verfiedReccomendations);
  
    outputResponse.json({
      design,
      products: verfiedReccomendations,
      producedImage: imageResult,
      budget_summary: {
      budget,
      totalCost,
      remainingBudget,
      withinBudget
    }
    });

    


  } catch (error) {
    console.error(error);
    outputResponse.status(500).json({
      error: "Room design generation failed."
    });
  }
});


app.listen(3000, () => {
  console.log("App running at http://localhost:3000");
});
//node --env-file=apiKey.env serverBackend.js