function soloFoto(){
  document.getElementById("contenedorFoto").style.display="block";
  document.getElementById("contenedorVideo").style.display="none";
}
function soloVideo(){
    document.getElementById("contenedorVideo").style.display="block";
    document.getElementById("contenedorFoto").style.display="none";
}

var flag = false;
function pepe(){
    if(flag){
        soloVideo();
    }
    else{
        soloFoto();
    }
    flag = !flag;
    setTimeout(pepe, 3000);
}
//pepe();

function playVideo(){
    var source = document.getElementById('source');
    var video = document.getElementById("video");
    video.pause();
    source.src="videos/movie.mp4";
    video.load();
    video.addEventListener('loadeddata', function() {
        document.getElementById("contenedorVideo").style.display ="block";
        video.play();
    }, false);

}
function playFoto(){
    var imagen =document.getElementById("foto");
    document.getElementById("contenedorFoto").style.display = "block";
}