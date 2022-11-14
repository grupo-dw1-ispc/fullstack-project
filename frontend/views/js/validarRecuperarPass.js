function mostrarMensajeError(element,mensaje){
    //selecciono el elemento mensaje de error asociado al elemento input a validar
    msjerror=document.querySelector("#"+element.id+" ~ .no-valido");
    if (!(typeof mensaje === 'undefined')) {
        msjerror.textContent=mensaje;
    }
    msjerror.classList.remove("d-none");
}

function quitarMensajeError(element){
    msjerror=document.querySelector("#"+element.id+" ~ .no-valido");
    msjerror.classList.add("d-none");
    element.oninput=null;
}





var email = document.getElementById('correo');
var formulario= document.getElementsByTagName('form')[0];

function validarFormulario(){
    let estadoError=false;
    
    if (email.value === null || email.value === ''){
        mostrarMensajeError(email,"Complete éste campo.");
        email.oninput=()=>quitarMensajeError(email);
        if (estadoError===false){          
            email.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
            estadoError=true;
        }

    } else {
        if (email.value.search('@') === -1){
            mostrarMensajeError(email,"Ingrese un email válido.");
            email.oninput=()=>quitarMensajeError(email);
            if (estadoError===false){          
                email.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
                estadoError=true;
            }
        }
    }

    if (estadoError === true) {
        return false;
    } else {
        formulario.submit();
        return true;
    }

}

