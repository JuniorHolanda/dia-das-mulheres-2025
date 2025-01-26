function addClientLogo (event, studioBrinImg){
  if ( event.files.length > 0 ) {
    const type = event.files[0].type;
    const validationFormat = ['image/png', 'image/svg']

    if(!validationFormat.includes(type)){
      alert('Formato não permitido, porfavor enviar somente .png ou .svg');
      return;
    }

    const logoClient = document.createElement('img');
    logoClient.id = "logoClient";
    logoClient.src = URL.createObjectURL(event.files[0]);
    logoClient.classList.add('studioBrin__client-logo')


    studioBrinImg.appendChild(logoClient)

    console.log(studioBrinImg);

  }
}

export default addClientLogo;