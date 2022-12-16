import { refs } from "../fetch-service/refs";
import FetchFilmsApi from "../fetch-service/fechFilmsApi";

const filmsAPIService = new FetchFilmsApi;

refs.form.addEventListener('submit', onSearch)

export function onSearch(event) {
    event.preventDefault();

    filmsAPIService.query = event.currentTarget.elements.filmname.value;
    console.log(filmsAPIService.query)

}

