import FetchFilmsApi from "../fetch-service/fechFilmsApi";
import { LocalStorageServiceFilms } from "../fetch-service/localStorageService";
import refs from "../fetch-service/refs";

const fetchApi = new FetchFilmsApi();
const localStorageFilms = new LocalStorageServiceFilms()
let id;

export function getFilmsById() {
    const getFilms = localStorageFilms.getFilms();
id =  getFilms.map(film => fetchApi.getIdFilm = film)
}
 



