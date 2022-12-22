const refs = {
  linkOpenModal: document.querySelector('[data-open-modal]'),
  btnCloseModal: document.querySelector('[data-close-modal]'),
  teamModal: document.querySelector('[data-modal]'),
};
refs.linkOpenModal.addEventListener('click', toggleModal);
refs.btnCloseModal.addEventListener('click', toggleModal);

function toggleModal() {
  refs.teamModal.classList.toggle('is-hidden');
}
