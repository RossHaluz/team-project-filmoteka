import { refs } from "../fetch-service/refs";


refs.changeColor.addEventListener('click', onClickChangeColor);

export function onClickChangeColor() {
    const edit = document.body;
    edit.classList.toggle('dark');
}
