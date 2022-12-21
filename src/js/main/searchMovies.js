import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import refs from '../fetch-service/refs';
import { createPagination } from '../paginatin/pagination';
import renderMarkupSearch from './renderMarkupSearch';

const apiFetch = new FetchFilmsApi()

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const formInputSearch = refs.formImput.value.trim()
    apiFetch.serchValue = formInputSearch;

    refs.galeryList.innerHTML = "";

    apiFetch.getMouvieSearch().then(data => {
        if (!data.results.length) {
            return
        }
        renderMarkupSearch(data.results)
        const pagination = createPagination(data.total_results, data.total_pages);

        pagination.on('beforeMove', ({ page }) => {
            refs.galeryList.innerHTML = '';
            apiFetch.pageNum = page;
        apiFetch.getMouvieSearch().then(data => {
        refs.galeryList.innerHTML = renderMarkupSearch(data.results);
        });
      
      });
   }).catch(err => console.log(err))

}

export default onFormSubmit