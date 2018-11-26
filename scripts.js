/* More on Colorful Console Messages here: https://www.samanthaming.com/tidbits/40-colorful-console-message */
/* Should log: Start of scripts.js file! */
console.log("%cStart%c of scripts.js file!", "font-weight: 900; color: blue;", "font-weight: 400; color: blue;"); 
/* Executes anonymous function once DOM is fully loaded */
document.addEventListener("DOMContentLoaded", function() {
    /* Accesses HTML Elements via DOM Manipulation */
    /* Assigns values to Global Constants */
    const rectangleLengthInput = document.getElementById("rectangleLengthInput");
    const rectangleWidthInput = document.getElementById("rectangleWidthInput");
    const insertRectangleButton = document.getElementById("insertRectangleButton");
    const squareSideInput = document.getElementById("squareSideInput");
    const insertSquareButton = document.getElementById("insertSquareButton");
    const circleRadiusInput = document.getElementById("circleRadiusInput");
    const insertCircleButton = document.getElementById("insertCircleButton");
    const triangleHeightInput = document.getElementById("triangleHeightInput");
    const insertTriangleButton = document.getElementById("insertTriangleButton");
    const drawingBoard = document.getElementById("drawingBoard");
    const shapeInformation = document.getElementById("shapeInformation");
    const nameLabelSpan = document.getElementById("nameLabelSpan");
    const nameValueSpan = document.getElementById("nameValueSpan");
    const heightLabelSpan = document.getElementById("heightLabelSpan");
    const heightValueSpan = document.getElementById("heightValueSpan");
    const widthListItem = document.getElementById("widthListItem");
    const widthLabelSpan = document.getElementById("widthLabelSpan");
    const widthValueSpan = document.getElementById("widthValueSpan");
    const areaLabelSpan = document.getElementById("areaLabelSpan");
    const areaValueSpan = document.getElementById("areaValueSpan");
    const perimeterLabelSpan = document.getElementById("perimeterLabelSpan");
    const perimeterValueSpan = document.getElementById("perimeterValueSpan");
    const resetButton = document.getElementById("resetButton");
    const maximumPixels = 600;
    const colors = ["#007bff", "#6c757d", "#28a745", "#dc3545", "#ffc107", "#17a2b8", "#343a40", "#f8f9fa", "#ffffff", "#6610f2", "#6f42c1", "#e83e8c", "#fd7e14", "#20c997"];
    const shapes = [];
    /* Creates getRandomValue() Function, generates/returns a random Integer */
    const getRandomValue = (minimum, maximum) => {
        return Math.floor(Math.random() * (maximum - minimum) + minimum);
    }
    /* Creates shapeCount() Function */
    /* If no shapes presently on page, <button disabled>. If one (or more) shapes presently on page, <button> */
    const shapeCount = () => {
        if(shapes.length > 0) {
            resetButton.removeAttribute("disabled");
            resetButton.classList.remove("btn-outline-secondary");
            resetButton.classList.add("btn-secondary");
        } else if(shapes.length === 0) {
            resetButton.setAttribute("disabled", "true");
        }
    }

    /* Creates Shape (Parent) Class */
    class Shape {
        constructor(height, width) {
            this.height = height;
            this.width = width;
            /* Creates <div> HTML Element, adds "shape" HTML Class to <div> */ 
            /* Adds <div> to drawingBoard Constant via appendChild() Method */
            /* Adds Object to shapes[] Array via push() Method */
            this.div = document.createElement("div");
            this.div.classList.add("shape");
            drawingBoard.appendChild(this.div);
            shapes.push(this);
        }
        /* Creates getRandomColor() Method */
        /* Sets value of "background-color:" CSS Property */
        getRandomColor() {
            this.div.style.backgroundColor = colors[getRandomValue(1, 14)];
        }
        /* Creates getRandomLocation() Method */
        /* Sets values of "top:" and "left:" CSS Properties via String Substitution */
        getRandomLocation() {
            this.div.style.top = `${getRandomValue(this.height, maximumPixels)}px`;
            this.div.style.left = `${getRandomValue(this.width, maximumPixels)}px`;
        }
        /* Creates describeShape() Method */
        /* Modifies HTML content of Constants */
        describeShape(id, height, width) {
            nameValueSpan.innerHTML = `${id}`;
            heightValueSpan.innerHTML = `${height} Pixels`;
            widthValueSpan.innerHTML = `${width} Pixels`;
        }
        /* Creates removeShape() Method */
        /* Modifies HTML content of Constants */
        /* Removes <div> HTML Element from drawingBoard Constant via removeChild() Method */
        /* Removes Object from shapes[] Array via splice() Method */
        removeShape() {
            nameLabelSpan.innerHTM = "Name: ";
            heightLabelSpan.innerHTML = "Height: ";
            widthLabelSpan.innerHTML = "Width: ";
            areaLabelSpan.innerHTML = "Area: ";
            perimeterLabelSpan.innerHTML = "Perimeter: ";
            nameValueSpan.innerHTML = "";
            heightValueSpan.innerHTML = "";
            widthValueSpan.innerHTML = "";
            areaValueSpan.innerHTML = "";
            perimeterValueSpan.innerHTML = "";
            drawingBoard.removeChild(this.div);
            shapes.splice(this, 1);
            shapeCount();
        }
    }
    /* Creates Rectangle (Child) Class */
    class Rectangle extends Shape {
        constructor(height, width) {
            super(height, width);
            this.div.id = "Rectangle";
            this.div.style.height = `${height}px`;
            this.div.style.width = `${width}px`;
            this.getRandomColor();
            this.getRandomLocation();
            /* Adds "click" Event Listener to Rectangle Class */
            this.div.addEventListener("click", () => {
                this.describeShape(this.div.id, this.height, this.width);
                areaLabelSpan.innerHTML = "Area: ";
                perimeterLabelSpan.innerHTML = "Perimeter: ";
                areaValueSpan.innerHTML = `${Math.floor(height * width)} Pixels`;
                perimeterValueSpan.innerHTML = `${Math.floor(2 * (height + width))} Pixels`;
            })
            /* Adds "dblclick" Event Listener to Rectangle Class */
            this.div.addEventListener("dblclick",() => {
                this.removeShape();
            })
        }
        /* Creates describeShape() Method, overrides Parent Class (Shape) describeShape() Method */
        describeShape(id, height, width) {
            nameLabelSpan.innerHTML = "Name: ";
            heightLabelSpan.innerHTML = "Length: ";
            widthLabelSpan.innerHTML = "Width: ";
            nameValueSpan.innerHTML = `${id}`;
            heightValueSpan.innerHTML = `${height} Pixels`;
            widthValueSpan.innerHTML = `${width} Pixels`;
        }
    }
    /* Creates Square (Child) Class */
    class Square extends Shape {
        constructor(height) {
            super(height);
            this.div.id = "Square";
            this.div.style.height = `${height}px`;
            this.div.style.width = `${height}px`;
            this.getRandomColor();
            this.getRandomLocation();
            /* Adds "click" Event Listener to Square Class */
            this.div.addEventListener("click", () => {
                this.describeShape(this.div.id, this.height);
                areaLabelSpan.innerHTML = "Area: ";
                perimeterLabelSpan.innerHTML = "Perimeter: ";
                areaValueSpan.innerHTML = `${Math.floor(height * height)} Pixels`;
                perimeterValueSpan.innerHTML = `${Math.floor(4 * height)} Pixels`;
            })
            /* Adds "dblclick" Event Listener to Square Class */
            this.div.addEventListener("dblclick", () => {
                this.removeShape();
                widthListItem.innerHTML = `
                    <span id="widthLabelSpan" class="shape-information-label ml-3">Width:</span>
                    <span id="widthValueSpan" class="shape-information-value ml-1"></span>
                `;
                widthListItem.style.paddingTop = "0.75rem";
                widthListItem.style.paddingBottom = "0.75rem";
                widthListItem.style.paddingLeft = "1.25rem";   
                widthListItem.style.paddingRight = "1.25rem";
                widthListItem.style.marginTop = "0";
                widthListItem.style.marginBottom = "-1px";
                widthListItem.style.marginLeft = "0";
                widthListItem.style.marginRight = "0";
                shapeInformation.style.height = "18.917235rem";
            })
        }
        /* Creates getRandomLocation() Method, overrides Parent Class (Shape) getRandomLocation() Method */
        getRandomLocation() {
            this.div.style.top = `${getRandomValue(this.height, maximumPixels)}px`;
            this.div.style.left = `${getRandomValue(this.height, maximumPixels)}px`;
        }
        /* Creates describeShape() Method, overrides Parent Class (Shape) describeShape() Method */
        describeShape(id, height) {
            nameLabelSpan.innerHTML = "Name: ";
            heightLabelSpan.innerHTML = "Side: ";
            nameValueSpan.innerHTML = `${id}`;
            heightValueSpan.innerHTML = `${height} Pixels`;
            widthListItem.innerHTML = "";
            widthListItem.style.padding = "0";
            widthListItem.style.margin = "-1px";
            shapeInformation.style.height = "15.79223rem";
        }
    }
    /* Creates Circle (Child) Class */
    class Circle extends Shape {
        constructor(height) {
            super(height);
            this.div.id = "Circle";
            this.div.style.height = `${height}px`;
            this.div.style.width = `${height}px`;
            this.getRandomColor();
            this.getRandomLocation();
            /* Adds "click" Event Listener to Circle Class */
            this.div.addEventListener("click", () => {
                this.describeShape(this.div.id, this.height);
                widthLabelSpan.innerHTML = "Diameter: ";
                areaLabelSpan.innerHTML = "Area: ";
                perimeterLabelSpan.innerHTML = "Circumference: ";
                widthValueSpan.innerHTML = `${Math.floor(2 * height)} Pixels`;
                areaValueSpan.innerHTML = `${Math.floor(Math.PI * (height * height))} Pixels`;
                perimeterValueSpan.innerHTML = `${Math.floor(2 * Math.PI * height)} Pixels`;
            })
            /* Adds "dblclick" Event Listener to Circle Class */
            this.div.addEventListener("dblclick", () => {
                this.removeShape();
            })
        }
        /* Creates getRandomLocation() Method, overrides Parent Class (Shape) getRandomLocation() Method */
        getRandomLocation() {
            this.div.style.top = `${getRandomValue(this.height, maximumPixels)}px`;
            this.div.style.left = `${getRandomValue(this.height, maximumPixels)}px`;
        }
        /* Creates describeShape() Method, overrides Parent Class (Shape) describeShape() Method */
        describeShape(id, height) {
            nameLabelSpan.innerHTML = "Name: ";
            heightLabelSpan.innerHTML = "Radius: ";
            nameValueSpan.innerHTML = `${id}`;
            heightValueSpan.innerHTML = `${height} Pixels`;
        }
    }
    /* Creates Triangle (Child) Class */
    class Triangle extends Shape {
        constructor(height) {
            super(height);
            this.div.id = "Triangle";
            this.div.style.borderBottomWidth = `${height}px`;
            this.div.style.borderRightWidth = `${height}px`;
            this.getRandomColor();
            this.getRandomLocation();
            /* Adds "click" Event Listener to Triangle Class */
            this.div.addEventListener("click", () => {
                this.describeShape(this.div.id, this.height);
                areaLabelSpan.innerHTML = "Area: ";
                perimeterLabelSpan.innerHTML = "Circumference: ";
                areaValueSpan.innerHTML = `${Math.floor(0.5 * height * height)} Pixels`;
                perimeterValueSpan.innerHTML = `${Math.floor(2 * (height * height) + Math.sqrt(2) * height)} Pixels`;
            })
            /* Adds "dblclick" Event Listener to Triangle Class */
            this.div.addEventListener("dblclick", () => {
                this.removeShape();
            })
        }
        /* Creates getRandomColors() Method, overrides Parent Class (Shape) getRandomColor() Method */
        getRandomColor() {
            this.div.style.borderBottomColor = colors[getRandomValue(1, 14)];
        }
        /* Creates getRandomLocation() Method, overrides Parent Class (Shape) getRandomLocation() Method */
        getRandomLocation() {
            this.div.style.top = `${getRandomValue(this.height, maximumPixels)}px`;
            this.div.style.left = `${getRandomValue(this.height, maximumPixels)}px`;
        }
        /* Creates describeShape() Method, overrides Parent Class (Shape) describeShape() Method */
        describeShape(id, height) {
            nameLabelSpan.innerHTML = "Name: ";
            heightLabelSpan.innerHTML = "Height: ";
            widthLabelSpan.innerHTML = "Base: ";
            nameValueSpan.innerHTML = `${id}`;
            heightValueSpan.innerHTML = `${height} Pixels`;
            widthValueSpan.innerHTML = `${height} Pixels`;
        }
    }

    /* Adds "keyup" Event Listeners to rectangleLengthInput, rectangleWidthInput, squareSideInput, circleRadiusInput and triangleHeightInput Constants */
    /* If the <input type="text"> HTML Element(s) meet condition(s), the "disabled" Attribute is removed from the associated <input type="submit"> HTML Element */
    rectangleLengthInput.addEventListener("keyup", function() {
        let rectangleLengthInputValue = document.getElementById("rectangleLengthInput").value;
        let rectangleWidthInputValue = document.getElementById("rectangleWidthInput").value;
        if(rectangleLengthInputValue !== "" && rectangleWidthInputValue !== "") {
            insertRectangleButton.removeAttribute("disabled");
        }
    })
    rectangleWidthInput.addEventListener("keyup", function() {
        let rectangleWidthInputValue = document.getElementById("rectangleWidthInput").value;
        let rectangleLengthInputValue = document.getElementById("rectangleLengthInput").value;
        if(rectangleWidthInputValue !== "" && rectangleLengthInputValue !== "") {
            insertRectangleButton.removeAttribute("disabled");
        }
    })
    squareSideInput.addEventListener("keyup", function() {
        let squareSideInputValue = document.getElementById("squareSideInput").value;
        if(squareSideInputValue !== "") {
            insertSquareButton.removeAttribute("disabled");
        }
    })
    circleRadiusInput.addEventListener("keyup", function() {
        let circleRadiusInputValue = document.getElementById("circleRadiusInput").value;
        if(circleRadiusInputValue !== "") {
            insertCircleButton.removeAttribute("disabled");
        }
    })
    triangleHeightInput.addEventListener("keyup", function() {
        let triangleHeightInputValue = document.getElementById("triangleHeightInput").value;
        if(triangleHeightInputValue !== "") {
            insertTriangleButton.removeAttribute("disabled");
        }
    })
     /* Adds "click" Event Listeners to insertRectangleButton, insertSquareButton, insertCircleButton and insertTriangleButton  Constants */
    /* If the <input type="text"> HTML Element(s) meet condition(s), a new Object is created via Instantiation and assigned to  a Variable */
    /* The content of the <input type="text"> HTML Element(s) are assigned a value of "" */
    insertRectangleButton.addEventListener("click", function() {
        let rectangleLengthInputValue = document.getElementById("rectangleLengthInput").value;
        let rectangleWidthInputValue = document.getElementById("rectangleWidthInput").value;
        if(rectangleLengthInputValue > maximumPixels - 1 && rectangleWidthInputValue > maximumPixels - 1) {
            alert("Try again! Enter a number less than 600 for the Length and Width!");
        } else if(rectangleLengthInputValue > maximumPixels - 1) {
            alert(`Rut-roh, try again! ${rectangleLengthInputValue} is too high! Enter a number less than ${maximumPixels} for the Length!`);
        } else if(rectangleWidthInputValue > maximumPixels - 1) {
            alert(`Aw shucks, try again! ${rectangleWidthInputValue} is too high! Enter a number less than ${maximumPixels} for the Width!`);
        } else {
            let newRectangle = new Rectangle(rectangleLengthInputValue, rectangleWidthInputValue);
        }
        document.getElementById("rectangleLengthInput").value = "";
        document.getElementById("rectangleWidthInput").value = "";
        shapeCount();
    })
    insertSquareButton.addEventListener("click", function() {
        let squareSideInputValue = document.getElementById("squareSideInput").value;
        if(squareSideInputValue > maximumPixels - 1) {
            alert(`Try again! ${squareSideInputValue} is too high! Enter a number less than ${maximumPixels} for the Side!`);
        } else {
            let newSquare = new Square(squareSideInputValue);
        }
        document.getElementById("squareSideInput").value = "";
        shapeCount();
    })
    insertCircleButton.addEventListener("click", function() {
        let circleRadiusInputValue = document.getElementById("circleRadiusInput").value;
        if(circleRadiusInputValue > maximumPixels - 1) {
            alert(`Try again! ${circleRadiusInputValue} is too high! Enter a number less than ${maximumPixels} for the Radius!`);
        } else {
            let newCircle = new Circle(circleRadiusInputValue);
        }
        document.getElementById("circleRadiusInput").value = "";
        shapeCount();
    })
    insertTriangleButton.addEventListener("click", function() {
        let triangleHeightInputValue = document.getElementById("triangleHeightInput").value;
        if(triangleHeightInputValue > maximumPixels - 1) {
            alert(`Try again! ${triangleHeightInputValue} is too high! Enter a number less than ${maximumPixels} for the Height!`);
        } else {
            let newTriangle = new Triangle(triangleHeightInputValue);
        }
        document.getElementById("triangleHeightInput").value = "";
        shapeCount();
    })

    /* Adds "click" Event Listener to resetButton Constant */
    /* Reloads page in browser */
    resetButton.addEventListener("click", function () {
        location.reload();
    })
})
/* Should log: End of scripts.js file! */
console.log('%cEnd%c of scripts.js file!', 'font-weight: 900; color: blue;', 'font-weight: 400; color: blue;'); 