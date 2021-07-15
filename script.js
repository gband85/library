function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read
    this.info=function() {
        return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`; 
    }
}

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary(title,author,pages,read) {
let bookToAdd=new Book(title,author,pages,read);
myLibrary.push(bookToAdd);

}

function displayBooks(library) {
    myLibrary.forEach(function(){

    });
}