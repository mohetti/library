"use strict"

let myLibrary = [];
let submitBtn = document.querySelector(".submit");
let author = document.querySelector("#author");
let title = document.querySelector("#title");
let pages = document.querySelector("#pages");
let read = document.querySelector("#read");

// de-/activates visibility of the input-field "Add new Book"
let modalBtn = document.querySelector(".modal-btn");
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");

modalBtn.addEventListener("click", function() {
    modalBg.classList.add("bg-active");
})


modalClose.addEventListener("click", function() {
    modalBg.classList.remove("bg-active");

    // reset form
    author.value = "";
    title.value = "";
    pages.value = "";
    read.checked = false;
})


class Books {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}

class UI {
    addToDisplay(book) {

        // append container for Display of Book to Content-body
        let selectContent = document.getElementById("content");
        let bookContainer = document.createElement("div");
        bookContainer.className = "bookContainer";
        bookContainer.id = myLibrary.length-1;
        book.read === false ? bookContainer.style.backgroundColor = "#f44336" : bookContainer.style.backgroundColor = "#4CAF50";
        selectContent.appendChild(bookContainer);

        // append userinput for title, author, pages to the container
        let bookTitle = document.createElement("div");
        bookTitle.className = "bookTitle";
        bookTitle.innerText = "Title: " + book.title;
        bookContainer.appendChild(bookTitle);

        let bookAuthor = document.createElement("div");
        bookAuthor.className = "bookAuthor";
        bookAuthor.innerText = "Author: " + book.author;
        bookContainer.appendChild(bookAuthor);

        let bookPages = document.createElement("div");
        bookPages.className = "bookPages";
        bookPages.innerText = "Total: " + book.pages + " pages";
        bookContainer.appendChild(bookPages);

        // append toggle-button for read-status to container
        let bookRead = document.createElement("div");
        let bookSwitch = document.createElement("label");
        let bookInput = document.createElement("input");
        let bookSlider = document.createElement("span");

        bookRead.className = "bookRead";
        bookSwitch.className = "bookSwitch";
        bookInput.type = "checkbox";
        bookInput.className = "bookInput";
        bookInput.id = myLibrary.length-1;
        bookInput.checked = book.read;
        bookSlider.className = "bookSlider";

        bookRead.appendChild(bookSwitch);
        bookSwitch.appendChild(bookInput);
        bookSwitch.appendChild(bookSlider);
        bookContainer.appendChild(bookRead);

        // append delete Button to container
        let bookDelete = document.createElement("div");
        let deleteBtn = document.createElement("button");
        bookDelete.className = "bookDelete";
        deleteBtn.className = "delete";
        deleteBtn.innerText = "Delete";
        
        bookDelete.appendChild(deleteBtn);
        bookContainer.appendChild(bookDelete);

        bookInput.addEventListener("click", function(e) {
            let ui = new UI();
            ui.updateReadStatus(this.checked, this.id);
        })

    }

    updateReadStatus(checked, id) {
        let targetForUpdate = document.getElementById(id);
        if (checked === false) {
            targetForUpdate.style.backgroundColor = "#f44336";
            myLibrary[id].read = false;
        } else if (checked !== false) {
            targetForUpdate.style.backgroundColor = "#4CAF50";
            myLibrary[id].read = true;
        }
    }
}

submitBtn.addEventListener("click", function(e) {
    if (author.value === "" || title.value === "" || pages.value === "") {
        return alert("Please enter all the fields");
    } // ******** else if statement for number-check of pages **********

    let newBook = new Books(author.value, title.value, pages.value, read.checked)
    myLibrary.push(newBook);

    let ui = new UI();
    ui.addToDisplay(newBook);
    
    modalBg.classList.remove("bg-active");

    // reset form
    author.value = "";
    title.value = "";
    pages.value = "";
    read.checked = false;
});

