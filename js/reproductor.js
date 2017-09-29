var reproductor = {
	playList: false,
	videoGcargado: false,
	videoDcargado: false,
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
	    source.src = elemento.src;
	    video.load();
		video.addEventListener('loadeddata', function() {
		   //ejecuta cuando termino de cargar
		   if(terminaCon(video.id,"G")) 
		   		videoGcargado = true;
		   else
		   		videoDcargado = true;
		   //TODO mover a la funcion que vaya reproduciendo la lista
	       document.getElementById("contenedorVideo"+tipoContenedor).style.display ="block";
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
		var imagen =document.getElementById("foto"+tipoContenedor);
		imagen.src =elemento.src;
		document.getElementById("contenedorFoto"+tipoContenedor).style.display = "block";

	},
	cargarPlayList: function(newPlayList){
		playList = newPlayList;
		reproductor.idxMaximo = playList.length-1;
	}, 
	play: function(){

		//reproducir elemento idxReproduciendo
		//poner un timeout por la duracion del elemento, que cuando termine haga idxReproduciendo++ y reprodusca 

	},
	stop: function(){
		//marcar un boolean para que haga stop
	},
	reproducir: function(){		
		reproductor.ocultarElemento();					
		if(playList[reproductor.idxReproduciendo].contenido == "video"){
			reproductor.reproducirVideo(playList[reproductor.idxReproduciendo]);
		}
		else if (playList[reproductor.idxReproduciendo].contenido == "imagen"){
			reproductor.reproducirFoto(playList[reproductor.idxReproduciendo]);
		}
		setTimeout(reproductor.reproducir, playList[reproductor.idxReproduciendo].tiempo*1000);
		if(reproductor.idxReproduciendo==reproductor.idxMaximo){
			reproductor.idxReproduciendo = 0;
		}
		else{
			reproductor.idxReproduciendo++;
		}	
	},
	ocultarElemento: function(){
		var numero= reproductor.idxReproduciendo-1;
		var tipoContenedor;
		if(numero== -1 ){
			numero=reproductor.idxMaximo;
		}
		var elemento=playList[numero];
		if (elemento.contenido=="imagen") {
			if(elemento.tipo=="Foto"){
				tipoContenedor= "G";
			} 
			else if (elemento.tipo=="EventoG") {
				tipoContenedor="GD";
			} 
			else if (elemento.tipo=="Evento"){
				tipoContenedor = "D";
			} 
			
			document.getElementById("contenedorFoto"+tipoContenedor).style.display = "none";
		}
		else if(elemento.contenido=="video"){
			if (elemento.tipo == "VideoG"){
				tipoContenedor= "G";
			}
			else{
				tipoContenedor="D";
			}
			var video = document.getElementById("video"+tipoContenedor);
			video.pause();
			document.getElementById("contenedorVideo"+tipoContenedor).style.display = "none";
		}
	}
}

function terminaCon(cadena, final){
	
	if(cadena.length>final.length){
		var numero=cadena.length-final.length;
		var resultado=cadena.substring(numero,cadena.length);
		if(resultado==final){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}

}