function init(){
    //leer parametros de la url
    var email, codigo;    
    var url = window.location.href;
    url = url.substring(url.indexOf("?")+1);
    var params = url.split("&");
    codigo = params[0];
    email = params[1];
    
    //llamada al web service    
    $.ajax({  
		type: "POST",  
		//crossDomain: true,
		contentType: "application/json; charset=utf-8",  
		url: 'http://www.lacabinabar.com.ar/LaCabinaWS.svc/Validar',  
		data: '{"usr":{"Nombre":"", "Apellido":"","Email":"' + email + '","Telefono":""}, "codVal":"' + codigo + '"}',
		success: function (dataR) {
			var response = dataR.d;
            document.getElementById("goBack").style.display = "inline-block";
			document.getElementById("msg1").style.display = "inline-block";
            document.getElementById("msg2").style.display = "inline-block";
            document.getElementById("goBack").style.display = "inline-block";    
            document.getElementById("espera").style.display = "none";
            document.getElementById("spinner").style.display = "none";
		},  
		error: function (result) {  
			alert("error: " + result); 
		}  
	});
}
