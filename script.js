// http://www.omdbapi.com/?s=fast&apikey=82451f49
// http://www.omdbapi.com/?i=tt3896198&apikey=82451f49


const url = 'http://www.omdbapi.com/?s=fast&apikey=82451f49';

async function fetchMovieData() {
const movies = await fetch(url); 
const moviesData = await movies.json();
console.log(
 moviesData.map(
    (movie) => `<div class="movie">
    <figure class="movie__img--wrapper">
        <img src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg" alt="" class="movie__img">
    </figure>
    <div class="movie__title">
        Guardians of the Galaxy Vol. 2
    </div>
    <div class="movie__director">
        <span class="bold">Director:</span> James Gunn
    </div>
    <div class="movie__rated">
        <span class="bold">Rated:</span> <i>PG-13</i>
    </div>
    <div class="movie__year">
        <span class="bold">Released:</span> <i>2017</i>
    </div>
</div>`)
);
}


fetchMovieData();

