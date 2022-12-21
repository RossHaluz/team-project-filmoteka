import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import refs from "../fetch-service/refs";
import getTrendingMoviesAndRender from '../main/renderMainMarkup'
const TUI_VISIBLE_PAGES = 5;
const fetchApi = new FetchFilmsApi


export function createPagination(totalItems, visiblePages) {
  const options = {
    itemsPerPage: 20,
    totalItems: totalItems,
    visiblePages: visiblePages < 5 ? visiblePages : TUI_VISIBLE_PAGES,
    centerAlign: true
  };
  

  const pagination = new Pagination(refs.pagination, options);

  return pagination;
}

