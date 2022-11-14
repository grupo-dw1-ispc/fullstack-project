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





var nombre = document.getElementById('nombres');
var apellido = document.getElementById('apellidos');
var email = document.getElementById('correo');
var password1 = document.getElementById('pass1');
var password2 = document.getElementById('pass2');
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
    

    if (password1.value === null || password1.value === ''){
        mostrarMensajeError(password1,"Complete éste campo.");
        password1.oninput=()=>quitarMensajeError(password1);
        if (estadoError===false){          
            password1.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
            estadoError=true;
        }
    
    } else {
        if (password1.value.length<6){
            mostrarMensajeError(password1,"Debe ingresar al menos 6 caracteres alfanumericos.");
            password1.oninput=()=>quitarMensajeError(password1);
            if (estadoError===false){          
                password1.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
                estadoError=true;
            }
        }
    }
    if (password2.value === null || password2.value === ''){
        mostrarMensajeError(password2,"Complete éste campo.");
        password2.oninput=()=>quitarMensajeError(password2);
        if (estadoError===false){          
            password2.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
            estadoError=true;
        }
    } else {
        if (!(password2.value === password1.value)){
            mostrarMensajeError(password2,"Debe coincidir la contraseña.");
            password2.oninput=()=>quitarMensajeError(password2);
            if (estadoError===false){          
                password2.focus();           //ésto solo se ejecuta para el primer campo vacio encontrado, por lo que se hace foco a dicho campo.
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

