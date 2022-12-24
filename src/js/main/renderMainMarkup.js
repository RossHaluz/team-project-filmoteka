import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import { refs } from '../fetch-service/refs';

let allGenres = {}; //глобальная переменная для жанров

async function onCreat() {
  const fetchFilmsApi = new FetchFilmsApi();
  const options = { mediaType: 'movie', timeWindow: 'week' };

  await fetchFilmsApi
    .getAllFilmsData(options)
    .then(response => {
      creatCards(response.data.results);
    })
    .catch(error => console.log(error));
}



async function creatCards(data) {
  //функция для создания разметки карточек
  allGenres = await topicalAllGenres(); // строка для скачивания все актуальные жанры перед созданием разметки

  console.log(data);
  const markup = data
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      return `<li class="gallery-card card">
              <img data-id=${id} data-ganres='${genresSerch(genre_ids)}'
              src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" class="card-image">
            <div class="card-info">
              <p class="card-name">${title}</p>
              <p class="card-genre">${genresSerch(genre_ids)}
              <span class="card-year">${checkYear(release_date)}
              </span></p>
              </div>
          </li>`;
    })
    .join(``);

  refs.gallery.innerHTML = markup;
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
  // return ``;
}

export { onCreat, creatCards, genresSerch, checkYear };
