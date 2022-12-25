import { refs } from './refs';
import { LocalStorageServiceFilms } from '../fetch-service/localStorageService';

const localStorageServiceFilms = new LocalStorageServiceFilms();
const movieStore = localStorageServiceFilms.getFilms();
let activeText = '';
refs.backdrop.addEventListener('click', addWatchedBtnClick);

function addWatchedBtnClick(e) {
  if (
    e.target.innerText === 'ADD TO WATCHED' ||
    e.target.innerText === 'REMOVE FROM WATCHED'
  ) {
    handlerSetLocalStorage(e.target.dataset.id);
  }
}
function handlerSetLocalStorage(id) {
  const btn = document.querySelector('.modal__watched-btn');
  const { pushFilm, films } = localStorageServiceFilms.setFilms(id);
  if (pushFilm) {
    btn.textContent = 'REMOVE FROM WATCHED';
  } else {
    btn.textContent = 'ADD TO WATCHED';
  }
}
export function checkWatchedLs(id) {
  if (movieStore.indexOf(id) === -1) {
    activeText = 'ADD TO WATCHED';
  } else {
    activeText = 'REMOVE FROM WATCHED';
  }
}
// ================================for QUEUE=============================
const movieStoreQue = localStorageServiceFilms.getQueueFilms();
let activeTextQue = '';
refs.backdrop.addEventListener('click', addWatchedBtnClickQue);

function addWatchedBtnClickQue(e) {
  if (
    e.target.innerText === 'ADD TO QUEUE' ||
    e.target.innerText === 'REMOVE FROM QUEUE'
  ) {
    handlerSetLocalStorageQue(e.target.dataset.id);
  }
}
function handlerSetLocalStorageQue(id) {
  const btnQue = document.querySelector('.modal__queue-btn');
  const { pushFilmQue, filmsQue } = localStorageServiceFilms.setQueueMovie(id);
  if (pushFilmQue) {
    btnQue.textContent = 'REMOVE FROM QUEUE';
  } else {
    btnQue.textContent = 'ADD TO QUEUE';
  }
}
export function checkQueLs(id) {
  if (movieStoreQue.indexOf(id) === -1) {
    activeTextQue = 'ADD TO QUEUE';
  } else {
    activeTextQue = 'REMOVE FROM QUEUE';
  }
}
function createMarkup({
  id,
  poster_path,
  title,
  overview,
  vote_average,
  vote_count,
  original_title,
  popularity,
  genres,
}) {
  // if (movieStore.indexOf(id) === -1) {
  //   activeText = 'ADD TO WATCHED';
  // } else {
  //   activeText = 'REMOVE FROM WATCHED';
  // }
  const markup = `<div class ="modal__img-box">
      <img
        class="modal__image"
        src="https://image.tmdb.org/t/p/w500/${poster_path}"
        alt="${title}"
        data-id=${id}
      />
      <button type="button" class="modal__trailer-btn">▶</button>
      </div>
      <div class="modal__text-content">
        <h2 class="modal__title">${title}</h2>
        <ul class="modal__info">
          <li class="modal__info-key">
            <p>Vote / Votes</span></p>
            <p>Popularity</p>
            <p>Original Title</p>
            <p>Genre</p>
          </li>
          <li class="modal__info-value">
            <p><span class="modal__vote-design">${toChangeNum(
              vote_average
            )}</span> / <span class="modal__votes-design">${vote_count}</span></p> 
            <p>${toChangeNum(popularity)}</p>
            <p>${original_title}</p>
            <p>${toChangeGenres(genres)}</p>
          </li>
        </ul>
        <h3 class="modal__about">ABOUT</h3>
        <p class="modal__about-text">${overview}</p>
        <div class="modal__btns">
          <button type="button" class="modal__watched-btn" data-id = ${id}>${activeText}</button>
          <button type="button" class="modal__queue-btn"data-id = ${id}>${activeTextQue}</button>
        </div>
      </div>
  `;

  refs.modalContent.insertAdjacentHTML('beforeend', markup);
}

function toChangeGenres(data) {
  return data.map(el => el.name).join(', ');
}

function toChangeNum(data) {
  return data % 1 === 0 ? data.toFixed() : data.toFixed(1);
}

export { createMarkup };
StaticRange;

/* AddQueue */
