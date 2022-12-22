const API_KEY = 'f896ccabafb5d2939071b9f1aa9e42c1';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const form = document.querySelector('.film-search');
const cardContainer = document.querySelector('.film-card');
const filterWatched = document.querySelector('.filter-watched');
const addingWatched = document.querySelector('.add-watched-btn');
const watchedList = document.querySelector('.watched-list');
const LOCALSTORAGE_KEY = 'watched-films';

addingWatched.addEventListener('click', addWatched);

form.addEventListener('submit', onGet);

filterWatched.addEventListener('click', getWatched);

//  СТВОРЮЮ Ф-Ю ЗАПИТУ ПО ІД ЧЕРЕЗ ІНПУТ
function onGet(evt) {
  evt.preventDefault();
  const {
    query: { value: getId },
  } = evt.currentTarget.elements;
  if (!getId) {
    alert('введи щось');
    return;
  }
  fetchFilmById(getId).then(filmData => {
    createCard(filmData);
    console.log(filmData);
  });
}

// СТВОРЮЮ ФУНКЦІЮ ДЛЯ РЕНДЕРУ КАРТКИ
function createCard(data) {
  const name = document.querySelector('.film-name');
  name.textContent = data.title;
  const poster = document.querySelector('.film-img');
  poster.setAttribute('src', `${IMG_URL}${data.poster_path}`);
  addingWatched.setAttribute('data-id', data.id);
}

//СТВОРЮЮ Ф-Ю ЗАПИТУ ПО ID
function fetchFilmById(id) {
  return fetch(`${ID_URL}${id}?api_key=${API_KEY}`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}

//
// масив ID в LS
const arr = [];

// СТВОРЮЮ ФУНКЦІЮ ДОДАВАННЯ ФІЛЬМУ ДО ЛОКАЛСТОРЕДЖУ ВОТЧЕД
function addWatched() {
  if (!arr.includes(addingWatched.dataset.id)) {
    arr.push(addingWatched.dataset.id);
    const arrToString = JSON.stringify(arr);
    localStorage.setItem(LOCALSTORAGE_KEY, arrToString);
    getWatched();
  } else {
    alert('this movie already added to watched');
  }
}

// // СТВОРЮЮ Ф-Ю ПІДТЯГУВАННЯ ФІЛЬМІВ З ЛОКАЛСТОРЕДЖУ ДО ВКЛАДКИ ВОТЧЕД ТА РЕНДЕРУ КАРТОК
function getWatched() {
  const getLsId = localStorage.getItem(LOCALSTORAGE_KEY);
  const getIds = JSON.parse(getLsId);
  console.log(getIds);
  getIds.forEach(id => {
    fetchFilmById(id).then(filmData => {
      createListItem(filmData);
    });
  });
  function createListItem(data) {
    watchedList.insertAdjacentHTML(
      'afterbegin',
      `<h2 class="film-name">${data.title}</h2>
  <img src="${IMG_URL}${data.poster_path}" class="film-img" alt="poster" width="100px"></img>`
    );
  }
}
