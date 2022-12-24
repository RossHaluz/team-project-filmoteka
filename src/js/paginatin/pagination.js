import FetchFilmsApi from "../fetch-service/fechFilmsApi";
import { refs } from "../fetch-service/refs";
import { onCreat, creatCards, genresSerch, checkYear } from '../main/renderMainMarkup';

const fetchApi = new FetchFilmsApi();
let currentPage = 1;
let allGenres = {}; 
const options = { mediaType: 'movie', timeWindow: 'week' }

refs.paginationListItemPrev.addEventListener('click', onClickBtnPrev);
refs.paginationListItemNext.addEventListener('click', onClickBtnNext)

export function onClickBtnNext() {
  refs.gallery.innerHTML = "";
  currentPage += 1;
  fetchApi.actualPage = currentPage;
  refs.paginationListItemPage.innerHTML = currentPage;
  fetchApi.fetchWithAllFilmsData(options).then(data => creatCards(data.data.results))
}

function onClickBtnPrev() {
  if (currentPage === 1) {
    return
  }
  refs.gallery.innerHTML = "";
  currentPage -= 1;
  fetchApi.actualPage = currentPage;
  refs.paginationListItemPage.innerHTML = currentPage;
  fetchApi.fetchWithAllFilmsData(options).then(data => creatCards(data.data.results))
}
