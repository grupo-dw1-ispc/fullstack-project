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





var usuario = document.getElementById('usuario');
var password = document.getElementById('pass');
var formulario= document.getElementsByTagName('form')[0];

function validarFormulario(){
    let estadoError=false;
    if (usuario.value === null || usuario.value === ''){
        mostrarMensajeError(usuario,"Complete éste campo.");
        usuario.oninput=()=>quitarMensajeError(usuario);
        if (estadoError===false){          
            usuario.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
            estadoError=true;
        }

    }

    if (password.value === null || password.value === ''){
        mostrarMensajeError(password,"Complete éste campo.");
        password.oninput=()=>quitarMensajeError(password);
        if (estadoError===false){          
            password.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
            estadoError=true;
        }
    
    } else {
        if (password.value.length<6){
            mostrarMensajeError(password,"Debe ingresar al menos 6 caracteres alfanumericos.");
            password.oninput=()=>quitarMensajeError(password);
            if (estadoError===false){          
                password.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
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

