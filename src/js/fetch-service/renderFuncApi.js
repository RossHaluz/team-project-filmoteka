import { refs } from './refs';

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
  const markup = `
      <img
        class="modal__image"
        src="https://image.tmdb.org/t/p/w500/${poster_path}"
        alt="${title}"
        data-id=${id}
      />
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
          <button type="button" class="modal__watched-btn">Add to Watched</button>
          <button type="button" class="modal__queue-btn">Add to Queue</button>
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

// сделать функцию проверки количества чисел на вход если допустим 7 то слайсить на два числа если восемь то слайсить на три
//как округлить цифрі к одной после точки
// как одинаково спозиционировать дэлементы в двух лишках
// <button type="button" class="modal__close">
// <svg class="icon-close" width="30" height="30">
// <use href="./img/svg/sprite.svg#icon-close">
// </use>
// </svg>
// </button>
export { createMarkup };
