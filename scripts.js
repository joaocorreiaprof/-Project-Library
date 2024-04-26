const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

// JavaScript to handle star selection
const ratingInput = document.getElementById("ratingInput");
const stars = ratingInput.querySelectorAll(".rating span");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.getAttribute("data-value"));
    // Set the rating value in a hidden input field or handle it as needed
    console.log("Selected rating:", rating);
    // Update the appearance of the stars based on the selected rating
    stars.forEach((s) => {
      if (parseInt(s.getAttribute("data-value")) <= rating) {
        s.innerHTML = "&#x2605;"; // filled star
      } else {
        s.innerHTML = "&#x2606;"; // empty star
      }
    });
  });
});
