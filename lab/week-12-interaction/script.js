let isChecked = false;
let sliderValue = 1000;
let instrumentType = 'all';
let sortBy = 'popularity';

function handleSort() {
  sortBy = event.target.value;
  generateContent();
}

function handleCheckbox() {
  isChecked = event.target.checked ? true : false;
  generateContent();
}

function handleDropdown() {
  instrumentType = event.target.value;
  generateContent();
}

const sliderDisplayValue = document.querySelector('.range-slider-container span');
function handleSlider() {
  sliderValue = event.target.value;
  sliderDisplayValue.innerHTML = `$${numberWithCommas(sliderValue)}`;
  generateContent();
}

const reset = document.querySelector('.reset');
const dropdown = document.querySelector('.dropdown-container select');
const checkbox = document.querySelector('.checkbox-container input');
const slider = document.querySelector('.range-slider-container input');
const radio = document.querySelector('.radio-container #popularity');

function resetFilters() {
  instrumentType = 'all';
  isChecked = false;
  sliderValue = 1000;
  sortBy = 'popularity';
  sliderDisplayValue.innerHTML = sliderValue;
  slider.value = sliderValue;
  dropdown.value = 'all';
  checkbox.checked = isChecked;
  radio.checked = true;
  generateContent();
}

// content
const content = document.querySelector('.content');
function generateContent() {
  content.innerHTML = '';
  data
    .filter(card => {
      return card.price <= sliderValue;
    })
    .filter(card => {
      return isChecked ? card.isInStock : card;
    })
    .filter(card => {
      return instrumentType === 'all' ? card : card.type === instrumentType;
    })
    .sort((a, b) => (sortBy ? a[sortBy] - b[sortBy] : null))
    .forEach(card => {
      content.innerHTML += `
      <div class="card">
       <p>Popularity Ranking: ${card.popularity}</p>
        <h4>${card.name}</h4>
        <p>${card.type}</p>
        <p class="price">$${card.price}</p>
        <p class="${card.isInStock ? 'in-stock' : 'out-of-stock'}">${
        card.isInStock ? 'In stock, order today!' : 'Out of stock'
      }</p>
      </div>
    `;
    });
}
generateContent();

// utility
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
