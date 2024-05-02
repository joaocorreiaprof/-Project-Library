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
    let file = document.getElementById("upload-img").files[0];

    addBookToLibrary(title, author, pages, readed);

    //create the book divs

    let gridContainer = document.querySelector(".grid-container");

    let newBook = document.createElement("div");
    newBook.classList.add("book");

    gridContainer.appendChild(newBook);

    let imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(file);
    imgElement.classList.add("uploaded-image");
    newBook.appendChild(imgElement);

    let formTitle = document.createElement("p");
    formTitle.innerHTML = title;
    newBook.appendChild(formTitle);

    let formAuthor = document.createElement("p");
    formAuthor.innerHTML = author;
    newBook.appendChild(formAuthor);

    let formPages = document.createElement("p");
    formPages.innerHTML = pages + " pages";
    newBook.appendChild(formPages);

    let formReaded = document.createElement("p");
    formReaded.innerHTML = readedBook(readed);
    newBook.appendChild(formReaded);
  });

//Function to check if book is readed

function readedBook(value) {
  return value ? "Readed" : "Not readed";
}

// Publicity image
let images = ["images/book1.jpg", "images/book2.jpg", "images/book3.jpg"];
let currentIndex = 0;

function changeImage() {
  let img = document.getElementById("publicity-image");
  img.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

document.addEventListener("DOMContentLoaded", function () {
  changeImage();

  setInterval(changeImage, 5000);
});
