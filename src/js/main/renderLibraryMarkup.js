// export function getFilmsById() {
//   console.log('click');
//   const getFilms = localStorageFilms.getFilms();
//   getFilms.map(film => {
//     fetchApi.getIdFilm = film;
//     const options = { mediaType: 'movie', id: film };
//     fetchApi.getCurrentFilm(options).then(data => creatLibraryMarkup(data));
//   });
// }

// function creatLibraryMarkup({ poster_path, title }) {
//   const markup = `
//     <li class="library-list__item card-set-iteam">
//     <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="">
//       <h3 class="library-list__matkup-title">${title}</h3>
//       </li>
//     `;

//   refs.libraryList.insertAdjacentHTML('beforeend', markup);
// }
