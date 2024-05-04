const myLibrary = [];

function Book(title, author, pages, readed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
}

Book.prototype.consoleInfo = function () {};

function addBookToLibrary(title, author, pages, readed) {
  let newBook = new Book(title, author, pages, readed);
  myLibrary.push(newBook);
  newBook.consoleInfo();
}

document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let readed = document.getElementById("readed").checked;
    let file = document.getElementById("upload-img").files[0];

    addBookToLibrary(title, author, pages, readed);

    //test for img check

    function checkImg() {}

    //create the book divs

    let gridContainer = document.querySelector(".grid-container");

    let newBook = document.createElement("div");
    newBook.classList.add("book");

    gridContainer.appendChild(newBook);

    let imgElement = document.createElement("img");
    if (file) {
      imgElement.src = URL.createObjectURL(file);
    } else {
      imgElement.src = "./images/book4.jpg";
    }
    imgElement.classList.add("uploaded-image");
    newBook.appendChild(imgElement);

    let formTitle = document.createElement("p");
    formTitle.innerHTML = title;
    formTitle.classList.add("title");
    newBook.appendChild(formTitle);

    let formAuthor = document.createElement("p");
    formAuthor.innerHTML = author;
    formAuthor.classList.add("author");
    newBook.appendChild(formAuthor);

    let formPages = document.createElement("p");
    formPages.innerHTML = pages + " pages";
    formPages.classList.add("pages");
    newBook.appendChild(formPages);

    let formReaded = document.createElement("p");
    formReaded.innerHTML = readedBook(readed);
    formReaded.classList.add("status");
    newBook.appendChild(formReaded);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function () {
      let bookDiv = this.parentElement;
      let index = Array.from(gridContainer.children).indexOf(bookDiv);
      myLibrary.splice(index, 1);
      bookDiv.remove();
    });

    newBook.appendChild(deleteButton);
  });

// Delete default books

let deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    button.parentElement.remove();
  });
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

let removeButtons = document.querySelector(".delete-button");
