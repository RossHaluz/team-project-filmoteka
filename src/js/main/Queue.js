import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import { LocalStorageServiceFilms } from '../fetch-service/localStorageService';
import { refs } from '../fetch-service/refs';
import { API_KEY, ID_URL } from '../fetch-service/api-vars';
import {
  createMarkup,
  toChangeGenres,
  toChangeNum,
} from '../fetch-service/renderFuncApi';

const fetchFilmsApi = new FetchFilmsApi();
const localStorageFilms = new LocalStorageServiceFilms();
let filmId;

refs.modalBtnQueue.addEventListener('click', onClickQueue);

function onClickQueue() {
  refs.queue.classList.remove('btn--active');
  refs.watched.classList.add('btn--active');
}

function fetchFilmById(id) {
  return fetch(`${ID_URL}${id}?api_key=${API_KEY}`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}



