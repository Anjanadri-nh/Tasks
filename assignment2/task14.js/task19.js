const apiUrl = 'https://api.example.com/movies'; // replace with your API URL
const cardTemplate = `
  <div class="card">
    <img src="{{image}}" alt="{{title}}">
    <h2>{{title}}</h2>
    <p>{{description}}</p>
  </div>
`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const movieCards = data.results.map((movie) => {
      return cardTemplate.replace('{{image}}', movie.image).replace('{{title}}', movie.title).replace('{{description}}', movie.description);
    }).join('');

    document.getElementById('movie-cards').innerHTML = movieCards;
  })
  .catch(error => console.error(error));