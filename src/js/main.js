import FetchFilmsApi from "./fetch-service/fechFilmsApi";
import { onKeywordSearch } from "./main/searchMovies";
import { onCreat, creatCards } from './main/renderMainMarkup';
import { onButtonScrolUp } from './main/buttonScrolUp';
import { onClickChangeColor } from './main/changeColor';
import { createMarkup } from './fetch-service/renderFuncApi';
import { openModal } from './modal/modals';
import { createPagination } from "./paginatin/pagination";
createPagination()
onButtonScrolUp();
onCreat()
// addListenerToCard();

