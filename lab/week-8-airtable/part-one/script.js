// basic version from class
// first, we fetch our data from Airtable
fetch('https://api.airtable.com/v0/appFOm7DDpMYM90u9/albums', {
  headers: {
    Authorization: 'Bearer keyxq87yw8w7CglcJ', // this is your API key, starting with 'key...' found in your Airtable account
  },
})
  .then(res => res.json()) // tells JS to expect data in json format
  .then(data => {
    // all your code should go inside here

    console.log(data); // first, log out your data. Explore it in the browser console.

    const albumsContainer = document.querySelector('.albums-container'); // tell JS about the div we added to our html file so we can put content inside it

    // loop over each record (row) of our Airtable data
    data.records.forEach(album => {
      console.log(album); // look in the console at each album to see what fields we can access (these are your own table headers from Airtable)

      // now we add html to our albumsContainer div
      // this is where we take our data from Airtable and put it in our html
      // think of this chunk of HTML as a component template for each entry in our database
      // note the backticks `` below. This allows us to add html + js together using ${field} in a single block of code
      albumsContainer.innerHTML += `
        <div class="album">
          <h5>${album.fields.release_year}</h5>  
          <h3>${album.fields.title}</h3>
          <h4>${album.fields.artist}</h4>
          <img src="${album.fields.album_cover[0].thumbnails.large.url}" width='200'/>
        </div>
        `;

      // that's it!
      // Try adding or removing items in your Airtable base and see your website update on refresh
    });
  });
