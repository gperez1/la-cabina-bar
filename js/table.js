$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();

function addrow(nombre,apellido,mail,telefono,id){
	var tdNombre=document.createElement("td");
	var tdApellido=document.createElement("td");
	var tdMail=document.createElement("td");
	var tdTelefono=document.createElement("td");
	var trContenedor=document.createElement("tr");
	tdNombre.innerHTML=nombre;
	tdApellido.innerHTML=apellido;
	tdMail.innerHTML=mail;
	tdTelefono.innerHTML=telefono;
	trContenedor.appendChild(tdNombre);
	trContenedor.appendChild(tdApellido);
	trContenedor.appendChild(tdMail);
	trContenedor.appendChild(tdTelefono);
	trContenedor.setAttribute("id",id);
	document.getElementById("usuarioTable").appendChild(trContenedor);

}
function llenarTabla (usuario){
	for (var i = 0; i < usuario.length; i++) {
    	addrow(usuario[i].Nombre,usuario[i].Apellido,usuario[i].Email,usuario[i].Telefono, i);   
  	}
}

$( "#contraseñaUs" ).keypress(function( event ) {
  if ( event.which == 13 ) {
    ingresoParaUsuarios();
  }
});
function ingresoParaUsuarios(){
	 var password= document.getElementById("contraseñaUs").value;
		
		if (password ==''){ 
        document.getElementById("warning-body").innerHTML="Por favor ingrese su contraseña";
        $("#warning").modal();  
	    } 
 
	   else{    
	   		 
	   		//document.getElementById("spinner").style.visibility = "visible";
			document.getElementById("loading").style.display = "block";
 
      $.ajax({ 
                type: "POST", 
                crossDomain: true,
                contentType: "application/json; charset=utf-8", 
                url: 'http://www.lacabinabar.com.ar/LaCabinaWS.svc/Listar', 
                data: '{"cod":"'+password+'"}',
                success: function (dataR) {
                	document.getElementById("loading").style.display = "none";
                	var response = dataR.d;
                	if(response == undefined){
                			$("#danger").modal();
                	}
                	else{
	            	    if (response.length== 0){
	            	    	 document.getElementById("warning-body").innerHTML="No hay usuarios para mostrar";
                        	 $("#warning").modal();
	            	    }
	            	    else if (response.length== 1){
		        	        	 if (response[0].Nombre=="pswd"){
		        	        	 	document.getElementById("danger-body").innerHTML="La contraseña ingresada es incorrecta";
                        			$("#danger").modal();
		        	        	 }
		        	        	else{
		        	        		llenarTabla(response);
		        	        		document.getElementById("ingreseContraseña").style.display = "none";
		        	        		document.getElementById("header").style.visibility = "visible";
		        	        		document.getElementById("content").style.visibility = "visible";
		        	        		document.getElementById("botonesDiv").style.visibility = "visible";

		        	        	}
	            	    }
	            	    else{
	            	    		llenarTabla(response);
	            	    		document.getElementById("ingreseContraseña").style.display = "none";
	            	    		document.getElementById("header").style.visibility = "visible";
		        	        	document.getElementById("content").style.visibility = "visible";
		        	        	document.getElementById("botonesDiv").style.visibility = "visible";
	            	    }
                	}
                }, 
                error: function (result) { 
                	document.getElementById("loading").style.display = "none";
                	alert(result); 
                } 
		});
       $.ajax({ 
                type: "POST", 
                crossDomain: true,
                contentType: "application/json; charset=utf-8", 
                url: 'http://www.lacabinabar.com.ar/LaCabinaWS.svc/ListarCom', 
                data: '{"cod":"'+password+'"}',
                success: function (dataR) {
                	document.getElementById("loading").style.display = "none";
                	var response = dataR.d;
                	if(response == undefined){
                			$("#danger").modal();
                	}
                	else{
                		if (response.length== 0){
	            	    	var msg=document.createElement("li");
	            	    	msg.innerHTML="No hay comentarios para mostrar";
							msg.setAttribute("style","color: red; display:block; font-size:30px;text-align:center;");
	            	    	document.getElementById("ListaComentarios").appendChild(msg);
	            	    }
	            	    else if (response.length== 1){
	            	    	if (response[0].Nombre=="pswd"){
		        	         	document.getElementById("danger-body").innerHTML="La contraseña ingresada es incorrecta";
                        		$("#danger").modal();
		        	        }
		        	        else{
		            	    	llenarComentarios(response);
		        	        }	            	    	
	            	    }
	            	    else{
	            	    	llenarComentarios(response);
	            	    }
                	}
                }, 
                error: function (result) { 
                	document.getElementById("loading").style.display = "none";
                	alert(result); 
                } 
		});
      } 
}

