const room = document.getElementById('2dBox')
const svg = document.querySelector('svg');
let windowCoordinate = [];
let doorCoordinate = [];

function setGrid(){
    let spacing = 5
    for(i = 5; i < 70; i += 5){
        let verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        verticalLine.setAttribute('x1', spacing); // X coordinate
        verticalLine.setAttribute('y1', 0);  // Start height (Top)
        verticalLine.setAttribute('x2', spacing); // Same X coordinate 
        verticalLine.setAttribute('y2', 130); // End height (Bottom)
        verticalLine.setAttribute('stroke', '#d9dcd6');     // Line color
        verticalLine.setAttribute('stroke-width', '.5');
        verticalLine.setAttribute('opacity', 0.18);
        spacing += 7.5
        room.appendChild(verticalLine)
    }
    spacing = 5
    for(j = 5; j < 90; j += 5){
        let horizontalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        horizontalLine.setAttribute('x1', 0); // X coordinate
        horizontalLine.setAttribute('y1', spacing);  // Start height (Top)
        horizontalLine.setAttribute('x2', 100); // Same X coordinate 
        horizontalLine.setAttribute('y2', spacing); // End height (Bottom)
        horizontalLine.setAttribute('stroke', '#d9dcd6');     // Line color
        horizontalLine.setAttribute('stroke-width', '.5');
        horizontalLine.setAttribute('opacity', 0.18);
        spacing += 7.5
        room.appendChild(horizontalLine)
    }
    
}

function findCrossSections(){
    let spacingy = 5
    let spacingx = 5
    for (i = 0; i < 13; i++){
        for (j = 0; j < 17; j++){
            let circleGrid = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circleGrid.setAttribute('r', 1);
            circleGrid.setAttribute('cx', spacingx);
            circleGrid.setAttribute('cy', spacingy);
            circleGrid.setAttribute('class', "circleGrid");
            spacingy += 7.5
            circleGrid.setAttribute('fill', '#ffffff80');
            circleGrid.setAttribute('stroke','transparent')
            circleGrid.setAttribute('stroke-width','4')
            room.appendChild(circleGrid);
        }
        spacingx += 7.5
        spacingy = 5
    }
}

setGrid()    
findCrossSections()

const polygon = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
svg.appendChild(polygon)
polygon.setAttribute('class', 'polygon');
const walls = document.createElementNS("http://www.w3.org/2000/svg", 'g');
walls.setAttribute('pointer-events', 'none')
svg.appendChild(walls);
const circleFunction = document.querySelectorAll('.circleGrid');
let coordinateList = [];
let isClosed = false;
let finish = false;
let number = 0;
function makeWalls(from, to, color, index){
    const wall = document.createElementNS("http://www.w3.org/2000/svg","line")
    wall.setAttribute('x1',from.x);
    wall.setAttribute('y1',from.y);
    wall.setAttribute('x2',to.x);
    wall.setAttribute('y2',to.y); 
    wall.setAttribute('stroke', color);
    wall.setAttribute('stroke-width', '.75');
    wall.classList.add("wallDimension")
    wall.dataset.wallIndex = index;
    return wall;
}
function drawWalls(){
    walls.replaceChildren();
    for (let i =1; i < coordinateList.length; i++){
        walls.appendChild(makeWalls(coordinateList[i-1],coordinateList[i],'#ffffff80', i-1));
    }
    if(isClosed && coordinateList.length >= 3){
        let lastPoint = coordinateList[coordinateList.length-1]
        walls.appendChild(makeWalls(lastPoint, coordinateList[0], '#ffffff80', coordinateList.length-1))
    }
}

function clearCircles() {
    circleFunction.forEach((circle) => {
        circle.classList.remove("-selectedPoint")
        circle.classList.remove("-visible")
    });
};

