let isClicked = false;
let sliderValue = 0;

const button = document.querySelector('.button-container');
function handleClick() {
  console.log('button clicked', event.target.value);
  isClicked = true;
  generateContent();
}

const checkbox = document.querySelector('.checkbox-container');
function handleCheckbox() {
  console.log('checkbox checked', event.target.checked);
  console.log(checkbox);
}

const dropdown = document.querySelector('.dropdown-container');
function handleDropdown() {
  console.log('dropdown changed to', event.target.value);
  console.log(dropdown);
}

const textbox = document.querySelector('.text-box-container');
function handleTextBox() {
  console.log('text box typed', event.target.value);
  console.log(textbox);
}

const slider = document.querySelector('.range-slider-container');
function handleSlider() {
  sliderValue = event.target.value;
  slider.querySelector('div').innerHTML = sliderValue;
  generateContent();
}

// content
const content = document.querySelector('.content');
const data = [
  {
    title: 'Card A',
    score: 4,
  },
  {
    title: 'Card B',
    score: 2,
  },
  {
    title: 'Card C',
    score: 8,
  },
  {
    title: 'Card D',
    score: 0,
  },
  {
    title: 'Card E',
    score: 42,
  },
  {
    title: 'Card F',
    score: 3,
  },
];

function generateContent() {
  content.innerHTML = '';
  data
    .filter(card => {
      return card.score > sliderValue;
    })
    .sort((a, b) => (isClicked ? a.score - b.score : null))
    .forEach(card => {
      content.innerHTML += `
      <div class="card">
        <h4>${card.title}</h4>
        <p>Ranking: ${card.score}</p>
      </div>
    `;
    });
}
generateContent();
