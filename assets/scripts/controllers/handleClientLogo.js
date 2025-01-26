import addClientLogo from "../models/addClientLogo.js";

const inputStudioBrin = document.querySelector('#inputStudioBrin');
const studioBrinImg = document.querySelector('#studioBrinImg');

function handleClientLogo(){
  inputStudioBrin.addEventListener('change', (event)=>{
    addClientLogo(event.target, studioBrinImg)
  })
}

export default handleClientLogo
