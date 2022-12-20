import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import { refs } from '../fetch-service/refs';
import { createMarkup } from '../fetch-service/renderFuncApi';
import { onCreat, creatCards } from '../main/renderMainMarkup';

const fetchFilmsApi = new FetchFilmsApi();
const num = 345.5767;
const numS = Math.ceil(1.234)  //String(num).slice(0, -3);
console.log(numS);
refs.gallery.addEventListener('click', openModal); 
 refs.modalCloseBtn.addEventListener('click', closeModal);

async function openModal(e) {
  if (!e.target.classList.contains('card-image')) {
    return;
  }

  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll')
  refs.modalContent.innerHTML = ''
  const filmId = e.target.dataset.id;
  
  fetchFilmsApi
    .getCurrentFilm({ id: filmId })
    .then(data => createMarkup(data.data)
    )
    .catch(error => console.log(error));
}

async function closeModal(e) {
  if (e.target === refs.modalCloseBtn) {
    document.body.classList.remove('no-scroll');
      refs.backdrop.classList.add('is-hidden');
  }
}

//   if (target === refs.modalCloseBtn) {
//     setTimeout(() => {
//      refs.modal.classList.remove('modal__show');
//     }, 300);
//     window.removeEventListener('scroll', blockScroll);
//     refs.gallery.removeEventListener('click', openModal);
//   }
// }

export {openModal}

