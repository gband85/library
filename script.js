let myLibrary = [
    {
        "title": "Candide",
        "author": "Voltaire",
        "pages": 129,
        "read": "read"
    },
    {
        "title": "The Prince",
        "author": "Niccolo Machiavelli",
        "pages": 140,
        "read": "read"
    },
    {
        "title": "Altered Carbon",
        "author": "Richard K. Morgan",
        "pages": 375,
        "read": "not read"
    },
    {
        "title": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "pages": 193,
        "read": "read"
    }
];
let display = document.querySelector(".display");
let newBook = document.querySelector("#new-book");
let bookForm = document.querySelector("#book-form");
let formModal=document.querySelector(".form-modal");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let readRadios = document.getElementsByName("read");
let tbody = document.querySelector("tbody");
let readButtons;
let closeBtn = document.querySelector(".close-btn");

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
                
                if (str == "read" || str == "not read") {
                    cell.classList.add("readCell");
                    //create button
                    let readBtn = document.createElement("button");
                    readBtn.classList.add("read-btn");
                    readBtn.textContent = str;
                    readBtn.value = str;
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
    //update var
    readButtons = document.querySelectorAll(".read-btn");
    console.log(readButtons);
    //create listeners for read buttons
    createBtnListeners();
}

function switchStatus(status) {
    if (status == "read") {
        return "not read";
    }
    else {
        return "read";
    }
}

function createBtnListeners() {
    readButtons.forEach(function (readButton) {
        readButton.addEventListener("click", function () {
            //switch status with function
            let newStatus = switchStatus(readButton.value);
            console.log(newStatus);
            readButton.textContent = newStatus;
            readButton.value = newStatus;
        })
    })
}

bookForm.addEventListener("submit", function (e) {
    //prevent default submit action
    e.preventDefault();
    for (let i = 0; i < readRadios.length; i++) {
        //use value of checked radio in function
        if (readRadios[i].checked) {
            //add to library
            addBookToLibrary(title.value, author.value, Number(pages.value), readRadios[i].value);
        }
    }
    formModal.style.display="none";
    //display array with new book
    displayBooks();
})

newBook.addEventListener("click", function() {
    formModal.style.display="flex";
})
closeBtn.addEventListener("click", function() {
    formModal.style.display="none";
})

window.onload = function () {

    displayBooks();

}
// addBookToLibrary("Candide", "Voltaire", 129, "read");
// addBookToLibrary("The Prince", "Niccolo Machiavelli", 140, "read");
// addBookToLibrary("Altered Carbon", "Richard K. Morgan", 375, "not read");
// addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 193, "read");
