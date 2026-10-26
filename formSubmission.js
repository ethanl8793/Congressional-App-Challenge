const form = document.getElementById("roomForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const roomData = {
        dimensions: JSON.parse(localStorage.getItem("savedDimensionsData")),
        budget_usd: Number(localStorage.getItem("budget")),
        style: localStorage.getItem("chosenStyle"),
        tone: localStorage.getItem("chosenTone"),
        optimization: localStorage.getItem("chosenOptimization"),
        room_type: localStorage.getItem("chosenRoomType")
    };

    const result = document.getElementById("result");
    result.textContent = "Generating design...";

    try {
    const response = await fetch("/api/design", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(roomData)
    });
 
    const data = await response.json();

    if (!response.ok) {
        if (response.status === 422 && data.budget_summary) {
            throw new Error(
            `${data.error} Budget: $${data.budget_summary.budget}, ` +
            `recommended products: $${data.budget_summary.totalCost}`
            );
        }

    throw new Error(data.error || "The server could not generate a design.");
}
    result.textContent = "";//JSON.stringify({design: data.design}, null, 2)
    const productsSection = document.getElementById("productRecommendations");
const productList = document.getElementById("productList");
const productTotal = document.getElementById("productTotal");

productList.replaceChildren();
productsSection.hidden = false;

for (const product of data.products) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = product.productUrl;
    link.textContent = product.name;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    const details = document.createElement("span");
    details.textContent = ` — $${product.price}: ${product.reason}`;

    item.append(link, details);
    productList.appendChild(item);
    }
    productTotal.textContent = `Total Cost for verified furniture(without tax): $${data.budget_summary.totalCost} of $${data.budget_summary.budget}`;
    
    let imageData;

    if (data.producedImage){
        imageData = data.producedImage.image
    }
    
    if (imageData) {
        const image = document.createElement("img");
        image.src = `data:image/png;base64,${imageData}`;
        image.alt = "Generated room design";
        image.style.maxWidth = "100%";
        document.getElementById("generatedImageContainer").replaceChildren(image);
    }
    } catch (error) {
    result.textContent = error.message;
    }
});