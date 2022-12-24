import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import { refs } from '../fetch-service/refs';
import { createMarkup } from '../fetch-service/renderFuncApi';

const fetchFilmsApi = new FetchFilmsApi();
refs.gallery.addEventListener('click', openModal);
refs.modalCloseBtn.addEventListener('click', closeModal);

async function openModal(e) {
  if (!e.target.classList.contains('card-image')) {
    return;
  }

  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  refs.modalContent.innerHTML = '';
  const filmId = e.target.dataset.id;

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