const submitButton = document.querySelector('.submitButton')
const restartButton = document.querySelector('.restartButton');
const frameText = document.getElementById('frameText');
const overlayBox = document.getElementById('overlayBox')
const buttonTextConfirm = document.querySelector('#buttonTextConfirm');
const buttonTextDeny = document.querySelector('#buttonTextDeny');
const buttonTextReset = document.querySelector('#buttonTextReset')
frameText.appendChild(buttonTextDeny);
frameText.appendChild(buttonTextConfirm);
frameText.appendChild(buttonTextReset)
overlayBox.appendChild(frameText);
const textBox = document.createElement('p')
textBox.style.align
frameText.prepend(textBox);
let expandableContainer = document.querySelector('.expandableContainer')
const submitDimensionsButton = document.querySelector('#submitDimensionsButton');
const textBoxButtons = document.querySelectorAll(".textBoxButtons")
const units = document.querySelector('.dropDownUnits')
let drawingMode = "none";
let openingStart = null;

const openings = document.createElementNS("http://www.w3.org/2000/svg", "g");
openings.setAttribute("pointer-events", "none");
svg.appendChild(openings);
const drawWindow = document.getElementById("drawWindow")
const drawDoor = document.getElementById("drawDoor")

let allDimensionsPrompt = [];
let unitIndicator = null;
let heightOfRoomPrompt = null;
const heightIndicator = document.getElementById('heightIndicator')
const wallDimensionContainer = document.querySelector(".wallDimensionContainer")
function removeText(){
    overlayBox.style.opacity = 0;
    overlayBox.style.visibility = 'hidden';
}

function makeInputBoxes(){//maybe color as a parameter?
    for (let x = 0; x < coordinateList.length; x++){ 
        const inputLineDimension = document.createElement('input');
        inputLineDimension.placeholder = "Enter the length";
        const wall = walls.querySelector(`[data-wall-index="${x}"]`);
        inputLineDimension.id = `inputLineDimension${x}`;
        inputLineDimension.className  = `inputLineDimension`;
        wallDimensionContainer.appendChild(inputLineDimension);
        inputLineDimension.addEventListener('input', (event) =>{ 
            const inputLinePrompt = {
                prompt : `Wall Dimensions for wall ${x}`,
                number : x,
                wallLength: Number(event.target.value)
            };
            allDimensionsPrompt[x] = (inputLinePrompt);
        });
        inputLineDimension.addEventListener('focus', () =>{
            wall.classList.add('active');
        });
        inputLineDimension.addEventListener('blur', () =>{
            wall.classList.remove('active');
        });

    }};
    //Check when hitting submit if the value is a letter or if its
    // Equal to 0 tto make them redo it 

    
    //Make a button to send these stuff

