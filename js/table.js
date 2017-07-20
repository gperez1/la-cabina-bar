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
        alert("Porfavor ingrese su contraseña.");  
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

}
function soloUsuarios(){
	document.getElementById("header").style.visibility = "visible";
	document.getElementById("content").style.visibility = "visible";
    document.getElementById("losComentarios").style.display = "none";
}
