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


window.addEventListener('keydown', onEscClick)




import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import { refs } from '../fetch-service/refs';
import { createMarkup } from '../fetch-service/renderFuncApi';
import { onCreat, creatCards } from '../main/renderMainMarkup';

const fetchFilmsApi = new FetchFilmsApi();

refs.gallery.addEventListener('click', openModal); //galleryCard.dataset.id
refs.modalCloseBtn.addEventListener('click', closeModal);

async function openModal(e) {
    if (!e.target.classList.contains('card-image')) {
        return;
    }
    document.body.classList.add('no-scroll')
    refs.modalWrap.innerHTML = ''
    const filmId = e.target.dataset.id;

    fetchFilmsApi
        .getCurrentFilm({ id: filmId })
        .then(data =>
            createMarkup(data.data)
        )
        .catch(error => console.log(error));

    refs.backdrop.classList.remove('is-hidden');
    window.addEventListener('scroll', blockScroll);

}

function blockScroll() {
    window.scrollTo(0, 0);
}


async function closeModal(e) {
    if (e.target === refs.modalCloseBtn) {
        refs.backdrop.classList.add('is-hidden');
        document.body.classList.remove('no-scroll');
        window.removeEventListener('scroll', blockScroll);
    }
}

// внизу код закриття модалки по esc та кліку по backdrop

const backdrop = document.querySelector('.backdrop')
backdrop.addEventListener('click', onBackdropClick)

function onEscClick(evt) {
    if (evt.code === 'Escape') {
        console.log('Escapet')
        refs.backdrop.classList.add('is-hidden');
        document.body.classList.remove('no-scroll');
        // window.removeEventListener('keydown', onEscClick);

    }
}

function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
        console.log('backdrop')
        refs.backdrop.classList.add('is-hidden');
        document.body.classList.remove('no-scroll');
    }
}
// зверху код закриття модалки по esc та кліку по backdrop



// refs.modal.addEventListener('click', e => {
//   if (e.target === refs.modal) {
//     closeModal();
//   }
// });

// // function onClickCloseBtn() {
// //   closeModal();
// // }

// function closeModal() {
//   refs.modal.innerHTML = '';
//   refs.backdrop.classList.add('is-hidden');
// }

// function closeModal(event) {

//   const target = event.target;
//   console.log(target); // при нажатии на сам крестик (другой таргет) модалка не

//   if (target === refs.modalCloseBtn) {
//     setTimeout(() => {
//      refs.modal.classList.remove('modal__show');
//     }, 300);
//     window.removeEventListener('scroll', blockScroll);
//     refs.gallery.removeEventListener('click', openModal);
//   }
// }

// -------------

// async function getMovieGenre() {
//     const fetchFilmsApi = new FetchFilmsApi();
//     const genreOptions = { mediaType: 'genre', id: 'movie/list' };

//     await fetchFilmsApi
//       .fetchWithCurrentFilm(genreOptions)
//        .then(response => {return response.data.genres})
//        .catch(error => console.log(error));

// }

//     const fetchFilmsApi = new FetchFilmsApi();
//     const options = { mediaType: 'movie', id: `${dataId}` };
//   console.log(dataId)
//     await fetchFilmsApi
//       .fetchWithCurrentFilm(options)
//       .then(response => console.log(response))
//       .catch(error => console.log(error));

// const imageOpenModal = document.querySelector('.image');
// const modal = document.querySelector('.modal');

// imageOpenModal.addEventListener('click', openModal);

// function openModal(e) {
//     if (e.target === galleryCard) {
//     modal.style.visibility = 'visible';
//   modal.style.opacity = 1;
//   createMarkup();
// }

// }

// fetchFilmsApi.getCurrentFilm()

// function getImage(event, id = 550) {
//   const onClickImage = event.target;
//   console.log(onClickImage.src);
//   fetchMovieData(id).then(data => console.log(data));
// }
// export {addListenerToCard, openModal };

// const markup = `<div class="modal__window">
//     <button type="button" class="modal__close">
//     <svg class="modal__icon-close">
//     <use href="./images/icons.svg#close">
//     </use>
//     </svg>
//     </button>
//     <div class="modal__content">
//       <img
//         class="modal__image"
//         src="https://preview.redd.it/5unn16axx1v81.jpg?width=640&crop=smart&auto=webp&s=19fcd170aadc63147c0a4492f43017a17f052a02"
//         alt="cat"
//         width="375"
//         height="478"
//       />
//       <div class="modal__text-content">
//         <h2 class="modal__title">A FISTFUL OF LEAD</h2>
//         <ul class="modal__info">
//           <li class="modal__info-key">
//             <p>Vote / Votes</p>
//             <p>Popularity</p>
//             <p>Original Title</p>
//             <p>Genre</p>
//           </li>
//           <li class="modal__info-value">
//             <p>info / info</p>
//             <p>info</p>
//             <p>info</p>
//             <p>info</p>
//           </li>
//         </ul>
//         <h3 class="modal__about">ABOUT</h3>
//         <p class="modal__about-text">Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most corrupt settlement of the gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of gold hide out in the abandoned gold mine where they happen across another gang of three – who themselves were planning to hit the very same bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled with lead... they’ve been double crossed – but by who and how?</p>
//         <div class="modal__btns">
//           <button type="button" class="modal__watched-btn">Add to Watched</button>
//           <button type="button" class="modal__queue-btn">Add to Queue</button>
//         </div>
//       </div>
//     </div>
//   </div>
//     <div class="overlay"></div>`;

// modal.innerHTML = markup;

// getMovie((id = 550)).then(({ data }) => {

//     createMarkup(data.backdrops);
//     console.log(data);
// });

// function fetchDataMovie() {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/550?api_key=345007f9ab440e5b86cef51be6397df1&language=en-US`
//   ) // тут мой апи ключ
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }
// fetchDataMovie();