import { onEnter, onLeave } from "../models/dragEvents.js";

const dragAreaStudioBrin = document.querySelector('#dragAreaStudioBrin');
const studioBrinInput = document.querySelector('#studioBrinInput');

function dragArea() {
  dragAreaStudioBrin.addEventListener('dragenter', onEnter)
  dragAreaStudioBrin.addEventListener('drop', onLeave)
  dragAreaStudioBrin.addEventListener('dragend', onLeave)
  dragAreaStudioBrin.addEventListener('dragleave', onLeave)
}

export default dragArea;