console.clear();

// const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
// const bookmarkSvg = document.querySelector('[data-js="bookmark-svg"]');

// const showAnswer = document.querySelector('[data-js="show-answer"]');
// const answer = document.querySelector('[data-js="answer"]');

// bookmarkButton.addEventListener("click", () => {
//   bookmarkSvg.classList.toggle("bookmark--active");
//   bookmarkSvg.classList.toggle("bookmark");
// });

// showAnswer.addEventListener("click", () => {
//   answer.classList.toggle("card__answer--active");
//   answer.classList.toggle("card__answer");
// });

// Get all the answer buttons
const answerButtons = document.querySelectorAll('[data-js="show-answer"]');

// Add event listener to each answer button
answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Toggle the answer visibility by adding/removing the 'hidden' class
    const answer = button.nextElementSibling;
    answer.classList.toggle("hidden");

    // Toggle the button text based on answer visibility
    if (answer.classList.contains("hidden")) {
      button.textContent = "Show answer";
    } else {
      button.textContent = "Hide answer";
    }
  });
});
