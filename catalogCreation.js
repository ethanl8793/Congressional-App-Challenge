import { itemCatalog } from "./Catalog.js";

const itemStorage = document.getElementById("Catalog");
const descriptionReveal = document.createElement("div");
descriptionReveal.className = "descriptionList";
document.body.appendChild(descriptionReveal);

itemCatalog.forEach((products, categoryName) => {
  const section = document.createElement("section");
  section.className = "catalogSection";

  const heading = document.createElement("h2");
  heading.textContent = categoryName;
  section.appendChild(heading);

  products.forEach(item => {
    const img = document.createElement("img");
    const classCreation = document.createElement("div");
    const list = document.createElement("li");
    const text = document.createElement("p");
    const header = document.createElement("h3");

    img.src = item.imageUrl;
    img.width = 200;
    classCreation.className = "furnitureItems";
    classCreation.dataset.styles = item.styleTags.join(", ");

    header.textContent = item.name;
    text.textContent =
      `Style: ${item.styleTags.join(", ")}\n` +
      `Category: ${item.category}\n` +
      `Price: $${item.price}`;

    list.appendChild(header);
    list.appendChild(text);

    img.addEventListener("click", event => {
      event.stopPropagation();
      descriptionReveal.replaceChildren(list);
      descriptionReveal.style.display = "block";
    });

    classCreation.appendChild(img);
    section.appendChild(classCreation);
  });

  itemStorage.appendChild(section);
});

document.addEventListener("click", () => {
  descriptionReveal.style.display = "none";
});

function getVariant(item, variantId) {
  const wanted = variantId || item.defaultVariant;
  return item.variants.find(v => v.variantId === wanted) || item.variants[0];
}