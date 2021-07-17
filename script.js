let myLibrary = [];
let display = document.querySelector(".display");
let newBook = document.querySelector("#new-book");
let bookForm = document.querySelector("#book-form");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let read = document.querySelector("#read");
let tbody = document.querySelector("tbody")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    //create book
    let bookToAdd = new Book(title, author, pages, read);
    //add to library array
    myLibrary.push(bookToAdd);
}

function displayBooks() {
    //remove all child nodes
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    myLibrary.forEach(function (elem) {
        //create table row
        let row = document.createElement("tr");
        //iterate through object values
        for (let str of Object.values(elem)) {
            //only add properties, not methods
            if (typeof (str) != "function") {
//create data cell
let cell = document.createElement("td");
                if (str == "read" || str == "not yet") {
                    //create button
let readBtn=document.createElement("button");
readBtn.textContent=str;
//append to cell
cell.appendChild(readBtn);
                }
                    else {
                cell.textContent = str;
                    }
                //append to row
                row.appendChild(cell);
            }
        }
        //set data-index to element index
        row.setAttribute("data-index", `${myLibrary.indexOf(elem)}`);
        //append to display
        tbody.appendChild(row);
    });
}

bookForm.addEventListener("submit", function (e) {
    //prevent default submit action
    e.preventDefault();
    //add to library
    addBookToLibrary(title.value, author.value, Number(pages.value), read.value);
    //display array with new book
    displayBooks();
})

addBookToLibrary("Candide", "Voltaire", 129, "not yet");
addBookToLibrary("The Prince", "Niccolo Machiavelli", 140, "read");
addBookToLibrary("Altered Carbon", "Richard K. Morgan", 375, "read");
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 193, "read");
displayBooks();