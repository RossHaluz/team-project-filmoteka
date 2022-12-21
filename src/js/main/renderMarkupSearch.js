import refs from "../fetch-service/refs";


function renderMarkupSearch(arr) {
    const markup = arr.map(({ poster_path, title, release_date }) => `
     <li class="galery-list__item card-set-iteam">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" class="galery-list__img" />
          <h3 class="galery-list__title">${title}</h3>
          <p class="galery-list__desc">
            Science Fiction, Action, Adventure, Drama | ${splitDate(release_date)}
          </p>
        </li>
    `).join('');

    refs.galeryList.innerHTML = markup;
    
}

function splitDate(value) {
    const slit = value.split('').slice(0, 4).join('');

    return slit;

}



export default renderMarkupSearch

