import FetchFilmsApi from '../fetch-service/fechFilmsApi';

const btnTrailer = document.querySelector('.btn-tr'); // 1.змінити клас, коли буде розмітка і js модального вікна
// 2. отримати доступ до open-modal коли буде розмітка

let allTrailers = []; // масив для відео з "type": "Trailer" та "site": "YouTube"
let allKeyArr = []; // масив всіх ключів до трейлерів з YouTube
let officialKey = ''; // ключ до офіціного трейлера на YouTube

btnTrailer.addEventListener('click', playTrailer); // 3.змінити клас, коли буде розмітка і js модального вікна
// 4. повісити слухача на open-modal, коли будуть відомі класи і на неї showBtnTrailer

// функція, яка знімає кнопки display-none, якщо allTrailers.length
// і повертає масив всіх трейлерів на YouTube (official : false та official : true)
function showBtnTrailer(arr) {
  if (!arr.length) {
    return;
  }
  arr.forEach(el => {
    if (el.type === 'Trailer' && el.site === 'YouTube') {
      allTrailers = allTrailers.push(el);
    }
  });
  if (allTrailers.length) {
    btnTrailer.classList.delete('display-none');
  }
  return allTrailers;
}

// функція, яка дістає всі ключі до трейлерів на Youtube
function getKeysForAllTrailers(arr) {
  arr.forEach(el => {
    allKeyArr = allKeyArr.push(el.key);
  });
  return allKeyArr;
}

// функція, яка дістає ключ до офіційного трейлера на Youtube
function getKeyForOfficialTrailer(arr) {
  arr.forEach(el => {
    if (el.official) {
      officialKey = el.official;
    }
    return officialKey;
  });
}

// функція, яка рендерить розмітку iframe з трейлером (трейлер запускається автоматично)
// (5. додати розмітку html для модального вікна з трейлером або бібліотеку??? basiclightbox)
function playTrailer(key) {
  video.insertAdjacentHTML(
    'afterbegin',
    `<iframe 
        src="https://www.youtube.com/embed/${key}?autoplay=1" 
        title="YouTube video player" frameborder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture" allowfullscreen></iframe>`
  );
}

// функція, яка робить запит про всі відео по id фільму. В результаті отримаємо масив об'єктів
async function onSearchTrailers({ id }) {
  const api = new FetchFilmsApi();
  api.fetchTrailer(id).then(response => {
    return response.data.results;
  });
}
