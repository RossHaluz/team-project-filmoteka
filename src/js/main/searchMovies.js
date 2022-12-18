import { refs } from '../fetch-service/refs';
import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import { creatCards } from './renderMainMarkup';

const filmsAPIService = new FetchFilmsApi();
const parameters = {
  mediaType: 'movie',
  lang: 'en-US',
  page: filmsAPIService.page,
  include_adult: false,
};

refs.form.addEventListener('submit', onKeywordSearch);


// Функція реалізує пошук та відображення фільмів за ключовим словом. Якщо пустий інпут або такого фільму немає - з'являється сповіщення. 
export function onKeywordSearch(event) {
  event.preventDefault();   

  filmsAPIService.actualQuery = event.currentTarget.elements.filmname.value;

  if (!filmsAPIService.actualQuery) {
    refs.formNotification.textContent = "The text field is empty. Please type something into it and retry.",
    refs.formNotification.classList.add('search-form__notification--is-active');
      setTimeout(() => refs.formNotification.classList.remove('search-form__notification--is-active'), 3000)
    return;
  }

  filmsAPIService.fetchWithSearchFilmData(parameters).then(resp => {
    if (!resp.data.results.length) {
      refs.formNotification.classList.add('search-form__notification--is-active');
      setTimeout(() => refs.formNotification.classList.remove('search-form__notification--is-active'), 3000)
      return;
    }
    creatCards(resp.data.results);
  });
}

