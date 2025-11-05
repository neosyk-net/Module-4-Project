const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=82451f49';

async function fetchMovieData() {
const response = await fetch(url);
const data = await response.json();
console.log(data);
}

fetchMovieData();