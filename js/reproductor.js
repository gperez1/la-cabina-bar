var reproductor = {
	playList: false,

	idxReproduciendo: 0,
	idxMaximo: 0, 
	reproducirVideo: function(elemento){
		var tipoContenedor;
		if (elemento.tipo == "VideoG"){
			tipoContenedor= "G";
		}else{
			tipoContenedor="D";
		}
	    var source = document.getElementById('source'+tipoContenedor);
		var video = document.getElementById("video"+tipoContenedor);
		video.pause();
	    //source.src = elemento.src;
	    video.load();
		video.addEventListener('loadeddata', function() {
		   //ejecuta cuando termino de cargar
		   
		   //TODO mover a la funcion que vaya reproduciendo la lista
	       document.getElementById(elemento.id).style.display ="block";
	       video.play();
		}, false);
	}, 
	 reproducirFoto: function(elemento){
		var tipoContenedor;
		if(elemento.tipo=="Foto"){
			 tipoContenedor= "G";
		} 
		else if (elemento.tipo=="EventoG") {
				tipoContenedor="GD";
		} 
		else if (elemento.tipo=="Evento"){
			tipoContenedor = "D";
		}
		var imagen =document.getElementById(elemento.id);
		imagen.src =elemento.src;
		document.getElementById(elemento.id).style.display="block";

	},  
	cargarPlayList: function(newPlayList){
		playList = newPlayList;
		reproductor.idxMaximo = playList.length-1;
		for(i=0;i<playList.length;i++){
			if(playList[i].contenido=="video"){
				if(playList[i].tipo =="VideoG"){
					cVideoG(playList[i]);
					
				}
				else if(playList[i].tipo=="videoD"){
					videoD(playList[i]);
					
				}
			}
			else if(playList[i].contenido == "imagen"){
				if(playList[i].tipo == "Foto"){
					 fotoG(playList[i]);
					 
				}
				else if(playList[i].tipo == "EventoG"){
					 cFotoGD(playList[i]);
					 
				}
				else if(playList[i].tipo == "Evento"){
					 cFotoD(playList[i]);
					 
				}
			}
		}
	}, 
	stop: function(){
		//marcar un boolean para que haga stop
	},
	reproducir: function(){	

		reproductor.ocultarElemento();					
		
		setTimeout(reproductor.reproducir, playList[reproductor.idxReproduciendo].tiempo*1000);
		if(reproductor.idxReproduciendo == reproductor.idxMaximo){
			reproductor.idxReproduciendo = 0;
		}
		else{
			reproductor.idxReproduciendo++;
		}	
	},
	ocultarElemento: function(){
		var numero = reproductor.idxReproduciendo-1;
		if(numero == -1 ){
			numero=reproductor.idxMaximo;
		}
		document.getElementById(numero).style.display="none";	
	}
}

function terminaCon(cadena, final){
	
	if(cadena.length>final.length){
		var numero = cadena.length-final.length;
		var resultado = cadena.substring(numero,cadena.length);
		if(resultado == final){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}

}