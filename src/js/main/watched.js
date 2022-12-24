import { LocalStorageServiceFilms } from '../fetch-service/localStorageService';
import { refs } from '../fetch-service/refs';
import { API_KEY, ID_URL } from '../fetch-service/api-vars';

refs.watched.addEventListener('click', onClickWatched);
// refs.queue.addEventListener('click', onClickQueue);
const localStorageFilms = new LocalStorageServiceFilms();
// function onClickQueue() {
//   refs.queue.classList.add('btn--active');
//   refs.watched.classList.remove('btn--active');
// }
function onClickWatched() {
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

export function renderFilmsById() {
  if (refs.watched.classList.contains('btn--active')) {
    console.log('it work');
    refs.queue.classList.remove('btn--active');
    refs.watched.classList.add('btn--active');
    refs.libraryList.innerHTML = '';
    getIds = localStorageFilms.getFilms();
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

// import { genresSerch } from '../main/renderMainMarkup';
// import { onCreat, creatCards } from '../main/renderMainMarkup';
// import { refs } from './refs';
// import { LocalStorageServiceFilms } from '../fetch-service/localStorageService';
// //  ADDED BY ANDRII
// const localStorageServiceFilms = new LocalStorageServiceFilms();
// const movieStore = localStorageServiceFilms.getFilms();
// let activeText = '';
// refs.backdrop.addEventListener('click', watchedBtnClick);
// function watchedBtnClick(e) {
//   if (
//     e.target.innerText === 'ADD TO WATCHED' ||
//     e.target.innerText === 'REMOVE FROM WATCHED'
//   ) {
//     handlerSetLocalStorage(e.target.dataset.id);
//   }
// }
// function handlerSetLocalStorage(id) {
//   const btn = document.querySelector('.modal__watched-btn');
//   const { pushFilm, movies } = localStorageServiceFilms.setFilms(id);
//   if (pushFilm) {
//     btn.textContent = 'REMOVE FROM WATCHED';
//   } else {
//     btn.textContent = 'ADD TO WATCHED';
//   }
// }
// // ADDED BY ANDRII SHKRAB
// function createMarkup({
//   id,
//   poster_path,
//   title,
//   overview,
//   vote_average,
//   vote_count,
//   original_title,
//   popularity,
//   genres,
// }) {
//   if (movieStore.indexOf(id) === -1) {
//     activeText = 'ADD TO WATCHED';
//   } else {
//     activeText = 'REMOVE FROM WATCHED';
//   }
//   const markup = `
//       <img
//         class="modal__image"
//         src="https://image.tmdb.org/t/p/w500/${poster_path}"
//         alt="${title}"
//         data-id=${id}
//       />
//       <div class="modal__text-content">
//         <h2 class="modal__title">${title}</h2>
//         <ul class="modal__info">
//           <li class="modal__info-key">
//             <p><span class="modal__vote-design">Vote</span> / <span class="modal__votes-design">Votes</span></p>
//             <p>Popularity</p>
//             <p>Original Title</p>
//             <p>Genre</p>
//           </li>
//           <li class="modal__info-value">
//             <p>${vote_average} / ${vote_count}</p>
//             <p>${popularity}</p>
//             <p>${original_title}</p>
//             <p>${createGenres(genres)}</p>
//           </li>
//         </ul>
//         <h3 class="modal__about">ABOUT</h3>
//         <p class="modal__about-text">${overview}</p>
//         <div class="modal__btns">
//           <button type="button" class="modal__watched-btn" data-id = ${id}>${activeText}</button>
//           <button type="button" class="modal__queue-btn">Add to Queue</button>
//         </div>
//       </div>
//   `;

//   refs.modalWrap.insertAdjacentHTML('beforeend', markup);
// }

// function createGenres(data) {
//   return data.map(el => el.name).join(', ');
// }
// // <button type="button" class="modal__close">
// // <svg class="icon-close" width="30" height="30">
// // <use href="./img/svg/sprite.svg#icon-close">
// // </use>
// // </svg>
// // </button>
// export { createMarkup };
