!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequired7c6;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var l={id:t,exports:{}};return e[t]=l,a.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},t.parcelRequired7c6=a),a("90yji");var l=a("90yji"),i=a("1RuQn"),o=a("4eIG7");i=a("1RuQn");var s=function(t){var e=t.map((function(t){var e=t.poster_path,n=t.title,a=t.release_date;return'\n     <li class="galery-list__item card-set-iteam">\n          <img src="https://image.tmdb.org/t/p/w500/'.concat(e,'" alt="').concat(n,'" class="galery-list__img" />\n          <h3 class="galery-list__title">').concat(n,'</h3>\n          <p class="galery-list__desc">\n            Science Fiction, Action, Adventure, Drama | ').concat(a.split("").slice(0,4).join(""),"\n          </p>\n        </li>\n    ")})).join("");i.default.galeryList.innerHTML=e},c=new(0,l.default);function r(t){t.preventDefault();var e=i.default.formImput.value.trim();c.serchValue=e,i.default.galeryList.innerHTML="",c.getMouvieSearch().then((function(t){t.results.length&&(s(t.results),(0,o.createPagination)(t.total_results,t.total_pages).on("beforeMove",(function(t){var e=t.page;i.default.galeryList.innerHTML="",c.pageNum=e,c.getMouvieSearch().then((function(t){i.default.galeryList.innerHTML=s(t.results)}))})))})).catch((function(t){return console.log(t)}))}i.default.form.addEventListener("submit",r);a("1RuQn"),a("kvKoM"),(i=a("1RuQn")).default.changeColor.addEventListener("click",(function(){document.body.classList.toggle("dark")}));i=a("1RuQn");a("kvKoM");l=a("90yji");a("90yji");i=a("1RuQn");var d,u=new(0,l.default);function f(){i.default.backdropModal.classList.add("is-hidden")}i.default.galeryList.addEventListener("click",(function(t){if(!t.target.classList.contains("galery-list__img"))return;i.default.modalWrapp.innerHTML="",d=t.target.dataset.id,u.getIdFilm=d,i.default.backdropModal.classList.remove("is-hidden"),u.getDateilsMovieById().then((function(t){var e,n,a,l,o,s,c,r;n=(e=t).poster_path,a=e.title,l=e.vote_average,o=e.vote_count,s=e.popularity,c=e.overview,r='\n    <div class="modal-content">\n     <img\n      src="https://image.tmdb.org/t/p/w500/'.concat(n,'"\n      alt="').concat(a,'"\n      width="400"\n      height="500"\n      class="modal__img"\n    />\n    <div class="modal-wrapp">\n    <div class="modal-cover">\n    <h2 class="modal__title">').concat(a,'</h2>\n    <div class="modal-list-cover">\n    <ul class="modal__list list">\n      <li class="modal__list--item">Vote / Votes</li>\n      <li class="modal__list--item">Popularity</li>\n      <li class="modal__list--item">Original Title</li>\n      <li class="modal__list--item">Genre</li>\n    </ul>\n\n    <ul class="moda__option list">\n      <li class="modal__option--item">').concat(l.toFixed(1)," / ").concat(o,'</li>\n      <li class="modal__option--item">').concat(s,'</li>\n      <li class="modal__option--item">').concat(a,'</li>\n      <li class="modal__option--item">SCIENCE FICTION</li>\n    </ul>\n    </div>\n    </div>\n\n    <h3 class="modal__about">ABOUT</h3>\n    <p class="modal__about--text">\n      ').concat(c,"\n    </p>\n    </div>\n    </div>\n    "),i.default.modalWrapp.insertAdjacentHTML("beforeend",r)}))})),i.default.closeBtn.addEventListener("click",(function(){f()})),window.addEventListener("click",(function(t){t.target===i.default.backdropModal&&f()})),a("4eIG7")}();
//# sourceMappingURL=index.6c7b08bd.js.map
