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





var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var asunto = document.getElementById('asunto');
var mensaje = document.getElementById('mensaje');
var formulario= document.getElementsByTagName('form')[0];

function validarFormulario(){
    let estadoError=false;

    if (nombre.value === null || nombre.value === ''){
        mostrarMensajeError(nombre,"Complete éste campo.");
        nombre.oninput=()=>quitarMensajeError(nombre);
        if (estadoError===false){          
            nombre.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
            estadoError=true;
        }

    }
    if (apellido.value === null || apellido.value === ''){
        mostrarMensajeError(apellido,"Complete éste campo.");
        apellido.oninput=()=>quitarMensajeError(apellido);
        if (estadoError===false){          
            apellido.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
            estadoError=true;
        }

    }

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
    
    if (asunto.value === null || asunto.value === ''){
        mostrarMensajeError(asunto,"Complete éste campo.");
        asunto.oninput=()=>quitarMensajeError(asunto);
        if (estadoError===false){          
            asunto.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
            estadoError=true;
        }

    }
    if (mensaje.value === null || mensaje.value === ''){
        mostrarMensajeError(mensaje,"Complete éste campo.");
        mensaje.oninput=()=>quitarMensajeError(mensaje);
        if (estadoError===false){          
            mensaje.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
            estadoError=true;
        }

    }



    if (estadoError === true) {
        return false;
    } else {
        formulario.submit();
        return true;
    }

}

