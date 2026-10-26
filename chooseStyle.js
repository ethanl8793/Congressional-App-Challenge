const buttonStyle = document.getElementById("buttonGroup1")

buttonStyle.addEventListener('click', (specific) => { 
    let buttons = buttonStyle.querySelectorAll("button")
    let button = specific.target.closest('button')
    if(!button) {
        return}
    const chosenStyle = button.dataset.style;

    applyStyle(chosenStyle);

    function applyStyle(styleName) {
        document.body.className = ''; 
        document.body.classList.add(`${styleName}-theme`);
        localStorage.setItem("chosenStyle",styleName)
    }
    for (const item of buttons) {
        item.classList.remove("selected");
    } 
    button.classList.add("selected");
});
const buttonTone = document.getElementById("buttonGroup2")

buttonTone.addEventListener('click', (specific) => { 
    let buttons = buttonTone.querySelectorAll("button")
    let button = specific.target.closest('button')
    if(!button) {
        return}
    
    const chosenTone = button.dataset.style;

    applyStyle(chosenTone);

    function applyStyle(styleName) {
        document.body.className = ''; 
        document.body.classList.add(`${styleName}-theme`);
        localStorage.setItem("chosenTone",styleName)
    }
    for (const item of buttons) {
        item.classList.remove("selected");
    } 
    button.classList.add("selected");
});

const budget = document.getElementById("budget");
budget.addEventListener("input",()=>{
    localStorage.setItem("budget", budget.value);
})

const infoToJson = JSON.stringify()

const optimizationInput = document.getElementById("optimization")
optimizationInput.addEventListener("change", () => {
    localStorage.setItem("chosenOptimization", optimizationInput.value);
});

const roomTypeInput = document.getElementById("roomType");

roomTypeInput.addEventListener("change", () => {
    localStorage.setItem("chosenRoomType", roomTypeInput.value);
});

