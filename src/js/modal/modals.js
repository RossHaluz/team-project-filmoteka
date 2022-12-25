// const modal = document.querySelector('.modal');

// modal.addEventListener('click', closeModal);

// function closeModal(event) {
//     const modalCloseBtn = document.querySelector('.modal__icon-close');
//     const target = event.target;
//     console.log(target); // при нажатии на сам крестик (другой таргет) модалка не

//     if (target === modalCloseBtn) {
//         setTimeout(() => {
//             modal.style.visibility = 'hidden';
//         }, 300);
//         modal.style.opacity = 0;
//     }
// }

// FT-20 Реалізувати закриття модалки за натисканням на клавішу ESC і за кліком поза межами модалки, не забути зняти слухачів

// закинуть в function openModal
window.addEventListener('keydown', onEscClick);

// ________________

function onEscClick(evt) {
  if (evt.code === 'Escape') {
    closeModal();
    modal.classList.remove('visiable');
    modal.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', onEscClick);
  }
}

import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import { refs } from '../fetch-service/refs';
import { createMarkup } from '../fetch-service/renderFuncApi';
import { checkWatchedLs, checkQueLs } from '../fetch-service/renderFuncApi';

const fetchFilmsApi = new FetchFilmsApi();

refs.gallery.addEventListener('click', openModal); //galleryCard.dataset.id
refs.modalCloseBtn.addEventListener('click', closeModal);

async function openModal(e) {
  if (!e.target.classList.contains('card-image')) {
    return;
  }

  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  refs.modalContent.innerHTML = '';
  const filmId = e.target.dataset.id;
  checkWatchedLs(filmId);
  checkQueLs(filmId);
  fetchFilmsApi
    .getCurrentFilm({ id: filmId })
    .then(data => createMarkup(data.data))
    .catch(error => console.log(error));
  refs.backdrop.addEventListener('click', closeModal);
  window.addEventListener('keydown', closeModal);
}

async function closeModal(e) {
  if (
    e.target === refs.modalCloseBtn ||
    e.target === refs.backdrop ||
    e.keyCode === 27
  ) {
    document.body.classList.remove('no-scroll');
    refs.backdrop.classList.add('is-hidden');
  }
  refs.backdrop.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', closeModal);
}

export { openModal };

window.addEventListener('keydown', onEscClickEsc);

function onEscClickEsc(evt) {
  if (evt.code === 'Escape') {
    console.log('Escape');
    document.body.classList.remove('no-scroll');
    refs.backdrop.classList.add('is-hidden');
  }
}

const backdrop = document.querySelector('.footer__backdrop');
backdrop.addEventListener('click', onBackdropClick);
console.log(backdrop);

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    console.log('Backdrop');
    document.body.classList.remove('no-scroll');
    refs.backdrop.classList.add('is-hidden');
  }
}
