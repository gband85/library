let myLibrary = [];

function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read ? "read" : "not read yet";
    this.info=function() {
        return `${title} by ${author}, ${pages} pages, ${read}`; 
    }
}

function addBookToLibrary(title,author,pages,read) {
let bookToAdd=new Book(title,author,pages,read);
myLibrary.push(bookToAdd);
}

addBookToLibrary("Candide","Voltaire",129,false);
addBookToLibrary("The Prince","Niccolo Machiavelli",140,true);
addBookToLibrary("Altered Carbon","Richard K. Morgan",375,true);
addBookToLibrary("The Hitchhiker's Guide to the Galaxy","Douglas Adams",193,true);

function displayBooks() {
    myLibrary.forEach(function(elem){
console.log(elem);
    });
}