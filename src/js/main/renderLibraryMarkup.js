import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import { LocalStorageServiceFilms } from '../fetch-service/localStorageService';
import { refs } from "../fetch-service/refs";



const fetchApi = new FetchFilmsApi();
const localStorageFilms = new LocalStorageServiceFilms()

export function getFilmsById() {
    const getFilms = localStorageFilms.getFilms();
    getFilms.map(film => {
        fetchApi.getIdFilm = film
            fetchApi.getDateilsMovieById().then(data => creatLibraryMarkup(data));
    })

}
 

function creatLibraryMarkup({poster_path, title}){ 
    const markup =  `
    <li class="library-list__item card-set-iteam">
    <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="">
      <h3 class="library-list__matkup-title">${title}</h3>
      </li>
    `;

    refs.libraryList.insertAdjacentHTML('beforeend', markup)

}



