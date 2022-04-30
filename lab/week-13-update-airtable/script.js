fetch('https://api.airtable.com/v0/appFOm7DDpMYM90u9/albums', {
  headers: {
    Authorization: 'Bearer keyxq87yw8w7CglcJ',
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(data);

    let filterValue = 'all'; // set initial value of filter
    const filter = document.querySelector('#record-label-filter'); // get filter element from HTML
    const albumsContainer = document.querySelector('.albums-container');

    function generateContent() {
      albumsContainer.innerHTML = ''; // clear content each time we re-run filter before adding updated version

      data.records
        .filter(album => {
          // if filterValue is set to all then don't filter - otherwise filter based on record_label property matching selected dropdown option
          return filterValue === 'all' ? album : album.fields.record_label === filterValue;
        })
        .sort((a, b) => {
          return a.fields.release_year - b.fields.release_year;
        })
        .forEach(album => {
          console.log(album);
          albumsContainer.innerHTML += `
          <div class="album">
            <div class="top-band" style="width: ${(album.fields.my_rating / 5) * 100}%"></div>
            <h5>${album.fields.release_year}</h5>  
            <h3>${album.fields.title}</h3>
            <h4>${album.fields.artist}</h4>
            <img src="${album.fields.album_cover[0].thumbnails.large.url}" width'200' />
          </div>
      `;
        });
    }
    generateContent();

    // listen for change event on select dropdown fromHTML
    filter.addEventListener('change', () => {
      filterValue = event.target.value; // update filterValue with value from selected option
      generateContent(); // after updating filter value, then re-run the content generation to caputre
    });
  });
