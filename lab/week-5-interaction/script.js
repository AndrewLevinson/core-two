// this builds on our previous button example.

// first set variables for our welcome text and button
const welcomeText = document.querySelector('.welcome-text');
const button = document.querySelector('.welcome-button');

// creates a flag to track if our text is visible
let isWelcomeTextVisible = false;

function buttonClick() {
  // we use an if/else statement to apply conditional styling and html when toggling button
  // see this reference for comparison operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators

  // is welcomeTextVisible is false then...
  if (!isWelcomeTextVisible) {
    welcomeText.classList.add('visible');
    button.classList.add('clicked');
    button.innerHTML = 'Goodbye 👋'; // here we change the text in the button directly
    isWelcomeTextVisible = true; // after, we set the variable above to true
  } else {
    welcomeText.classList.remove('visible');
    button.classList.remove('clicked');
    button.innerHTML = 'Howdy';
    isWelcomeTextVisible = false; // after, we set the variable above to false
  }
}
