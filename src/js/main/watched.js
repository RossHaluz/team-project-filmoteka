import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import { LocalStorageServiceFilms } from '../fetch-service/localStorageService';
import { refs } from '../fetch-service/refs';
import { API_KEY, ID_URL } from '../fetch-service/api-vars';
import { renderFilmsByIdQue } from './Queue';

const localStorageFilms = new LocalStorageServiceFilms();
refs.watched.addEventListener('click', onClickWatched);
refs.watched.addEventListener('click', renderFilmsById);
function onClickWatched() {
  refs.queue.classList.remove('btn--active');
  refs.watched.classList.add('btn--active');
}

export function fetchFilmById(id) {
  return fetch(`${ID_URL}${id}?api_key=${API_KEY}`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}

function renderFilmsById() {
  if (refs.watched.classList.contains('btn--active')) {
    refs.queue.classList.remove('btn--active');
    refs.watched.classList.add('btn--active');
    refs.libraryList.innerHTML = '';
    const getIds = localStorageFilms.getFilms();
    console.log(getIds);
    getIds.map(id => {
      fetchFilmById(id).then(filmData => {
        createListItem(filmData);
      });
    });
  }
}
renderFilmsById();
function createListItem(data) {
  refs.libraryList.innerHTML += `<li class="gallery-card card">
              <img data-id=${data.id} 
              src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${
    data.title
  }" class="card-image">
            <div class="card-info">
              <p class="card-name">${data.title}</p>
              <p class="card-genre">${showGenres(data.genres)}
              <span class="card-year">${showYear(data.release_date)}
              </span></p>
              </div>
          </li>`;
}

function showGenres(genres) {
  return genres.map(el => el.name).join(', ');
}
function showYear(date) {
  return `| ${date.slice(0, 4)}`;
}
