let myLibrary = [];
let submitBtn = document.querySelector("#submitBtn");
let textInput = document.querySelectorAll("input");
let flexContainer = document.getElementById("bookDisplay")
// let cell = document.createElement("div");
// let flexItems = gridContainer.appendChild(cell).className = "flexItems";

// object Constructor for new books
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
}

// push new Book into Array myLibrary as an Object
let addToLibrary = function addToLibrary() {
    newBook = new Book(textInput[0].value, textInput[1].value, textInput[2].value, textInput[3].checked);

    myLibrary.push(newBook);
    fillGrid(myLibrary[myLibrary.length-1]);
};

let fillGrid = function fillGrid(input) {
    let cell = document.createElement("div");
    let span = document.createElement("span");
    flexContainer.appendChild(cell).className = "flexItems";
    cell.appendChild(span).className = "spanItem";
    span.innerText = input.title;
    input.read === true ? cell.style.background = "green" : cell.style.background = "red";
}


// Eventlistener for the Submit-Button
submitBtn.addEventListener("click", addToLibrary);