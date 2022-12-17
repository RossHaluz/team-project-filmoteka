import { refs } from '../fetch-service/refs';
import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import { creatCards } from '../fetch-service/renderFuncApi';

const filmsAPIService = new FetchFilmsApi();
const parameters = {
  mediaType: 'movie',
  lang: 'en-US',
  page: filmsAPIService.page,
  include_adult: false,
};

refs.form.addEventListener('submit', onKeywordSearch);

export function onKeywordSearch(event) {
  event.preventDefault();

  filmsAPIService.actualQuery = event.currentTarget.elements.filmname.value;
  console.log(filmsAPIService.actualQuery);

  if (!filmsAPIService.actualQuery) {
    alert('The text field is empty. Please type something into it and retry.');
    return;
  }

  filmsAPIService.resetPage();

  filmsAPIService.fetchWithSearchFilmData(parameters).then(resp => {
    if (!resp.data.results.length) {
      alert('Search result not successful. Enter the correct movie name and');
      return;
    }
    creatCards(resp.data.results);
  });
}
