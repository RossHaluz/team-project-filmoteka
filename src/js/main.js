import FetchFilmsApi from "./fetch-service/fechFilmsApi";
import { onKeywordSearch } from "./main/searchMovies";
import { onCreat, creatCards } from './main/renderMainMarkup';
import { onButtonScrolUp } from './main/buttonScrolUp'; 
onButtonScrolUp();
onCreat()

