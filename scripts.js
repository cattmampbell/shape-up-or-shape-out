/* More on Colorful Console Messages here: https://www.samanthaming.com/tidbits/40-colorful-console-message */
/* Should log: Start of scripts.js file! */
console.log("%cStart%c of scripts.js file!", "font-weight: 900; color: blue;", "font-weight: 400; color: blue;"); 

/* Executes anonymous function once DOM is fully loaded */
document.addEventListener("DOMContentLoaded", function() {
    /* Accesses HTML Elements via DOM Manipulation */
    /* Assigns values to Global Constants */
    const drawingBoard = document.getElementById("drawingBoard");
    const shapeInformation = document.getElementById("shapeInformation");
    const nameListItem = document.getElementById("shapeName");
    const nameSpan = document.getElementById("nameSpan");
    const heightListItem = document.getElementById("shapeHeight");
    const heightSpan = document.getElementById("heightSpan");
    const widthListItem = document.getElementById("shapeWidth");
    const widthSpan = document.getElementById("widthSpan");
    const areaListItem = document.getElementById("shapeArea");
    const areaSpan = document.getElementById("areaSpan");
    const perimeterListItem = document.getElementById("shapePerimeter");
    const perimeterSpan = document.getElementById("perimeterSpan");
    const rectangleLength = document.getElementById("rectangleLengthInput");
    const rectangleWidth = document.getElementById("rectangleWidthInput");
    const rectangleButton = document.getElementById("insertRectangleButton");
    const squareSide = document.getElementById("squareSideInput");
    const squareButton = document.getElementById("insertSquareButton");
    const circleRadius = document.getElementById("circleRadiusInput");
    const circleButton = document.getElementById("insertCircleButton");
    const triangleHeight = document.getElementById("triangleHeightInput");
    const triangleButton = document.getElementById("insertTriangleButton");

    /* Declares/assigns values to Global Constants */
    const maximumPixels = 601;
    const colors = [
        "rgb(0, 123, 255)",
        "rgb(108, 117, 125)",
        "rgb(40, 167, 69)",
        "rgb(220, 53, 69)",
        "rgb(255, 193, 7)",
        "rgb(23, 162, 184)",
        "rgb(52, 58, 64)",
        "rgb(248, 249, 250)",
        "rgb(255, 255, 255)",
        "rgb(102, 16, 242)",
        "rgb(111, 66, 193)",
        "rgb(232, 62, 140)",
        "rgb(253, 126, 20)",
        "rgb(32, 201, 151)"
    ];

    /* Creates getRandomValue() Function */
    /* Generates/returns a random Integer */
    const getRandomValue = (minimum, maximum) => {
        return Math.floor(Math.random() * (maximum - minimum) + minimum);
    }

    /* Creates Shape (Parent) Class */
    class Shape {
        constructor(height, width) {
            this.height = height;
            this.width = width;
            /* Creates <div> HTML Element */ 
            /* Adds "shape" HTML Class */ 
            /* Adds to drawingBoard Constant via appendChild() Method */
            this.div = document.createElement("div");
            this.div.classList.add("shape");
            drawingBoard.appendChild(this.div);
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
            nameListItem.innerHTML = `${id}`;
            heightListItem.innerHTML = `${height}`;
            widthListItem.innerHTML = `${width}`;
        }

        /* Creates removeShape() Method */
        /* Modifies HTML content of Constants */
        /* Removes <div> HTML Element via removeChild() Method */
        removeShape() {
            nameSpan.innerHTM = "Name: ";
            nameListItem.innerHTML = "";
            heightSpan.innerHTML = "Height: ";
            heightListItem.innerHTML = "";
            widthSpan.innerHTML = "Width: ";
            widthListItem.innerHTML = "";
            areaSpan.innerHTML = "Area: ";
            areaListItem.innerHTML = "";
            perimeterSpan.innerHTML = "Perimeter: ";
            perimeterListItem.innerHTML = "";
            drawingBoard.removeChild(this.div);
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
            /* Adds "click" Event Handler to Rectangle Class */
            this.div.addEventListener("click", () => {
                this.describeShape(this.div.id, this.height, this.width);
                areaSpan.innerHTML = "Area: ";
                perimeterSpan.innerHTML = "Perimeter: ";
                areaListItem.innerHTML = `${Math.floor(height * width)} Pixels`;
                perimeterListItem.innerHTML = `${Math.floor(2 * (height + width))} Pixels`;
            })
            /* Adds "dblclick" Event Handler to Rectangle Class */
            this.div.addEventListener("dblclick", function() {
                this.removeShape();
            })
        }

        /* Creates describeShape() Method, overrides Parent Class (Shape) describeShape() Method */
        describeShape(id, height, width) {
            nameSpan.innerHTM = "";
            nameSpan.innerHTM = "Name: ";
            nameListItem.innerHTML = `${id}`;
            heightSpan.innerHTML = "";
            heightSpan.innerHTML = "Length: ";
            heightListItem.innerHTML = `${height} Pixels`;
            widthSpan.innerHTML = "";
            widthSpan.innerHTML = "Width: ";
            widthListItem.innerHTML = `${width} Pixels`;
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
            /* Adds "click" Event Handler to Square Class */
            this.div.addEventListener("click", function() {
                this.describeShape(this.div.id, this.height);
                shapeArea.innerHTML = `Area: ${Math.floor(Math.pow(height), 2)}`;
                shapePerimeter.innerHTML = `Perimeter: ${Math.floor(4 * height)}`;
            })
            /* Adds "dblclick" Event Handler to Square Class */
            this.div.addEventListener("dblclick", function() {
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
            shapeName.innerHTML = `Name: ${id}`;
            shapeHeight.innerHTML = `Side: ${height}`;
            shapeInformation.removeChild(shapeWidth);
        }
    }

    /* Creates Circle (Child) Class */
    class Circle extends Shape {
        constructor(height) {
            super(height);
            this.div.id = "circle";
            this.div.style.height = `${height}px`;
            this.div.style.width = `${height}px`;
            this.getRandomColor();
            this.getRandomLocation();
            /* Adds "click" Event Handler to Circle Class */
            this.div.addEventListener("click", function() {
                this.describeShape(this.div.id, this.height);
                shapeWidth.innerHTML = `Diameter: ${Math.floor(2 * height)}`;
                shapeArea.innerHTML = `Area: ${Math.floor(Math.PI * Math.pow(height, 2))}`;
                shapePerimeter.innerHTML = `Circumference: ${Math.floor(2 * Math.PI * height)}`;
            })
            /* Adds "dblclick" Event Handler to Circle Class */
            this.div.addEventListener("dblclick", function() {
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
            shapeName.innerHTML = `Name: ${id}`;
            shapeHeight.innerHTML = `Radius: ${height}`;
            shapeInformation.removeChild(shapeWidth);
        }
    }

    /* Creates Triangle (Child) Class */
    class Triangle extends Shape {
        constructor(height) {
            super(height);
            this.div.id = "triangle";
            this.div.style.borderBottomWidth = `${height}px`;
            this.div.style.borderRightWidth = `${height}px`;
            this.getRandomColor();
            this.getRandomLocation();
            /* Adds "click" Event Handler to Triangle Class */
            this.div.addEventListener("click", function() {
                this.describeShape(this.div.id, this.height);
                shapeArea.innerHTML = `Area: ${Math.floor(0.5 * height * height)}`;
                shapePerimeter.innerHTML = `Perimeter: ${Math.floor(2 * Math.pow(height, 2) + Math.sqrt(2) * height)}`;
            })
            /* Adds "dblclick" Event Handler to Triangle Class */
            this.div.addEventListener("dblclick", function() {
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
            shapeName.innerHTML = `Name: ${id}`;
            shapeHeight.innerHTML = `Height: ${height}`;
            shapeInformation.removeChild(shapeWidth);
        }
    }

    // Adds "keyup" Event Listeners to rectangleLength, rectangleWidth, squareSide, circleRadius and triangleHeight Constants
    rectangleLength.addEventListener("keyup", function() {
        if(document.getElementById("rectangleLengthInput").value !== "" && document.getElementById("rectangleWidthInput").value !== "") {
            rectangleButton.removeAttribute("disabled");
        }
    })

    rectangleWidth.addEventListener("keyup", function() {
        if(document.getElementById("rectangleWidthInput").value !== "" && document.getElementById("rectangleLengthInput").value !== "") {
            rectangleButton.removeAttribute("disabled");
        }
    })

    squareSide.addEventListener("keyup", function() {
        if(document.getElementById("squareSideInput").value !== "") {
            squareButton.removeAttribute("disabled");
        }
    })

    circleRadius.addEventListener("keyup", function() {
        if(document.getElementById("circleRadiusInput").value !== "") {
            circleButton.removeAttribute("disabled");
        }
    })

    triangleHeight.addEventListener("keyup", function() {
        if(document.getElementById("triangleHeightInput").value !== "") {
            triangleButton.removeAttribute("disabled");
        }
    })

    // Adds 'click' Event Listeners to insertRectangleButton, insertSquareButton, insertCircleButton and insertTriangleButton Constants
    insertRectangleButton.addEventListener("click", function() {
        if(document.getElementById("rectangleLengthInput").value > maximumPixels && document.getElementById("rectangleWidthInput").value > maximumPixels) {
            alert("Try again! Enter a number less than 600 (Pixels) for the Length and Width!");
        } else if(document.getElementById("rectangleLengthInput").value > maximumPixels) {
            alert(`Rut-roh, try again! ${document.getElementById("rectangleLengthInput").value} is too high! Enter a number less than 600 (Pixels) for the Length!`);
        } else if(document.getElementById("rectangleWidthInput").value > maximumPixels) {
            alert(`Aw shucks, try again! ${document.getElementById("rectangleWidthInput").value} is too high! Enter a number less than 600 (Pixels) for the Width!`);
        } else {
            let newRectangle = new Rectangle(document.getElementById("rectangleLengthInput").value, document.getElementById("rectangleWidthInput").value);
        }
        document.getElementById("rectangleLengthInput").value = "";
        document.getElementById("rectangleWidthInput").value = "";
    })

    insertSquareButton.addEventListener("click", function() {
        if(document.getElementById("squareSideInput").value > maximumPixels) {
            alert(`Try again! ${document.getElementById("squareSideInput").value} is too high! Enter a number less than 600 (Pixels) for the Side!`);
        } else {
            let newSquare = new Square(document.getElementById("squareSideInput").value);
        }
        document.getElementById("squareSideInput").value = "";
    })

    insertCircleButton.addEventListener("click", function() {
        if(document.getElementById("circleRadiusInput").value > maximumPixels) {
            alert(`Try again! ${document.getElementById("circleRadiusInput").value} is too high! Enter a number less than 600 (Pixels) for the Radius!`);
        } else {
            let newCircle = new Circle(document.getElementById("circleRadiusInput").value);
        }
        document.getElementById("circleRadiusInput").value = "";
    })

    insertTriangleButton.addEventListener(`click`, () => {
        if(document.getElementById("triangleHeightInput").value > maximumPixels) {
            alert(`Try again! ${document.getElementById("triangleHeightInput").value} is too high! Enter a number less than 600 (Pixels) for the Height!`);
        } else {
            let newTriangle = new Triangle(document.getElementById("triangleHeightInput").value);
        }
        document.getElementById("triangleHeightInput").value = "";
    })
})

/* Should log: End of scripts.js file! */
console.log('%cEnd%c of scripts.js file!', 'font-weight: 900; color: blue;', 'font-weight: 400; color: blue;'); 