document.getElementById("enviar").addEventListener("click", function () {
    var nombre, apellido, email, telefono;
    nombre = document.getElementById("Nombre").value;
    apellido = document.getElementById("Apellido").value;
    email = document.getElementById("Email").value;
    telefono = document.getElementById("Telefono").value;
    document.getElementById("campoNombreF").style.display = "none";
    document.getElementById("campoApellido").style.display = "none";
    document.getElementById("campoEmail").style.display = "none";
    document.getElementById("campoTelefono").style.display = "none";
    if(nombre == ""){
        //muestro error que falta nombre
        document.getElementById("campoNombreF").style.display = "inline-block";
        return false;
    }
    if(apellido == ""){
        //muestro error que falta nombre
        document.getElementById("campoApellido").style.display = "inline-block";

        return false;
    }
    if(email == ""){
        //muestro error que falta nombre
        document.getElementById("campoEmail").style.display = "inline-block";

        return false;
    }
    if(telefono == ""){
        //muestro error que falta nombre
        document.getElementById("campoTelefono").style.display = "inline-block";

        return false;
    }
    if(nombre != "" && apellido != "" && email != "" && telefono != ""){        
        this.disabled = true;
        document.getElementById("loading").style.display = "block";
        $.ajax({
            type: "POST",
            //crossDomain: true,
            contentType: "application/json; charset=utf-8",
            url: 'http://www.lacabinabar.com.ar/LaCabinaWS.svc/Registro',
            data: '{"usr":{"Nombre":"' + nombre + '", "Apellido":"' + apellido + '","Email":"' + email + '","Telefono":"' + telefono + '"}}',
            success: function (dataR) {
                var response = dataR.d;
                //aviso segun codigo
                switch(response) {
                    case 0:
                        $("#warning").modal();
                        break;
                    case 1:
                        document.getElementById("success-body").innerHTML="Gracias por registrarte! Revisa tu casilla de e-mail, te enviamos un correo para confirmar tus datos.";
                        $("#success").modal();
                        break;
                    case -1:
                        $("#danger").modal();
                        break;
                }
                document.getElementById("enviar").disabled = false;
                document.getElementById("loading").style.display = "none";
            },
            error: function (result) {
                //aviso error
                $("#danger").modal();                
                document.getElementById("enviar").disabled = false;
                document.getElementById("loading").style.display = "none";
            }
        });
    }
});
document.getElementById("enviarComentario").addEventListener("click", function (){
    var nombre, comentario;
    nombre = document.getElementById("NombreC").value;
    comentario = document.getElementById("Comentario").value;
    //ocultar todos los errores 
     document.getElementById("campoNombre").style.display = "none";
     document.getElementById("campoComentario").style.display = "none";
    if(nombre == ""){
        //muestro error que falta nombre
        document.getElementById("campoNombre").style.display = "inline-block";

        return false;
    }
    if(comentario == ""){
        
        document.getElementById("campoComentario").style.display = "inline-block";

        return false;
    }
    
    if(nombre != "" && comentario != ""){        
        this.disabled = true;
        document.getElementById("loading").style.display = "block";
        $.ajax({
            type: "POST",
            //crossDomain: true,
            contentType: "application/json; charset=utf-8",
            url: 'http://www.lacabinabar.com.ar/LaCabinaWS.svc/addComentario',
            data: '{"com":{"Nombre":"' + nombre + '", "Comentario":"' + comentario + '", "Fecha":""}}',
            success: function (dataR) {
                var response = dataR.d;
                //aviso segun codigo
                switch(response) {
                    case 0:
                        document.getElementById("success-body").innerHTML="Ya enviamos tu comentario, Gracias!";
                        $("#success").modal();
                        break;
                    case -1:
                        $("#danger").modal();
                        break;
                }
                document.getElementById("enviarComentario").disabled = false;
                document.getElementById("loading").style.display = "none";
            },
            error: function (result) {
                //aviso error
                $("#danger").modal();                
                document.getElementById("enviarComentario").disabled = false;
                document.getElementById("loading").style.display = "none";
            }
        });
    }
});