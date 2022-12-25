import { refs } from '../fetch-service/refs';
import FetchFilmsApi from '../fetch-service/fechFilmsApi';

const api = new FetchFilmsApi(); //ініціалізація класу запитів

let currentId = 0; // поточний id фільму, який відкритий в модалці
let videosArr = []; // масив для всіх знайдених відео
let embedTrailer = []; // масив для трейлерів на ютубі, які додаються у відео-галерею

const trailerBtn = document.querySelector('.modal__trailer-btn'); //кнопка запуску трейлера
const closeBtn = document.querySelector('.closebtn'); //кнопка закриття відео-галереї
const overlayForVideo = document.querySelector('#overlay-video'); //модалка для відео-галереї
const overlayContent = document.querySelector('#overlay-content'); //наповнення відео-галереї

refs.gallery.addEventListener('click', getTrailerId); //слухач принатискання на картку фільма
refs.backdrop.addEventListener('click', openTrailersGallary); //слухач відкриття модалного вікна з карткою фільму
closeBtn.addEventListener('click', closeTrailersGallary); //слухач закриття відео-галереї

// отримання id фільму
function getTrailerId(e) {
  currentId = Number(e.target.dataset.id);
}

// відкриття модалки з трейлерами при натисканні на кнопку ▶ "Show Trailer" 
function openTrailersGallary(e) {
  if (e.target.innerText === '▶') {
    showTrailersGallary();
  }
}

// формування галереї трейлерів з ютуб
function showTrailersGallary() {
  embedTrailer = [];
  // пошук трейлерів по id фільму
  api.fetchTrailer(currentId).then(response => {
    videosArr = response.data.results;

    // якщо після запиту відео НЕ прийшли, то кнопка ▶ "Show Trailer" стає display:'none'
    if (!videosArr.length) {
      // trailerBtn.style.display = "none";  //видає помилку в консолі
      // trailerBtn.style.opacity = 0;  //видає помилку в консолі
      alert('No found trailers'); // це краще зробити це через бібліотеку Notify
    } else {
      // якщо після запиту Є масив з відео, то відкривається модалка відео-галереї
      console.log(videosArr);
      overlayForVideo.style.width = '100%';
      document.body.classList.add('no-scroll');
      // перебираємо всі запропоновіні відео, дістаємо ТІЛЬКИ трейлери, додаємо їх в масив трейлерів embedTrailer
      videosArr.forEach(video => {
        let { key, site, name, type } = video;
        if (site === 'YouTube' && type === 'Trailer') {
          embedTrailer.push(`
                    <iframe src="https://www.youtube.com/embed/${key}" 
                    title="${name}" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    `);
        }
      });
      // джойнимо і виводимо трейлери в галерею
      overlayContent.innerHTML = embedTrailer.join('');
    }
  });
}

// закриття модалки з трейлерами і очищення контенту відео-галереї при натисканні на кнопку "Х"
function closeTrailersGallary() {
  overlayForVideo.style.width = '0%';
  document.body.classList.remove('no-scroll');
  overlayContent.innerHTML = 0;
}

export {
  onSearchTrailer,
  getTrailerId,
  openTrailersGallary,
  showTrailersGallary,
  closeTrailersGallary,
};

window.addEventListener('keydown', onEscClick)

function onEscClick(evt) {

  if (evt.code === 'Escape') {
    evt.preventDefault();
    overlayForVideo.style.width = '0%';
    document.body.classList.remove('no-scroll');    
    overlayContent.innerHTML = 0;
  }
}

const backdrop = document.querySelector('.overlay__backdrop')
backdrop.addEventListener('click', onBackdropClick)
// console.log(backdrop)


function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    // console.log('Backdrop')
    evt.preventDefault();
    document.body.classList.remove('no-scroll');
    overlayForVideo.style.width = '0%';
    overlayContent.innerHTML = 0;
  }
}