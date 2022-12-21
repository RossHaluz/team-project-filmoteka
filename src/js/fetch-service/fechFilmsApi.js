import axios from 'axios';

class FetchFilmsApi {
  #API_KEY;
  constructor() {
    this.#API_KEY = "f896ccabafb5d2939071b9f1aa9e42c1";
    this.BASE_URL = "https://api.themoviedb.org/3";
    this.query = '';
    this.page = 1;
    this.total_page = null;
    this.id = null;
  }

async  getMouvieSearch () {
  const rest = await axios.get(`${this.BASE_URL}/search/movie?api_key=${this.#API_KEY}&language=en-US&page=${this.page}&include_adult=false&query=${this.query}`);

  return rest.data;
}
  
  async getTrendingMovies() {
    const resp = await axios.get(`${this.BASE_URL}/trending/movie/day?api_key=${this.#API_KEY}&page=${this.page}`);

    return resp.data;
  }

  async getDateilsMovieById() {
    const resp = await axios.get(`${this.BASE_URL}/movie/${this.id}?api_key=${this.#API_KEY}&language=en-US`)

    return resp.data;
  }

  get pageNum() {
    return this.page; 
  }

  set pageNum(newPage) {
    this.page = newPage;
  }
  

  icrementPage() {
    this.page = 1;
  }

  get serchValue() {
    return this.serchValue;
  }

  set serchValue(newValue) {
    this.query = newValue;
  }

  get getIdFilm() {
    return this.id;
  }

  set getIdFilm(newId) {
    this.id = newId;
  }
}


export default FetchFilmsApi;