const myLibrary = [];

class Book {
  constructor(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
  }

  consoleInfo() {
    // Placeholder function for additional info if needed
  }
}

function addBookToLibrary(title, author, pages, readed) {
  const newBook = new Book(title, author, pages, readed);
  myLibrary.push(newBook);
  newBook.consoleInfo();
}

document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readed = document.getElementById("readed").checked;
    const file = document.getElementById("upload-img").files[0];

    addBookToLibrary(title, author, pages, readed);

    // Create the book divs
    const gridContainer = document.querySelector(".grid-container");

    const newBookDiv = document.createElement("div");
    newBookDiv.classList.add("book");

    gridContainer.appendChild(newBookDiv);

    const imgElement = document.createElement("img");
    if (file) {
      imgElement.src = URL.createObjectURL(file);
    } else {
      imgElement.src = "./images/book4.jpg";
    }
    imgElement.classList.add("uploaded-image");
    newBookDiv.appendChild(imgElement);

    const formTitle = document.createElement("p");
    formTitle.innerHTML = title;
    formTitle.classList.add("title");
    newBookDiv.appendChild(formTitle);

    const formAuthor = document.createElement("p");
    formAuthor.innerHTML = author;
    formAuthor.classList.add("author");
    newBookDiv.appendChild(formAuthor);

    const formPages = document.createElement("p");
    formPages.innerHTML = `${pages} pages`;
    formPages.classList.add("pages");
    newBookDiv.appendChild(formPages);

    const formReaded = document.createElement("p");
    formReaded.innerHTML = readedBook(readed);
    formReaded.classList.add("status");
    newBookDiv.appendChild(formReaded);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function () {
      const bookDiv = this.parentElement;
      const index = Array.from(gridContainer.children).indexOf(bookDiv);
      myLibrary.splice(index, 1);
      bookDiv.remove();
    });

    newBookDiv.appendChild(deleteButton);
  });

// Delete default books
const deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    button.parentElement.remove();
  });
});

// Function to check if book is read
function readedBook(value) {
  return value ? "Read" : "Not read";
}

// Publicity image
const images = ["images/book1.jpg", "images/book2.jpg", "images/book3.jpg"];
let currentIndex = 0;

function changeImage() {
  const img = document.getElementById("publicity-image");
  img.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

document.addEventListener("DOMContentLoaded", function () {
  changeImage();
  setInterval(changeImage, 5000);
});
