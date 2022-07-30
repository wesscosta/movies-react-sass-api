import axios from 'axios';
const API_KEY = '65ab568a53234eddf17c319b0431b141';
const BASE_URL = 'https://api.themoviedb.org/3'
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService {
    static getMovies(){
        return axios(withBaseUrl('/movie/popular'));
    }
}