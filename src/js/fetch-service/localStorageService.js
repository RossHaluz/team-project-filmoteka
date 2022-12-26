import getTrendingMoviesAndRender from '../main/renderMainMarkup';
import FetchFilmsApi from './fechFilmsApi';
import refs from './refs';

export class LocalStorageServiceFilms {
  constructor() {
    this.keyNameWached = 'films-watched';
    this.keyNameQueue = 'films-queue';
    this.idFilm = null;
  }

  getFilms() {
    const filmsLocalStorage = localStorage.getItem(this.keyNameWached);

    if (filmsLocalStorage !== null) {
      return JSON.parse(filmsLocalStorage);
    }

    return [];
  }

  setFilms(id) {
    let films = this.getFilms();
    let pushFilm = false;
    const index = films.indexOf(id);
    if (index === -1) {
      films.push(id);
      pushFilm = true;
    } else {
      films.splice(index, 1);
    }

    localStorage.setItem(this.keyNameWached, JSON.stringify(films));

    return {
      pushFilm,
      films,
    };
  }
  getQueueFilms() {
    const filmsLocalStorageQue = localStorage.getItem(this.keyNameQueue);

    if (filmsLocalStorageQue !== null) {
      return JSON.parse(filmsLocalStorageQue);
    }

    return [];
  }
  setQueueMovie(id) {
    let filmsQue = this.getQueueFilms();
    let pushFilmQue = false;
    const indexQue = filmsQue.indexOf(id);
    if (indexQue === -1) {
      filmsQue.push(id);
      pushFilmQue = true;
    } else {
      filmsQue.splice(indexQue, 1);
    }

    localStorage.setItem(this.keyNameQueue, JSON.stringify(filmsQue));

    return {
      pushFilmQue,
      filmsQue,
    };
  }

  get filmByID() {
    return this.idFilm;
  }

  set filmByID(newIdFilm) {
    this.idFilm = newIdFilm;
  }
}
