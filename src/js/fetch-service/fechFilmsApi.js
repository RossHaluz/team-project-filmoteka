import axios from 'axios';

class FetchFilmsApi {
  #API_KEY;
  #totalPages;
  constructor(config = { baseURL: 'https://api.themoviedb.org/3/' }) {
    this.query = '';
    this.config = config;
    this.#API_KEY = '345007f9ab440e5b86cef51be6397df1';
    this.page = 1;
    this.#totalPages = null;
  }
  async fetchWithAllFilmsData({ mediaType, timeWindow }) {
    const resp = await axios.get(
      `trending/${mediaType}/${timeWindow}?api_key=${this.#API_KEY}&page=${
        this.page
      }`,
      this.config
    );

    return resp;
  }
  async getAllFilmsData({ mediaType = 'movie', timeWindow = 'day' }) {
    try {
      const resp = await this.fetchWithAllFilmsData({
        mediaType,
        timeWindow,
      });

      this.#totalPages = resp.data.total_pages;
      //
      //
      return resp;
    } catch (err) {
      console.log(err);
    }
  }
  async fetchWithCurrentFilm({ mediaType, id }) {
    const resp = await axios.get(
      `${mediaType}/${id}?api_key=${this.#API_KEY} `,
      this.config
    );

    return resp;
  }
  async getCurrentFilm({ mediaType = 'movie', id }) {
    try {
      const resp = await this.fetchWithCurrentFilm({
        mediaType,
        id,
      });
      //
      //
      return resp;
    } catch (err) {
      console.log(err);
    }
  }

  async fetchWithSearchFilmData({ mediaType, lang, page, include_adult }) {
    const resp = await axios.get(
      `search/${mediaType}?api_key=${this.#API_KEY}&language=${lang}&query=${
        this.query
      }&page=${page}&include_adult=${include_adult}`,
      this.config
    );
    return resp;
  }

  //
  //
  async fetchGenresList({ mediaType, genreType, page }) {
    const resp = await axios.get(
      `genre/${mediaType}/${genreType}?api_key=${this.#API_KEY}&page=${page}`,
      this.config
    );
    return resp;
  }
  //
  async getGenresList({ mediaType = 'movie', genreType = 'list', page = '1' }) {
    try {
      const resp = await this.fetchGenresList({ mediaType, genreType, page });
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
  //

  async getSearchFilmsData({
    mediaType = 'movie',
    lang = 'en-US',
    page = 1,
    include_adult = false,
  }) {
    try {
      const resp = await this.fetchWithSearchFilmData({
        mediaType,
        lang,
        page,
        include_adult,
      });
      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchTrailer(id) {
    const response = await axios.get(
      `movie/${id}/videos?api_key=${this.#API_KEY} `,
      this.config
    );
    return response;
  }

  incrementPage({ step = 1 }) {
    this.page += step;
  }
  get actualPage() {
    return this.page;
  }
  set actualPage(newPage) {
    this.page = newPage;
  }
  get actualQuery() {
    return this.query;
  }
  set actualQuery(newQuery) {
    return (this.query = newQuery.trim());
  }
  get totalPages() {
    return this.#totalPages;
  }
  set totalPages(newValue) {
    this.#totalPages = newValue;
  }
  get getIdFilm() {
    return this.id;
  }

  set getIdFilm(newId) {
    this.id = newId;
  }
}
// const api = new FetchFilmsApi();

// // console.log((api.actualQuery = 'asfas       s     '));
// console.log(api.config);
export default FetchFilmsApi;
