import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import addListenerToCard from '../modal/modals'
let allGenres = {}; //глобальная переменная для жанров

async function onCreat() {
  const fetchFilmsApi = new FetchFilmsApi();
  const options = { mediaType: 'movie', timeWindow: 'week' };

  await fetchFilmsApi
    .getAllFilmsData(options)
    .then(response =>  { 
      creatCards(response.data.results)
     return addListenerToCard();
    })
    .catch(error => console.log(error));
  
}

async function creatCards(data) {
  //функция для создания разметки карточек
  allGenres = await topicalAllGenres(); // строка для скачивания все актуальные жанры перед созданием разметки

  const box = document.querySelector(`.gallery`);
  console.log(data);
  const markup = data
    .map(element => {
      return `<li data-id=${element.id} class="gallery-card card">
              <img src="https://image.tmdb.org/t/p/w500/${
                element.poster_path
              }" alt="${element.title}" class="card-img">
              <p class="cadr-name">${element.title}</p>
              <p class="card-descr">${genresSerch(element.genre_ids)}
              <span class="card-year">${checkYear(element.release_date)}
              </span></p>
          </li>`;
    })
    .join(``);

  box.innerHTML = markup;
  
}

async function topicalAllGenres() {
  // функция для скачивания всех актуальныех жанров
  const fetchFilmsApi = new FetchFilmsApi();
  const optionsForGanes = { mediaType: 'genre', id: 'movie/list' };

  const n = await fetchFilmsApi
    .fetchWithCurrentFilm(optionsForGanes)
    .then(response => {
      return response.data.genres;
    });
  return n;
}

function genresSerch(data) {
  // поиск всех нужных жанров фильма по Ид
  return data
    .map(element => {
      return allGenres.filter(el => el.id == element).map(el => el.name);
    })
    .join(`, `);
}

function checkYear(data) {
  // функция для проверки наличия и обрезания года релиза из даты
  if (data) {
    return `| ${data.slice(0, 4)}`;
  }
  return ``;
}


export {onCreat, creatCards, genresSerch}