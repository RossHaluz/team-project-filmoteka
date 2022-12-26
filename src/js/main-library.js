import refs from './fetch-service/refs';
import { LocalStorageServiceFilms } from './fetch-service/localStorageService';
import { addWatched } from './main/renderLibrary';
import { onClickBtnQueue, onClickBtnWatched } from './main/header-library-btn';
import {
  getFilmsById,
  onClickBtnLibraryWatched,
} from './main/renderLibraryMarkup';
import { renderFilmsById } from './main/watched';
import { renderFilmsByIdQue } from './main/Queue';
import { openTeamModal } from './modal/close-modal';
import { createMarkup } from './fetch-service/renderFuncApi';

// import { openModal } from './modal/modals';
