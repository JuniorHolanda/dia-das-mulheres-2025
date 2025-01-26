function changeColor (element, index, listBtnColor, colorObject) {
  const srcColor = colorObject.getAttribute('src')
  const dataColor = element.getAttribute('data-color')
  listBtnColor.forEach(element => {
    element.classList.remove('studioBrin__btn-color--active');
  });
  element.classList.add('studioBrin__btn-color--active');
  console.log(dataColor);
}

export default changeColor;