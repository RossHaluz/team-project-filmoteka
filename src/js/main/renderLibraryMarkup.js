import FetchFilmsApi from "../fetch-service/fechFilmsApi";
import { LocalStorageServiceFilms } from "../fetch-service/localStorageService";
import refs from "../fetch-service/refs";

const fetchApi = new FetchFilmsApi();
const localStorageFilms = new LocalStorageServiceFilms()
refs.libraryBtnWatched.addEventListener('click', onClickBtnLibraryWatched);
refs.libraryBtnQueue.addEventListener('click', onClickBtnLibraryQueue);

export function getFilmsById() {
    const getFilms = localStorageFilms.getFilms();
    getFilms.map(film => {
        fetchApi.getIdFilm = film
            fetchApi.getDateilsMovieById().then(data => creatLibraryMarkup(data));
    })

}
 
export function onClickBtnLibraryWatched() {
    refs.libraryList.innerHTML = '';
      getFilmsById()
}

function getFilmsQueueByID() {
    const getFilms = localStorageFilms.getQueueFilms();
    getFilms.map(film => {
        fetchApi.getIdFilm = film
            fetchApi.getDateilsMovieById(id).then(data => creatLibraryMarkup(data));
    })
}

export function onClickBtnLibraryQueue() {
    refs.libraryList.innerHTML = "";
    getFilmsQueueByID()
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



