import { refs } from '../fetch-service/refs';
import FetchFilmsApi from '../fetch-service/fechFilmsApi';

const api = new FetchFilmsApi();

let currentId = 0; // поточний id фільму, який відкритий в модалці
let videosArr = []; // масив для всіх знайдених відео
let embedTrailer = []; // масив для до трейлерів на ютубі

const closeBtn = document.querySelector('.closebtn');
const overlayForVideo = document.querySelector('#overlay-video')
const overlayContent = document.querySelector('#overlay-content');


refs.gallery.addEventListener('click', getTrailerId);
refs.backdrop.addEventListener('click', openTrailersGallary);
closeBtn.addEventListener('click', closeTrailersGallary);

// отримання id фільму
function getTrailerId(e) {
    currentId = Number(e.target.dataset.id);
}

// відкриття модалки з трейлерами при натисканні на кнопку "Show Trailer" // чекаю поки додадуть
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

        // перебираємо всі запропоновіні відео, дістаємо ТІЛЬКИ трейлери
        if (videosArr.length) {
            console.log(videosArr);
            overlayForVideo.style.width = '100%';
            videosArr.forEach(video => {
                let { key, site, name, type } = video;
                if (site === 'YouTube' && type === "Trailer") {
                    embedTrailer.push(`
                    <iframe src="https://www.youtube.com/embed/${key}" 
                    title="${name}" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    `);
                }
            });
            overlayContent.innerHTML = embedTrailer.join('');
        } else {
            overlayContent.innerHTML = `<h1>No Results Found</h1>`;
        }
    });
}

// відкриття модалки з трейлерами при натисканні на кнопку "Х"
function closeTrailersGallary() {
    overlayForVideo.style.width = '0%';
}

export { onSearchTrailer, getTrailerId, openTrailersGallary, showTrailersGallary, closeTrailersGallary };

window.addEventListener('keydown', onEscClick)

function onEscClick(evt) {

    if (evt.code === 'Escape') {
        evt.preventDefault();
        overlayForVideo.style.width = '0%';
    }
}

const backdrop = document.querySelector('.overlay__backdrop')
backdrop.addEventListener('click', onBackdropClick)
    // console.log(backdrop)


function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
        // console.log('Backdrop')
        evt.preventDefault();
        overlayForVideo.style.width = '0%';
    }
}