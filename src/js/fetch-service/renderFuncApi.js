import { genresSerch } from '../main/renderMainMarkup';
import { onCreat, creatCards } from '../main/renderMainMarkup';

const modal = document.querySelector('.modal');

function createMarkup(cardData) {
  const markup = cardData
    .map(
      ({
        id,
        poster_path,
        title,
        overview,
        vote_average,
        vote_count,
        original_title,
        popularity,
        genre_ids,
      }) =>
        `<div class="modal__window">
    <button type="button" class="modal__close">
    <svg class="icon-close" width="30" height="30">
    <use href="./img/svg/sprite.svg#icon-close">
    </use>
    </svg>
    </button>
    <div class="modal__content">
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
            <p><span class="modal__vote-design">Vote</span> / <span class="modal__votes-design">Votes</span></p>
            <p>Popularity</p>
            <p>Original Title</p>
            <p>Genre</p>
          </li>
          <li class="modal__info-value">
            <p>${vote_average} / ${vote_count}</p>
            <p>${popularity}</p>
            <p>${original_title}</p>
            <p>${genresSerch(genre_ids)}</p>
          </li>
        </ul>
        <h3 class="modal__about">ABOUT</h3>
        <p class="modal__about-text">${overview}</p>
        <div class="modal__btns">
          <button type="button" class="modal__watched-btn">Add to Watched</button>
          <button type="button" class="modal__queue-btn">Add to Queue</button>
        </div>
      </div>
    </div>
  </div>`
    )
    .join('');
  // )
  // .join('');
  modal.innerHTML = markup;
}

export { createMarkup };
