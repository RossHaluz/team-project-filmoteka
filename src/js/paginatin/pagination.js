import FetchFilmsApi from "../fetch-service/fechFilmsApi";
import { refs } from "../fetch-service/refs";

const fetchApi = new FetchFilmsApi();
let currentPage = 1;
const options = { mediaType: 'movie', timeWindow: 'week' }

refs.paginationListItemPrev.addEventListener('click', onClickBtnPrev);
refs.paginationListItemNext.addEventListener('click', onClickBtnNext)

export function onClickBtnNext() {
  refs.gallery.innerHTML = "";
  currentPage += 1;
  fetchApi.actualPage = currentPage;
  refs.paginationListItemPage.innerHTML = currentPage;
  fetchApi.fetchWithAllFilmsData(options).then(data => creatMarkupPagination(data.data.results))
}

function onClickBtnPrev() {
  if (currentPage === 1) {
    return
  }
  refs.gallery.innerHTML = "";
  currentPage -= 1;
  fetchApi.actualPage = currentPage;
  refs.paginationListItemPage.innerHTML = currentPage;
  fetchApi.fetchWithAllFilmsData(options).then(data => creatMarkupPagination(data.data.results))
}

function creatMarkupPagination(arr) {
  const markup = arr.map(({ poster_path, title, release_date, id }) => `
  <li class="galery-list__item card-set-iteam">
          <img data-id=${id} src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" class="galery-list__img" />
          <h3 class="galery-list__title">${title}</h3>
          <p class="galery-list__desc">
            Science Fiction, Action, Adventure, Drama | ${splitDate(release_date)}
          </p>
        </li>
  `).join('');

  refs.gallery.innerHTML = markup;
}

function splitDate(value) {
    const slit = value.split('').slice(0, 4).join('');

    return slit;

}