import FetchFilmsApi from "./fetch-service/fechFilmsApi";
import { onKeywordSearch } from "./main/searchMovies";
import { onCreat, creatCards } from './main/renderMainMarkup';
import { openModal, addListenerToCard } from './modal/modals';
import { createMarkup } from "./fetch-service/renderFuncApi";
onCreat()
// addListenerToCard();

