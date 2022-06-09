function cargarPrecio(equipo, ubicacion, cEntradas) {
    //Profe en este primero lo hice encabezando con un IF pero dsp a un case, lo deje comentado
    let precio
    switch(equipo){
        case '0':
            document.getElementById('sPrecio').value= '';
            break;
        case '1':
            if(ubicacion == 'popular-l' || ubicacion == 'popular-s'){
                precio = 200 * cEntradas
                document.getElementById('sPrecio').value= precio;
            }else{
                precio = 200 * 5 * cEntradas
                document.getElementById('sPrecio').value= precio;
            }
            break;
        case '2':
            if(ubicacion == 'popular-l' || ubicacion == 'popular-s'){
                precio = 150 * cEntradas
                document.getElementById('sPrecio').value= precio;
            }else{
                precio = 150 * 5 * cEntradas
                document.getElementById('sPrecio').value= precio;
            }
            break;
        case '3':
            if(ubicacion == 'popular-l' || ubicacion == 'popular-s'){
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
     
    //Validar demas campos
    //Profe, abajo esta comentado con alert, pero con el evento onblur entra en bucle.
    if (campoValor==''){
        campo.style.background = "red";
        document.getElementById('validacion').innerHTML="El campo "+ NombreCampo+" debe ser completado."
    }else{
        campo.style.background = "";
        document.getElementById('validacion').innerHTML=""
    }

    //validar caracteres en email
    if(NombreCampo == 'E-mail'){
        var val1, val2, val3,cantidadLetrasDominio;
        val1 = campoValor.indexOf("@");
        val2 = campoValor.toLowerCase().indexOf("hotmail");
        val3 = campoValor.toLowerCase().indexOf("gmail");
        
        // Armo array separando con el arroba
        x = campoValor.split("@");
        
        //Me quedo con la parte despues del arroba
        dominio = x[x.length-1];
        
        //armo arrays con punto del dominio
        y = dominio.split(".");
        //alert(y);
        //Cuento la cantidad de letras del primer punto en el array
        
        cantidadLetrasDominio = 0
        expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(campoValor)
        
        
        if((esValido != true)|| (val1 < 0) || (val2 <0 && val3 <0 )){
            campo.style.background = "red";
            if (campoValor.length!=0){
                document.getElementById('validacionMail').innerHTML="El campo Email debe contener un arroba, un punto, tres letras después de un punto para especificar '.com' <br> y un dominio válido de mail: Gmail y Hotmail."
            }
        }else{
            cantidadLetrasDominio = y[1].length
            if(cantidadLetrasDominio != 3){
                campo.style.background = "red";
                document.getElementById('validacionMail').innerHTML="El caaampo "+ NombreCampo+" debe ser completado."
            }else{
                campo.style.background = "";
                document.getElementById('validacionMail').innerHTML="" 
            }
        }
    }
    
    if(NombreCampo == 'Confirme-email' && campoValor!= "" ){
        //validar confirmacion de mail.
        email = document.getElementById('temail').value 
        if (email != campoValor){
            campo.style.background = "red";
            document.getElementById('validacionMail').innerHTML="El campo email y Confirme email deben ser el mismo mail." 
        }else{
            campo.style.background = "";
            document.getElementById('validacionMail').innerHTML="" 
        }
    }

}

function validarFormulario(){
    let equipo, cantidad ,apellido, nombre, email, cEmail, tarjetas
    
    equipo = document.getElementById('sEquipo')
    cantidad = document.getElementById('iCantidad')
    apellido = document.getElementById('tapellido')
    nombre = document.getElementById('tnombre')
    email = document.getElementById('temail')
    cEmail = document.getElementById('tCemail')
    
    // si un inpunt es valido
    let isValid = false;
    // cantidad max de caracteres
    const maximo = 25;
    //expresion regultar de texto
    const pattern = new RegExp('^[A-Z]+$', 'i');
    
    //Cantidad de entradas
    if(cantidad.value < 1 || cantidad.value  > 20 ){
        cantidad.style.background = "red";
        alert("Cantidad de entradas incorrectas")
        return false;
    }else{
        cantidad.style.background = "";
    }
    
    //Campo apellido
    if(!pattern.test(apellido.value) || apellido.value.length > 25 ){
        apellido.style.background = "red";
        alert("Debe completar el Apellido")
        return false;
    }
    //Campo nombre
    if(!pattern.test(nombre.value) || nombre.value.length > 25 ){
        nombre.style.background = "red";
        alert("Debe completar el Nombre")
        return false;
    }
    
     //validar email vacio
     if (email.value == ""){
        email.style.background = "red";
        alert("Debe ingresar un mail");
        return false
    }
    //validar confirmacion vacio
    if (cEmail.value == ""){
        cEmail.style.background = "red";
        alert("Debe ingresar un mail");
        return false
    }
    // Validacion tarjetas
    if(!document.querySelector('input[name="rTarjeta"]:checked')) {
        alert("Debe Seccionar una tarjeta de credito.");
        return false
    }
}

//Comertarios
    /* otra forma de hacer la funcion validarCampo() {
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

    /*  otra forma de hacer la function cargarPrecio(equipo, ubicacion, cEntradas) {
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
