import {
  API_KEY,
  BASE_URL,
  TREND_URL,
  SEARCH_URL,
  ID_URL,
} from '../fetch-service/api-vars';

export function URLTREND() {
  fetch(`${TREND_URL}?api_key=${API_KEY}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
}
