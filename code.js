window.onload = ()=> { 
    profesionales(); 
    
}

var vete = document.querySelector(".veterinarios");

function profesionales(){
    if(vete){
        fetch('https://randomuser.me/api/') 
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    vete.innerHTML = `
                        <img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
                        <p>Nombre: ${data.results[0].name.first}</p>
                        `               

                })
                .catch(error => {
                    vete.innerHTML = "Error en la lectura"
                })
    } 
}

/*validacion del formulario*/

function validacionFormulario (){
    var nombreCompleto = document.getElementById("nombreApellido").value.trim();
    var correo = document.getElementById("correoElectronico").value.trim();
    var telefono = document.getElementById("telefono").value.trim(); 
    var mensaje = document.getElementById("mensaje").value.trim(); 

    if (nombreCompleto === "" || correo === "" || telefono === "" || mensaje === ""){
        
        alert ("Por favor dejenos su mensaje!");
        return false;
    }

        alert("Formulario enviado exitosamente.");
        return true;
    
}