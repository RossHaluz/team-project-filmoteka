!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var c={id:e,exports:{}};return n[e]=c,a.call(c.exports,c,c.exports),c.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=a),a("1RuQn"),a("gtaxt");var c=a("90yji"),i=a("gtaxt"),r=a("1RuQn");new(0,c.default),new(0,i.LocalStorageServiceFilms);a("90yji");i=a("gtaxt"),r=a("1RuQn");var o="https://api.themoviedb.org/3",s=("".concat(o,"/trending/movie/week"),"".concat(o,"/search/movie"),"".concat(o,"/movie/")),l=new(0,i.LocalStorageServiceFilms);r.refs.watched.addEventListener("click",(function(){r.refs.queue.classList.remove("btn--active"),r.refs.watched.classList.add("btn--active")})),function(){if(r.refs.watched.classList.contains("btn--active")){r.refs.queue.classList.remove("btn--active"),r.refs.watched.classList.add("btn--active"),r.refs.libraryList.innerHTML="";var e=l.getFilms();console.log(e),e.map((function(e){(function(e){return fetch("".concat(s).concat(e,"?api_key=").concat("f896ccabafb5d2939071b9f1aa9e42c1")).then((function(e){return e.json()})).catch((function(e){console.log(e)}))})(e).then((function(e){var n,t,a;n=e,r.refs.libraryList.innerHTML+='<li class="gallery-card card">\n              <img data-id='.concat(n.id,' \n              src="https://image.tmdb.org/t/p/w500/').concat(n.poster_path,'" alt="').concat(n.title,'" class="card-image">\n            <div class="card-info">\n              <p class="card-name">').concat(n.title,'</p>\n              <p class="card-genre">').concat((a=n.genres,a.map((function(e){return e.name})).join(", ")),'\n              <span class="card-year">').concat((t=n.release_date,"| ".concat(t.slice(0,4))),"\n              </span></p>\n              </div>\n          </li>")}))}))}}(),a("6RLCr"),a("eLVJN")}();
//# sourceMappingURL=library.7cf61376.js.map
