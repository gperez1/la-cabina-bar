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
	    source.src = elemento.src;
	    video.load();
		video.addEventListener('loadeddata', function() {
		   //ejecuta cuando termino de cargar
		   if(video.id.endsWith("G"))
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
		if(elemento.tipo=="fotoG"){
			tipoContenedor= "G";
		} 
		else if (elemento.tipo=="fotoGD") {
				tipoContenedor="GD";
		} 
		else{
			tipoContenedor = "D";
		}
		var imagen =document.getElementById("foto"+tipoContenedor);
		document.getElementById("contenedorFoto"+tipoContenedor).style.display = "block";

	}
	cargarPlayList: function(newPlayList){
		playList = newPlayList;
		idxMaximo = playList.length-1;
	}, 
	play: function(){
		//reproducir elemento idxReproduciendo
		//poner un timeout por la duracion del elemento, que cuando termine haga idxReproduciendo++ y reprodusca 
		setTimeout(reproducir, 10000);
	},
	stop: function(){
		//marcar un boolean para que haga stop
	},
	reproducir: function(){
		if(idxReproduciendo==idxMaximo){
			idxReproduciendo = 0;
		}
		else{
			idxReproduciendo++;
		}						
		if(playList[idxReproduciendo].contenido == "video"){
			reproducirVideo(playList[idxReproduciendo]);
		}
		else{
			reproducirFoto
		}

		setTimeout(reproducir, 10000);
	}
}