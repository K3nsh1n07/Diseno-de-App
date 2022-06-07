function cargarPrecio(equipo, ubicacion, cEntradas) {
    //Profe en este primero lo hice encabezando con un IF pero dsp a un case, lo deje comentado
    let precio
    switch(equipo){
        case '0':
            document.getElementById('sPrecio').value= '';
            break;
        case '1':
            if(ubicacion == 'popular'){
                precio = 200 * cEntradas
                document.getElementById('sPrecio').value= precio;
            }else{
                precio = 200 * 5 * cEntradas
                document.getElementById('sPrecio').value= precio;
            }
            break;
        case '2':
            if(ubicacion == 'popular'){
                precio = 150 * cEntradas
                document.getElementById('sPrecio').value= precio;
            }else{
                precio = 150 * 5 * cEntradas
                document.getElementById('sPrecio').value= precio;
            }
            break;
        case '3':
            if(ubicacion == 'popular'){
                precio = 170 * cEntradas
                document.getElementById('sPrecio').value= precio;
            }else{
                precio = 170 * 5 * cEntradas
                document.getElementById('sPrecio').value= precio;
            }
            break;
    }
}

function validarCampo(campo, campoValor, NombreCampo){
    //Profe, abajo esta comentado con alert, pero con el evento onblur entra en bucle.
    if (campoValor==''){
        campo.style.background = "red";
        document.getElementById('validacion').innerHTML="El campo "+ NombreCampo+" debe ser completado."
    }else{
        campo.style.background = "";
        document.getElementById('validacion').innerHTML=""
    }
}
    /*
    switch(nombreCampo){
        case 'Cantidad':
            if (campoValor==''){
                campo.style.background = "red";
                alert("Falta completar el campo: " + nombreCampo);
            }else{
                campo.style.background = "";
            }
            break;
        case 'Apellido':
            if (campoValor==''){
                campo.style.background = "red";
                alert("Falta completar el campo: " + nombreCampo);
            }else{
                campo.style.background = "";
            }
            break;
        case 'Nombre':
                if (campoValor==''){
                    campo.style.background = "red";
                    alert("Falta completar el campo: " + nombreCampo);
                }else{
                    campo.style.background = "";
                }
                break;
        case 'E-mail':
                if (campoValor==''){
                    campo.style.background = "red";
                    alert("Falta completar el campo: " + nombreCampo);
                    return ''
                }else{
                    campo.style.background = "";
                }
                break;
    }*/

    /*
    if(equipo == 0){
        document.getElementById('sPrecio').value= '';
    }
    if(equipo == 1){
        switch(ubicacion){
            case 'popular':
                precio = 200 * cEntradas
                document.getElementById('sPrecio').value= precio;
                break;
            case 'visitante':
                precio = 200 * 5 * cEntradas
                document.getElementById('sPrecio').value= precio;
                break;
        }        
    }
    if(equipo == 2){
        switch(ubicacion){
            case 'popular':
                precio = 150 * cEntradas
                document.getElementById('sPrecio').value= precio;
                break;
            case 'visitante':
                precio = 150 * 5 * cEntradas
                document.getElementById('sPrecio').value= precio;
                break;
        }        
    }

    if(equipo == 3){
        switch(ubicacion){
            case 'popular':
                precio = 170 * cEntradas
                document.getElementById('sPrecio').value= precio;
                break;
            case 'visitante':
                precio = 170 * 5 * cEntradas
                document.getElementById('sPrecio').value= precio;
                break;
        }        
    }
    */
