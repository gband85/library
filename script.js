let myLibrary = [];
let display = document.querySelector(".display");
let newBook = document.querySelector("#new-book");
let bookForm = document.querySelector("#book-form");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let read = document.querySelector("#read");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "read" : "not read yet";
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    //create book
    let bookToAdd = new Book(title, author, pages, read);
    //add to library array
    myLibrary.push(bookToAdd);
}

function displayBooks() {
    myLibrary.forEach(function (elem) {
        console.log(elem);
        //create card element
        let card = document.createElement("div");
        //add class
        card.classList.add("card");
        //add book data
        card.textContent = elem.info();
        //append to display
        display.appendChild(card);
    });
}

bookForm.addEventListener("submit", function (e) {
    //prevent default submit action
    e.preventDefault();
    //add to library
    addBookToLibrary(title.value, author.value, Number(pages.value), read.value);
})

addBookToLibrary("Candide", "Voltaire", 129, false);
addBookToLibrary("The Prince", "Niccolo Machiavelli", 140, true);
addBookToLibrary("Altered Carbon", "Richard K. Morgan", 375, true);
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 193, true);
displayBooks();