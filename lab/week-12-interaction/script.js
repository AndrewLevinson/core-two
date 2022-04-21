let isChecked = false;
let sliderValue = 1000;
let instrumentType = 'all';
let sortBy = null;

const radio = document.querySelector('.radio-container');
function handleSort() {
  console.log('sort option', event.target.value);
  sortBy = event.target.value;
  generateContent();
}

const checkbox = document.querySelector('.checkbox-container');
function handleCheckbox() {
  console.log('checkbox checked', event.target.checked);
  console.log(checkbox);
  isChecked = event.target.checked ? true : false;
  generateContent();
}

const dropdown = document.querySelector('.dropdown-container');
function handleDropdown() {
  console.log('dropdown changed to', event.target.value);
  console.log(dropdown);
  instrumentType = event.target.value;
  generateContent();
}

const slider = document.querySelector('.range-slider-container');
function handleSlider() {
  sliderValue = event.target.value;
  slider.querySelector('span').innerHTML = sliderValue;
  generateContent();
}

// content
const content = document.querySelector('.content');
const data = [
  {
    name: 'Electric Guitar',
    type: 'string',
    popularityRanking: 1,
    price: 305,
    isInStock: true,
  },
  {
    name: 'Drum Kit',
    type: 'percussion',
    popularityRanking: 3,
    price: 700,
    isInStock: false,
  },
  {
    name: 'Bass Guitar',
    type: 'string',
    popularityRanking: 2,
    price: 130,
    isInStock: true,
  },
  {
    name: 'Cello',
    type: 'string',
    popularityRanking: 6,
    price: 245,
    isInStock: true,
  },
  {
    name: 'Trumpet',
    type: 'brass',
    popularityRanking: 11,
    price: 130,
    isInStock: true,
  },
  {
    name: 'Trombone',
    type: 'brass',
    popularityRanking: 9,
    price: 650,
    isInStock: false,
  },
];

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
       <p>Popularity Ranking: ${card.popularityRanking}</p>
        <h4>${card.name}</h4>
        <p>${card.type}</p>
        <p>$${card.price}</p>
        <p class="${card.isInStock ? 'in-stock' : 'out-of-stock'}">${
        card.isInStock ? 'In stock, order today!' : 'Out of stock'
      }</p>
      </div>
    `;
    });
}
generateContent();
