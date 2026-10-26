
// make sure to convert all ifo in html to it so like define query selector and elements 
//Im thinking of getting it from local storage :D

import sharp from "sharp";

async function run(model, input) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/e46c78f3bcd6d5a3d2cfd4ac8802e998/ai/run/${model}`,
    {
      headers: { 
        Authorization: `Bearer ${process.env.cloudFareImageGeneratorToken}`,
      },
      method: "POST",
      body: input,
    }
  );
  const result = await response.json();

  if(!response.ok || result.success === false){
    throw new Error(JSON.stringify(result.errors || result));
  }
  
  return result.result;    
}

export async function generatedImage(design,verfiedReccomendations){

  console.log("Image prompt:", design.image_prompt)
  const formData = new FormData();

  const furnitureDescriptions = verfiedReccomendations.map(item => `${item.name}, variant: ${item.variant_id}`).join(", ")
  const externalDescriptions = [];
  for(const item of design.external_suggestions){
    if (item.selected === true){
      externalDescriptions.push(`${item.item_name}:${item.reason}`)
    }
  }
  const addExternalDescriptions = externalDescriptions.join(". ")
  const storageDescriptions = design.storage_recommendations.join(". ");
  
  let referenceInfo = "";
    
  let index = 0;
  for (const product of verfiedReccomendations){
    if (index >=4){break;}
    if (!product.imageUrl){continue;}
    
    const imageResponse = await fetch(product.imageUrl);

    if (!imageResponse.ok) {
      const errorData = await imageResponse.json();
      throw new Error(errorData.error || "The server could not generate a design.");      
    }

    const imageBuffer = Buffer.from(
      await imageResponse.arrayBuffer()
    );

    // Resize the reference to meet Cloudflare's requirements
    const resizedImage = await sharp(imageBuffer)
      .resize(500, 500, { fit: "inside" })
      .png()
      .toBuffer();

    const imageBlob = new Blob(
      [resizedImage],
      { type: "image/png" }
    );

    formData.append(`input_image_${index}`, imageBlob, `product${index}.png`);
    referenceInfo += `
      Reference image ${index} shows ONE ${product.name}
      in variant ${product.variant_id}.

      Use that image as the visual reference for this
      specific furniture item.

      Preserve the item's silhouette, visible components,
      color, and overall construction.

      Include exactly one copy unless the layout
      explicitly requires multiple units.
    `;
    index++;
  }

  const prompt = `
    Create a photorealistic interior design concept.
    ${design.image_prompt}
    Required furniture: ${furnitureDescriptions}
    SELECTED ADDITIONAL FURNITURE:${addExternalDescriptions || "None"}
    All selected additional furniture must be visible in the finished room. These items are part of the design, not optional suggestions. Place each item according to the proposed layout. Do not omit selected items in favor of decorations.
    ${referenceInfo}
    Furniture layout: ${design.layout_plan}
    REQUIRED storage: ${storageDescriptions}
    RENDERING RULES: - RENDERING PRIORITIES: 1. Reproduce the referenced furniture as closely as possible, preserving shape, color, configuration, and visible components. 2. Show every selected furniture item, including selected additional furniture. 3. Keep storage units fully visible with their doors, drawers, and compartments recognizable. 4. Follow the proposed furniture arrangement. 5. Maintain the requested design style, realistic construction, and balanced interior lighting. Use a camera perspective that shows the complete furniture arrangement without unnecessarily hiding major products. Do not introduce unrelated furniture or unverified architecture.;
  `
  formData.append("prompt", prompt);
  formData.append("width", "1024");
  formData.append("height", "768");

    
  const imageResult = await run(
  "@cf/black-forest-labs/flux-2-klein-4b",formData);

  return imageResult;
}
