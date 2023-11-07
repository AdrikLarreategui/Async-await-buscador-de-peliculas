const APIKey = "a25d776e9ca63550cc426057cb76929d";
//const TokenAPI = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjVkNzc2ZTljYTYzNTUwY2M0MjYwNTdjYjc2OTI5ZCIsInN1YiI6IjY1NDYxMjYyNDFhNTYxMzM2OTNhMmEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.roLbn8LsKRr5cYlW2sX_GYuc2rZhFZ49y4W9TmzZX_E"
const APIURL = "https://api.themoviedb.org/3/search/movie"

const moviesContainer = document.querySelector('#title')
const formSearch = document.getElementById('form')
const searchInput = document.getElementById('searchId')

const showMovies = (movies) => {
    moviesContainer.innerHTML = ''
    movies.forEach ((movie) => {
        moviesContainer.innerHTML += `
        <div class="card col-lg-3 col-xs-12 col-md-6 m-2">
				<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="image">
				<div class="card-body">
						<h3 class="card-header">${movie.original_title}</h3>
						<h5 class="card-title">${movie.overview}</h5>
					</div>
     	</div>
        `
    }
    )
}

const searchMovie = async (e) => {
    e.preventDefault()
    try {
        const search = searchInput.value
        const res = await axios.get(`${APIURL}?query=${search}&include_adult=false&page=1&api_key=${APIKey}`)
        const movies = res.data.results
        showMovies(movies)
    } catch (error) {
        console.error(error)
    }
}

formSearch.addEventListener('submit', searchMovie)

