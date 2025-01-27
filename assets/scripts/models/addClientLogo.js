function addClientLogo (event, studioBrinImg){
  if ( event.files.length > 0 ) {
    const type = event.files[0].type;
    const validationFormat = ['image/png', 'image/svg+xml'];

    if(!validationFormat.includes(type)){
      alert('Formato não permitido, porfavor enviar somente .png ou .svg');
      return;
    }

    if(document.querySelector('#logoClient')){
      studioBrinImg.removeChild(document.querySelector('#logoClient'))
    }

    const logoClient = document.createElement('img');
    logoClient.id = "logoClient";
    logoClient.src = URL.createObjectURL(event.files[0]);
    logoClient.classList.add('studioBrin__client-logo');
    logoClient.setAttribute('alt', 'Logo da empresa');

    studioBrinImg.appendChild(logoClient);
  }
}

export default addClientLogo;