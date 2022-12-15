import {
  API_KEY,
  BASE_URL,
  TREND_URL,
  SEARCH_URL,
  ID_URL,
} from '../fetch-service/api-vars';

export function creatCard() {
  const box = document.querySelector(`.gallery`);
  const markup = URLTREND()
    .then(data =>
      data.results.map(element => {
        return `<li data-id=${element.id} class="gallery-card card">
    <img src="${element.backdrop_path}" alt="" class="card-img">
    <p class="cadr-name">${element.title}</p>
    <p class="card-descr">${element.genre_ids}<span class="card-year">${element.release_date}.slice(0, 4)</span></p>
</li>`;
      })
    )
    .join();
  box.innerHTML = markup;
}

// adult: false;
// backdrop_path: '/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg';
// genre_ids: (3)[(878, 28, 12)];
// id: 76600;
// media_type: 'movie';
// original_language: 'en';
// original_title: 'Avatar: The Way of Water';
// overview: 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.';
// popularity: 1712.743;
// poster_path: '/94xxm5701CzOdJdUEdIuwqZaowx.jpg';
// release_date: '2022-12-14';
// title: 'Avatar: The Way of Water';
// video: false;
// vote_average: 8.315;
// vote_count: 138;

function URLTREND() {
  return fetch(`${TREND_URL}?api_key=${API_KEY}`).then(response => {
    return response.json();
  });
}
