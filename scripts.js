const myLibrary = [];

function Book(title, author, pages, readed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
}

Book.prototype.consoleInfo = function () {
  console.log(this.title);
  console.log(this.author);
  console.log(this.pages);
  console.log(this.readed);
};

function addBookToLibrary(title, author, pages, readed) {
  let newBook = new Book(title, author, pages, readed);
  myLibrary.push(newBook);
  newBook.consoleInfo();
}

document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let readed = document.getElementById("readed").checked;

    addBookToLibrary(title, author, pages, readed);

    //create the book divs

    let gridContainer = document.querySelector(".grid-container");

    let newBook = document.createElement("div");
    newBook.classList.add("book");

    gridContainer.appendChild(newBook);

    let para = document.createElement("p");
    para.innerHTML = title;

    newBook.appendChild(para);
  });
