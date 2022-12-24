import refs from './fetch-service/refs';
import { LocalStorageServiceFilms } from './fetch-service/localStorageService';
import { addWatched } from './main/renderLibrary';
import { onClickBtnQueue, onClickBtnWatched } from './main/header-library-btn';
import {
  getFilmsById,
  onClickBtnLibraryWatched,
} from './main/renderLibraryMarkup';
import { renderFilmsById } from './main/watched';
