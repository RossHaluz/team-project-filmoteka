// const modal = document.querySelector('.modal');


// modal.addEventListener('click', closeModal);

// function closeModal(event) {
//     const modalCloseBtn = document.querySelector('.modal__icon-close');
//     const target = event.target;
//     console.log(target); // при нажатии на сам крестик (другой таргет) модалка не

//     if (target === modalCloseBtn) {
//         setTimeout(() => {
//             modal.style.visibility = 'hidden';
//         }, 300);
//         modal.style.opacity = 0;
//     }
// }



// FT-20 Реалізувати закриття модалки за натисканням на клавішу ESC і за кліком поза межами модалки, не забути зняти слухачів


// закинуть в function openModal
window.addEventListener('keydown', onEscClick)

// ________________

function onEscClick(evt) {
    if (evt.code === 'Escape') {
        closeModal();
        modal.classList.remove('visiable');
        modal.removeEventListener('click', closeModal);
        window.removeEventListener('keydown', onEscClick);

    }
}