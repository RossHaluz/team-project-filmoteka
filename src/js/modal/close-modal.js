const refs = {
    linkOpenModal: document.querySelector('[data-open-modal]'),
    btnCloseModal: document.querySelector('[data-close-modal]'),
    teamModal: document.querySelector('[data-modal]'),
};
refs.linkOpenModal.addEventListener('click', toggleModal);
refs.btnCloseModal.addEventListener('click', toggleModal);

function toggleModal(evt) {
    evt.preventDefault();
    document.body.classList.add('no-scroll');
    refs.teamModal.classList.toggle('is-hidden');
}
window.addEventListener('keydown', onEscClick);

function onEscClick(evt) {
    if (evt.code === 'Escape') {
        console.log('Escape');
        evt.preventDefault();
        refs.teamModal.classList.toggle('is-hidden');
    }
}

const backdrop = document.querySelector('.footer__backdrop');
backdrop.addEventListener('click', onBackdropClick);
console.log(backdrop);

function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
        console.log('Backdrop');
        evt.preventDefault();
        refs.teamModal.classList.toggle('is-hidden');
    }
}