// array called myGroceries
const myGroceries = ['eggs', 'hot sauce', 'bananas', 'avocados', 'cereal'];

// access information from array
console.log(myGroceries); // whole array. see console in browser for presentation
console.log(myGroceries[2]); // specific item. Remember, arrays start at 0, not 1
console.log(myGroceries.length); // tells me how many items in the array

// let's form a human readable sentence
console.log(
  `I need to pick up ${myGroceries.length} items from the store, and I can't forget ${myGroceries[2]} this time!`
);

// beyond the abstract.
// moving away from console logging to the actual webpage

const listElement = document.querySelector('.grocery-list'); // get list element placeholder from our html

// forEach method loops over an array and
myGroceries.forEach((item, i) => {
  console.log(item, i); // see what the item and i temp variable do
  listElement.innerHTML += `<li>${item}</li>`; // add html template and put on page
});

// let's learn about objects
// objects are another type of data. They consiste of key:value pairs (kind of like css)
// we make up the names of the keys and values ourselves (or get them from an API)
const person = {
  name: 'Andrew',
  age: 31,
  isHavingFun: true,
  interests: ['coding', 'music', 'hockey'],
};

// see what it looks like in the console
console.log(person);
console.log(person.name); // use a . to access specific property values in an object.
console.log(person.interests[0]); // we can even have arrays inside of objects

// it is common to have an array of objects. Where each item in the array is an object (instead of a string like our myGroceries example)
const people = [
  {
    name: 'Andrew Levinson',
    age: 31,
    isHavingFun: true,
  },
  {
    name: 'Steve Jackson',
    age: 99,
    isHavingFun: false,
  },
  {
    name: 'Jessica Smith',
    age: 50,
    isHavingFun: true,
  },
];

// we can loop over this array of objects and do something a little more complex than before
// let's create cards of info from our people in our array
const peopleElement = document.querySelector('.people');
people.forEach(person => {
  // console.log(person);

  peopleElement.innerHTML += `
    <div class="card">
        <p class="age">${person.age} years old</p>
        <h3 class="title">${person.name}</h3>
        <p class="fun">${person.isHavingFun ? 'I am having fun! :)' : 'I am not having fun :('}</p>
  </div>`;
});

// let's get data from a url instead of just making it locally
// same basic idea, but we need to learn "fetch" in JavaScript first

const toDoList = document.querySelector('.to-do-list'); // get our list like normal

// use fetch().then() in JS to get remote data async (you can click the URL and see what the data looks like in your browser)
fetch('https://jsonplaceholder.typicode.com/todos') // fetch special URL that returns json
  .then(response => response.json()) // telling our program to process this as JSON data (JavaScript Object Notation)
  .then(data => {
    // the data is now available here to use
    console.log(data); // always log out your data to see how it's structured

    data
      .filter((x, i) => i < 10) // top 10 only
      .sort((a, b) => a.completed - b.completed) // sort by completed status
      .forEach(item => {
        let colorClass = item.completed ? 'completed' : 'active'; // ternary operator. A simpler type of if statement. Use to set class based on completed status from data
        toDoList.innerHTML += `<li class="to-do ${colorClass}">${item.title}</li>`;
      });
  });
