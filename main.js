const APIKey = "9e9cd7ce5dfc1c9de8d770d482d83132";
const TokenAPI = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTljZDdjZTVkZmMxYzlkZThkNzcwZDQ4MmQ4MzEzMiIsInN1YiI6IjY1NDYxMjYyNDFhNTYxMzM2OTNhMmEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kFUENuVrI79BXjHDt6wbsL3mLbJhGvNnmZI6rrq6xMg"
const URL = "https://api.themoviedb.org/3/movie/550?api_key=9e9cd7ce5dfc1c9de8d770d482d83132";

const moviesContainer = document.querySelector('#title')
const formSearch = document.getElementById('form')
const searchInput = document.getElementById('searchId')

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authoritation: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTljZDdjZTVkZmMxYzlkZThkNzcwZDQ4MmQ4MzEzMiIsInN1YiI6IjY1NDYxMjYyNDFhNTYxMzM2OTNhMmEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kFUENuVrI79BXjHDt6wbsL3mLbJhGvNnmZI6rrq6xMg'
    }
};

const showMovies = (movies) => {
    moviesContainer.innerHTML = ''
    movies.forEach ((movie) => {
        moviesContainer.innerHTML += `
        <div class="card col-lg-3 col-xs-12 col-md-6 m-2">
				<img src="${movie.image}" alt="Card image"/>
				<div class="card-body">
						<h3 class="card-header">${movie.name}</h3>
						<h5 class="card-title">${movie.status}</h5>
					</div>
     	</div>
        `
    }
    )
}

