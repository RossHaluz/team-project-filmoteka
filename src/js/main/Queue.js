import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import { LocalStorageServiceFilms } from '../fetch-service/localStorageService';
import { refs } from '../fetch-service/refs';
import { API_KEY, ID_URL } from '../fetch-service/api-vars';
import { fetchFilmById } from './watched';

const localStorageFilms = new LocalStorageServiceFilms();
refs.queue.addEventListener('click', renderFilmsByIdQue);
refs.queue.addEventListener('click', onClickQueue);

function onClickQueue() {
  refs.watched.classList.remove('btn--active');
  refs.queue.classList.add('btn--active');
}
// function fetchFilmById(id) {
//   return fetch(`${ID_URL}${id}?api_key=${API_KEY}`)
//     .then(response => {
//       return response.json();
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
refs.queue.addEventListener('click', renderFilmsByIdQue);
export function renderFilmsByIdQue() {
  // if (refs.queue.classList.contains('btn--active')) {
  //     refs.watched.classList.remove('btn--active');
  //     refs.queue.classList.add('btn--active');
  refs.libraryList.innerHTML = '';
  const getIdsQue = localStorageFilms.getQueueFilms();
  console.log(getIdsQue);
  getIdsQue.map(id => {
    fetchFilmById(id).then(filmData => {
      createListItemQue(filmData);
    });
  });
}
// }

function createListItemQue(data) {
  refs.libraryList.innerHTML += `<li class="gallery-card card">
              <img data-id=${data.id} 
              src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${
    data.title
  }" class="card-image">
            <div class="card-info">
              <p class="card-name">${data.title}</p>
              <p class="card-genre">${showGenresQue(data.genres)}
              <span class="card-year">${showYearQue(data.release_date)}
              </span></p>
              </div>
          </li>`;
}

function showGenresQue(genres) {
  return genres.map(el => el.name).join(', ');
}
function showYearQue(date) {
  return `| ${date.slice(0, 4)}`;
}

// import FetchFilmsApi from '../fetch-service/fechFilmsApi';
// import { LocalStorageServiceFilms } from '../fetch-service/localStorageService';
// import { refs } from '../fetch-service/refs';
// import { API_KEY, ID_URL } from '../fetch-service/api-vars';
// import {
//   createMarkup,
//   toChangeGenres,
//   toChangeNum,
// } from '../fetch-service/renderFuncApi';

// const fetchFilmsApi = new FetchFilmsApi();
// const localStorageFilms = new LocalStorageServiceFilms();
// let filmId;

// refs.modalBtnQueue.addEventListener('click', onClickQueue);

// function onClickQueue() {
//   refs.queue.classList.remove('btn--active');
//   refs.watched.classList.add('btn--active');
// }

// function fetchFilmById(id) {
//   return fetch(`${ID_URL}${id}?api_key=${API_KEY}`)
//     .then(response => {
//       return response.json();
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
