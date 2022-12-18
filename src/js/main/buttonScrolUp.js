export function onButtonScrolUp() {
  document.addEventListener('DOMContentLoaded', () => {
    let to_top_btn = document.querySelector('.btn-goup');

    console.log(`btn on`);

    window.onscroll = function () {
      if (window.pageYOffset > 580) {
        to_top_btn.classList.remove('is-hidden');
      } else {
        to_top_btn.classList.add('is-hidden');
      }
    };

    // плавный скролл наверх
    to_top_btn.addEventListener('click', function () {
      console.log(`это я`);
      window.scrollBy({
        top: -window.pageYOffset,
        behavior: 'smooth',
      });
    });
  });
}
