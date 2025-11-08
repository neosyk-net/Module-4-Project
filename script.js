const apiKey = 'https://www.omdbapi.com/?apikey=82451f49';
const movieContainer = document.getElementById('movies');
const searchInput = document.getElementById('search-wrapper');
const searchButton = document.querySelector('.fa-magnifying-glass');

function renderMovies(list) {
    if (!movieContainer) return;
    if (!Array.isArray(list) || list.length === 0) {
        movieContainer.innerHTML = '<p>No movies found.</p>';
        return
    }
    const html = list.map(movie => {
        const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg';
        const title = movie.Title || 'Unknown Title';
        const year = movie.Year || 'Unknown Year';
        return ` <div class="movie">
            <figure class="movie__img--wrapper">
                <img src="${poster}" alt="${title}" class="movie__img">
            </figure>
            <div class="movie__title">
                ${title}
            </div>
            <div class="movie__year">
                <span class="bold">Released:</span> <i>${year}</i>
            </div>
        </div>`
    }).join('');
    movieContainer.innerHTML = html;
}

async function fetchMovies(query = 'fast') {
    try {
        const response = await fetch(`${apiKey}&s=${encodeURIComponent(query)}`);
        const data = await response.json();
        const results = Array.isArray(data.Search) ? data.Search : [];
        renderMovies(results);
    } catch (error) {
        console.error('Error fetching movies:', error);
        renderMovies([]);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchMovies('fast');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            if (ev.key === 'Enter') {
                const query = (searchInput.value || '').trim();
                fetchMovies(query || 'fast');
            }
        });
    }
});























































































// fetchMovieData();
// // http://www.omdbapi.com/?s=fast&apikey=82451f49
// // http://www.omdbapi.com/?i=tt3896198&apikey=82451f49


// const url = 'https://www.omdbapi.com/?apikey=82451f49';

// async function fetchMovieData() {
// const movies = await fetch(url); 
// const moviesData = await movies.json();
// console.log(moviesData)
// //  moviesData.map(
// //     (movie) => `<div class="movie">
// //     <figure class="movie__img--wrapper">
// //         <img src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg" alt="" class="movie__img">
// //     </figure>
// //     <div class="movie__title">
// //         Guardians of the Galaxy Vol. 2
// //     </div>
// //     <div class="movie__director">
// //         <span class="bold">Director:</span> James Gunn
// //     </div>
// //     <div class="movie__rated">
// //         <span class="bold">Rated:</span> <i>PG-13</i>
// //     </div>
// //     <div class="movie__year">
// //         <span class="bold">Released:</span> <i>2017</i>
// //     </div>
// // </div>`)
// // ;
// }


// fetchMovieData();