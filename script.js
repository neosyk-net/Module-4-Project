// const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=82451f49';

// async function fetchMovieData() {
// const movies = await fetch(url);
// const moviesData = await movies.json();
// console.log(moviesData);
// }


// fetchMovieData();

const url = 'https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3fc5582ab1mshabbdc05d6787823p1eb946jsn085ff5d111ec',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};


async function getData() {
 try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

getData();