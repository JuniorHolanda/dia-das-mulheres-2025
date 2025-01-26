function changeColor (element, listBtnColor, colorObject) {
  const dataColor = element.getAttribute('data-color');

  listBtnColor.forEach(element => {
    element.classList.remove('studioBrin__btn-color--active');
  });

  element.classList.add('studioBrin__btn-color--active');
  colorObject.src = `assets/img/studioBrin/${dataColor}.png`
}

export default changeColor;