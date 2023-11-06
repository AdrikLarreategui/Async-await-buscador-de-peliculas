const APIKey = "9e9cd7ce5dfc1c9de8d770d482d83132";
const TokenAPI = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTljZDdjZTVkZmMxYzlkZThkNzcwZDQ4MmQ4MzEzMiIsInN1YiI6IjY1NDYxMjYyNDFhNTYxMzM2OTNhMmEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kFUENuVrI79BXjHDt6wbsL3mLbJhGvNnmZI6rrq6xMg"
const URL = "https://api.themoviedb.org/3/movie/550?api_key=9e9cd7ce5dfc1c9de8d770d482d83132";

const movieContainer = document.querySelector('#title')
const formSearch = document.getElementById('form')
const searchInput = document.getElementById('searchId')

cont options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authoritation: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTljZDdjZTVkZmMxYzlkZThkNzcwZDQ4MmQ4MzEzMiIsInN1YiI6IjY1NDYxMjYyNDFhNTYxMzM2OTNhMmEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kFUENuVrI79BXjHDt6wbsL3mLbJhGvNnmZI6rrq6xMg'
    }
};