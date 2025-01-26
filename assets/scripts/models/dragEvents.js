function onEnter() {
  studioBrinInput.classList.add('studioBrin__input-container--active');
}

function onLeave() {
  studioBrinInput.classList.remove('studioBrin__input-container--active');
}

export {onEnter, onLeave};