function polygonDimension(x, y, corners) {
    let ifInsidePolygon = false;

    for (let i = 0, previous = corners.length - 1; i < corners.length; previous = i++) {
        const a = corners[i];
        const b = corners[previous];

        if ((a.y > y) !== (b.y > y)) {
            const edgeX = a.x + (y - a.y) * (b.x - a.x) / (b.y - a.y);
            if (edgeX > x) {
                ifInsidePolygon = !ifInsidePolygon;
            }
        }
    }

    return ifInsidePolygon;
}
function pointOnWall(x, y, corners) {
    for (let i = 0; i < corners.length; i++) {
        const a = corners[i];
        const b = corners[(i + 1) % corners.length];

        const cross = (x - a.x) * (b.y - a.y) -
                      (y - a.y) * (b.x - a.x);

        if (Math.abs(cross) < 0.000001 &&
            x >= Math.min(a.x, b.x) && x <= Math.max(a.x, b.x) &&
            y >= Math.min(a.y, b.y) && y <= Math.max(a.y, b.y)) {
            return true;
        }
    }
    return false;
}
circleFunction.forEach((circle) =>{

    circle.addEventListener('mouseenter',(specific) => {
        if (finish && drawingMode === "none") {
            return;
        }
        else if(finish == true){
            const x = Number(specific.currentTarget.getAttribute('cx'));
            const y = Number(specific.currentTarget.getAttribute('cy'));
            if (pointOnWall(x, y, coordinateList) ||
                polygonDimension(x, y, coordinateList)) {
                specific.currentTarget.classList.add('-visible');
                }}
        else{
            specific.currentTarget.classList.add("-visible");
        }
    });
    circle.addEventListener('mouseleave',(specific) => {
        if (!specific.currentTarget.classList.contains("-selectedPoint") && finish == true){
            specific.currentTarget.classList.remove("-visible");}
        else if (specific.currentTarget.classList.contains("-selectedPoint")){
            return;}
        else{
            specific.currentTarget.classList.remove("-visible");
        }
    });

    circle.addEventListener('click',(specific) => {
        if (finish && drawingMode === "none") {
            return; // Ignore point clicks until Door or Window is chosen.
        }
        number += 1;
        const target = specific.currentTarget;
        const coordinate = {
            x: Number(target.getAttribute('cx')),
            y: Number(target.getAttribute('cy'))
        }
        if (drawingMode === "door" || drawingMode === "window") {
            if (!finish) {
                return;
            }
            if (openingStart === null) {
                openingStart = coordinate;
                target.classList.add("-selectedPoint");
            } else {
                const line = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line");
                line.setAttribute("x1", openingStart.x);
                line.setAttribute("y1", openingStart.y);
                line.setAttribute("x2", coordinate.x);
                line.setAttribute("y2", coordinate.y);
                if(drawingMode === "door"){
                    line.setAttribute("stroke", "green");
                    doorCoordinate.push({
                        firstPoint: openingStart,
                        endPoint: coordinate});
                }
                else if (drawingMode === "window"){
                    line.setAttribute("stroke","blue");
                    windowCoordinate.push({
                        firstPoint: openingStart,
                        endPoint: coordinate});
                }
                line.setAttribute("stroke-width", ".75");
                openings.appendChild(line);
                
                openingStart = null;
                drawingMode = "none";
                clearCircles();
            }

            return; // Prevent these clicks from changing the room outline.
            }

        else if(coordinateList.length >= 3 && (coordinate.x  === coordinateList[0].x && coordinate.y === coordinateList[0].y)){
            isClosed = !isClosed;
        }
        else if (specific.currentTarget.classList.contains("-selectedPoint")){
            target.classList.remove("-selectedPoint")
            coordinateList = coordinateList.filter(pointCheck => pointCheck.x !== coordinate.x || pointCheck.y !== coordinate.y);
        }
        else{            
            target.classList.add("-selectedPoint");
            coordinateList.push(coordinate);
        }

        drawWalls()
        });
        
    });
drawDoor.addEventListener("click", () => {
    if(!finish){
        return;
    }
    else if(drawingMode == "door"){
        return;}
    else{
        drawingMode = "door";
        openingStart = null;
    }
});

drawWindow.addEventListener("click", () => {
  if(!finish){
        return;
    }  
  else if(drawingMode == "window"){
    return;
  }
  else{
    drawingMode = "window";
    openingStart = null;
  }
});


