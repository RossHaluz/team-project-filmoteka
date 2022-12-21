import getTrendingMoviesAndRender from "../main/renderMainMarkup";
import FetchFilmsApi from "./fechFilmsApi";
import { onClickFilm } from '../modal/modals';
import refs from "./refs";

const fetchApi = new FetchFilmsApi ()

export class LocalStorageServiceFilms {
    constructor() {
        this.keyName = 'films';
        this.idFilm = null;
    }

    getFilms() {
        const filmsLocalStorage = localStorage.getItem(this.keyName)

        if (filmsLocalStorage !== null) {
            return JSON.parse(filmsLocalStorage)
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
            films.splice(index, 1)
        }

        localStorage.setItem(this.keyName, JSON.stringify(films));

        return {
            pushFilm,
            films,
        }
    }

    get filmByID() {
        return this.idFilm;
    }

    set filmByID(newIdFilm) {
        this.idFilm = newIdFilm;
    }
}

