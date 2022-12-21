import fetchFilmsApi from '../fetch-service/fechFilmsApi'
import refs from '../fetch-service/refs'
import {createPagination} from '../paginatin/pagination'

const fetchApi = new fetchFilmsApi()


function renderMovies(arr) {
  const markup = arr.map(({ poster_path, title, release_date, id}) => `
     <li class="galery-list__item card-set-iteam">
          <img data-id=${id} src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" class="galery-list__img" />
          <h3 class="galery-list__title">${title}</h3>
          <p class="galery-list__desc">
            Science Fiction, Action, Adventure, Drama | ${splitDate(release_date)}
          </p>
        </li>
    `).join('');
  
  refs.galeryList.insertAdjacentHTML('beforeend', markup)
 
}

function getTrendingMoviesAndRender() {
  fetchApi.getTrendingMovies().then(data => {
    console.log(data)
    if (!data.results.length) {
      return
    }
  renderMovies(data.results)

  const pagination = createPagination(data.total_results, data.total_pages);
  pagination.on('beforeMove', ({ page }) => {
   refs.galeryList.innerHTML = '';
    fetchApi.pageNum = page;
     fetchApi.getTrendingMovies().then(data => {
      refs.galeryList.insertAdjacentHTML('beforeend', renderMovies(data.results));
     });
    
  });
}).catch(err => console.log(err))
}

getTrendingMoviesAndRender()

function splitDate(value) {
    const slit = value.split('').slice(0, 4).join('');

    return slit;

}



export default getTrendingMoviesAndRender