restartButton.addEventListener('click',() => {
    if (isClosed === true){
        textBox.textContent = 'Do you want to reset your progress? (This will reset any drawings and any dimension inputs)'
        overlayBox.style.opacity = 1;
        overlayBox.style.visibility = 'visible';
        buttonTextConfirm.style.display = 'none';
        buttonTextDeny.style.display = 'none';
        buttonTextReset.style.display = 'block';
    }
    else{
        clearCircles();
        isClosed = false;
        finish = false;
        coordinateList.length = 0;
        drawWalls()
    }
});
heightIndicator.addEventListener('input',(event)=>{
    const inputLinePrompt = {
    prompt : "Height of Room",
    roomHeight: Number(event.target.value)
    };
    heightOfRoomPrompt = (inputLinePrompt);
});
units.addEventListener('change', (event) =>{
    const inputLinePrompt = {
        prompt: "unit",
        unit: event.target.value
    };
    unitIndicator = inputLinePrompt;

})
submitDimensionsButton.addEventListener('click', () => {
    const wallInputs = wallDimensionContainer.querySelectorAll("input")
    if(wallInputs.length === 0 || [...wallInputs].some(input => input.value ==="") || unitIndicator == null || unitIndicator.unit === "none"|| heightIndicator.value == ""){
        overlayBox.style.visibility = "visible";
        overlayBox.style.opacity = 1;
        textBox.textContent = "Fill out all components before submitting";
        buttonTextConfirm.style.display = 'none';
        buttonTextReset.style.display = 'none';
        buttonTextDeny.style.display = 'block';
        buttonTextDeny.textContent = "Okay"
    }
    else{
            buttonTextConfirm.style.display = 'none';
        buttonTextReset.style.display = 'none';
        buttonTextDeny.style.display = 'none';
        overlayBox.style.visibility = "visible";
        overlayBox.style.opacity = 1;
        textBox.textContent = "Submitted.";

        const jsonSendDimension = JSON.stringify({coordinateSystem: "SVG viewBox 0 0 100 130 - x increases right, y increases down", roomOutline: coordinateList, walls: allDimensionsPrompt, height: heightOfRoomPrompt, unit: unitIndicator, windowsPlacement: windowCoordinate, doorPlacement: doorCoordinate});
        localStorage.setItem('savedDimensionsData', jsonSendDimension);
    }
});
        // add the units
        // (maybe) add the position box in whereever the button is clicked
        // select items and after click show information and ask to add
        // then it will add it to the svg box 
        //

        //make advent listener for when click on input button
        //any variety of them so one parent one that hits all child
        //this is for the when touch input it shows the blue color 


textBoxButtons.forEach(button => {
    button.addEventListener('click', (pointClick) => {
        const rect = pointClick.currentTarget.getBoundingClientRect();

        // Place the popup just below the button
        frameText.style.left = `${rect.left}px`;
        frameText.style.top = `${rect.bottom + 8}px`;
    })
})

buttonTextDeny.addEventListener('click',removeText);

buttonTextConfirm.addEventListener('click',() =>{
    isClosed = true;
    polygon.setAttribute('points', coordinateList.map(point => `${point.x},${point.y}`).join(' '));
    drawWalls();
    finish = true;
    drawingMode = "none";
    clearCircles();
    overlayBox.style.opacity = 0;
    overlayBox.style.visibility = 'hidden';
    makeInputBoxes();
});
buttonTextReset.addEventListener('click', () =>{
    coordinateList = [];
    polygon.setAttribute('points', coordinateList.map(point => `${point.x},${point.y}`).join(' '));
    removeText();
    clearCircles();
    isClosed = false;
    finish = false;
    coordinateList.length = 0;
    drawWalls()
    allDimensionsPrompt = [];
    wallDimensionContainer.replaceChildren();
    localStorage.removeItem("savedDimensionsData");
    openings.replaceChildren();
    openingStart = null;
    drawingMode = "room";
    doorCoordinate = [];
    windowCoordinate = [];
});

overlayBox.addEventListener('click',(specific) =>{
    if(specific.target === overlayBox){
        specific.target.style.opacity = 0;
        specific.target.style.visibility = 'hidden';
    }
});

submitButton.addEventListener('click',()=>{
    if(finish){
        return;
    }
    else{
        overlayBox.style.opacity = 1;
        overlayBox.style.visibility = 'visible';
        buttonTextConfirm.style.display = 'none';
        buttonTextDeny.style.display = 'none';
        
        if (coordinateList.length <= 2){
            textBox.textContent = 'Need more points to create a room';
            buttonTextConfirm.style.display = 'none';
            buttonTextReset.style.display = 'none';
            buttonTextDeny.style.display = 'block';
            buttonTextDeny.textContent = "Okay";
        }   
        else{
            buttonTextConfirm.style.display = 'block';
            buttonTextDeny.style.display = 'block';
            buttonTextReset.style.display = 'none';
            textBox.textContent = 'Do you want to submit?';
    }
    }
    
});