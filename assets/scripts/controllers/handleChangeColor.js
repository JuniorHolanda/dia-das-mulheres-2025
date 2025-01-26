import changeColor from "../models/changeColor.js";

const listBtnColor = document.querySelectorAll('.studioBrin__btn-color');
const colorObject = document.querySelector('.studioBrin__color-img');

function handleChangeColor() {
  listBtnColor.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
      changeColor(element, index, listBtnColor, colorObject);
    });
  });
}

export default handleChangeColor;