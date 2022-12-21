import FetchFilmsApi from "../fetch-service/fechFilmsApi";
import { LocalStorageServiceFilms } from "../fetch-service/localStorageService";
import refs from "../fetch-service/refs";


const fetchApi = new FetchFilmsApi();
const localStorage = new LocalStorageServiceFilms()

const localStorageFilm = localStorage.getFilms();