function comments(nombre,fecha,comentario,id){
	var divNombre=document.createElement("div");
	var h1Nombre=document.createElement("h1")
	var iNombre=document.createElement("i")
	var divFecha=document.createElement("div");
	var divComentario=document.createElement("div");
	var liContenedor=document.createElement("li");
	var hrSeparador=document.createElement("hr");
	var ulContenedor = document.getElementById("ListaComentarios");

	iNombre.innerHTML=nombre;
	divFecha.innerHTML=fecha;
	divComentario.innerHTML=comentario;
	
	divNombre.setAttribute("class","elNombre");
	iNombre.setAttribute("class","fa fa-comment-o");
	iNombre.setAttribute("aria-hidden","true");
	divFecha.setAttribute("class","laFecha");
	divComentario.setAttribute("class","elComentario");
	
	liContenedor.appendChild(divNombre);
	divNombre.appendChild(h1Nombre);
	h1Nombre.appendChild(iNombre);
	liContenedor.appendChild(divFecha);
	liContenedor.appendChild(divComentario);
	
	liContenedor.setAttribute("id",id);
	liContenedor.setAttribute("class","cadaComentario");
	ulContenedor.appendChild(liContenedor);
	ulContenedor.appendChild(hrSeparador);
}
function llenarComentarios (comentarioLi){
	for (var i = 0; i < comentarioLi.length; i++) {
    	comments(comentarioLi[i].Nombre,comentarioLi[i].Fecha,comentarioLi[i].Comentario, i);   
  	}

}
function soloSugerencias(){
	document.getElementById("header").style.visibility = "hidden";
	document.getElementById("content").style.visibility = "hidden";
    document.getElementById("losComentarios").style.display = "block";
    document.getElementById("formularioEventos").style.display = "none";
    

}
function soloUsuarios(){
	document.getElementById("header").style.visibility = "visible";
	document.getElementById("content").style.visibility = "visible";
    document.getElementById("losComentarios").style.display = "none";
    document.getElementById("formularioEventos").style.display = "none";

}
function soloEventos(){
	document.getElementById("header").style.visibility = "hidden";
	document.getElementById("content").style.visibility = "hidden";
	document.getElementById("losComentarios").style.display = "none";
	document.getElementById("formularioEventos").style.display = "block";

}

document.getElementById("enviarEv").addEventListener("click", function () {
    var titulo, fecha, foto1, foto2, foto3, descripcion;
    titulo = document.getElementById("TituloE").value;
    fecha = document.getElementById("FechaE").value;
    foto1 = document.getElementById("Foto1E").value;
    foto2 = document.getElementById("Foto2E").value;
    foto3 = document.getElementById("Foto3E").value;
    descripcion = document.getElementById("DescripcionE").value;
    document.getElementById("campoTituloEv").style.display = "none";
    document.getElementById("campoFechaEv").style.display = "none";
    document.getElementById("campoFotoE").style.display = "none";
    document.getElementById("campoFotoE2").style.display = "none";
    document.getElementById("campoFotoE3").style.display = "none";
    document.getElementById("campoDescripcionEv").style.display = "none";

    if(titulo == ""){
        //muestro error que falta nombre
        document.getElementById("campoTituloEv").style.display = "inline-block";
        return false;
    }
    if(fecha == ""){
        //muestro error que falta nombre
        document.getElementById("campoFechaEv").style.display = "inline-block";

        return false;
    }
    if(foto1 == ""){
        //muestro error que falta nombre
        document.getElementById("campoFotoE").style.display = "inline-block";

        return false;
    }
     if(foto2 == ""){
        //muestro error que falta nombre
        document.getElementById("campoFotoE2").style.display = "inline-block";

        return false;
    }
     if(foto3 == ""){
        //muestro error que falta nombre
        document.getElementById("campoFotoE3").style.display = "inline-block";

        return false;
    }
    if(descripcion == ""){
        //muestro error que falta nombre
        document.getElementById("campoDescripcionEv").style.display = "inline-block";

        return false;
    }
    if(titulo != "" && fecha != "" && foto1 != "" && foto2 != "" && foto3 != "" && descripcion != ""){
     alert("No esta disponible en este momento");  
  /*      this.disabled = true;
        document.getElementById("loading").style.display = "block";
        $.ajax({
            type: "POST",
            //crossDomain: true,
            contentType: "application/json; charset=utf-8",
            url: 'http://www.lacabinabar.com.ar/LaCabinaWS.svc/Registro',
            data: '{"usr":{"TituloE":"' + titulo + '", "FechaE":"' + fecha + '","Foto1E":"' + foto1 + '","Foto2E":"' + foto2 + '","Foto3E":"' + foto3 + '","DescripcionE":"' + descripcion + '"}}',
            success: function (dataR) {
                var response = dataR.d;
                //aviso segun codigo
                switch(response) {
                    case 0:
                        $("#danger").modal();
                        break;
                    case 1:
                        document.getElementById("success-body").innerHTML="Evento subido exitosamente";
                        $("#success").modal();
                        break;
                    
                }
                document.getElementById("enviarEv").disabled = false;
                document.getElementById("loading").style.display = "none";
            },
            error: function (result) {
                //aviso error
                $("#danger").modal();                
                document.getElementById("enviarEv").disabled = false;
                document.getElementById("loading").style.display = "none";
            }
        });*/
    }
});