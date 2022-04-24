let instrumentType = 'all'; // first we create an initial state for our dropdown - we want all items to show first

// update dropdown
function handleDropdown() {
  // this function runs every time a new element is selected
  instrumentType = event.target.value; // update our instrumentType variable from line 1 with the new value from the dropdown chang event
  generateContent(); // after updating the new filter condition, then re-run our content generation
}

// content
const content = document.querySelector('.content'); // empty placeholder div in our HTML for our data-driven content
function generateContent() {
  content.innerHTML = ''; // important! we want to delete all content on the screen each time we re-run to capture new filter and sorting parameters
  data
    .filter(item => {
      return instrumentType === 'all' ? item : item.type === instrumentType; // if our dropdown is set to all, return evey item, otherwise only return items that match selected instrument type
    })
    .forEach(item => {
      // eveything in this forEach is the same as your project 3 Airtable examples
      content.innerHTML += `
      <div class="card">
       <p>Popularity Ranking: ${item.popularity}</p>
        <h4>${item.name}</h4>
        <p>${item.type}</p>
        <p class="price">$${item.price}</p>
        <p class="${item.isInStock ? 'in-stock' : 'out-of-stock'}">${
        item.isInStock ? 'In stock, order today!' : 'Out of stock'
      }</p>
      </div>
    `;
    });
}
generateContent(); // run the function when the page loads for the first time
