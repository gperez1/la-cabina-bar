"use strict"
function cVideoG(elemento){
    
   var cSource=document.createElement("source");
   var cVideo=document.createElement("video");
   var divContenedor=document.createElement("div");


    cSource.innerHTM=elemento.source;
    cVideo.innerHTM=elemento.video;
    divContenedor.innerHTM=elemento.contenedor;

    cSource.setAttribute("src",elemento.src);
    cSource.setAttribute("type","video/mp4");
    cSource.setAttribute("id",elemento.id);
    cVideo.setAttribute("class","videoCart");
    cVideo.setAttribute("id",elemento.id);
    divContenedor.setAttribute("class","contenedor");
    divContenedor.setAttribute("class","contenedorVideo");
    divContenedor.setAttribute("id",elemento.id);
  

    cVideo.appendChild(cSource);
    divContenedor.appendChild(cVideo);
    document.getElementById("bodyC").appendChild(divContenedor);
    
    cVideoG.load();  
    video.addEventListener('loadeddata', function() {
        //ejecuta cuando termino de cargar
        //TODOmarcar que el elemento fue cargado   
        reproductor.playList[elemento.id].cargado=true;
     }, false);
}
function fotoG(elemento){
   var imagen=document.createElement("img");
   var divImagen=document.createElement("div");

    imagen.setAttribute("class","imagenEvento");
    imagen.setAttribute("src",elemento.src);
    imagen.setAttribute("alt","");
    imagen.setAttribute("id",elemento.id);
    divImagen.setAttribute("class","contenedor");
    divImagen.setAttribute("class","contenedorFoto");
    divImagen.setAttribute("id",elemento.id);

    divImagen.appendChild(imagen);
    document.getElementById("bodyC").appendChild(divImagen);

}
function cFotoGD(elemento){
    var h3Descripcion=document.createElement("h3");
    var pDescripcion=document.createElement("p");
    var h3Fecha=document.createElement("h3");
    var divContenedorInfo=document.createElement("div");
    var img=document.createElement("img");
    var divFotoGD=document.createElement("div");
    var br = document.createElement("br");

    h3Descripcion.innerHTM=elemento.texto[2];
    h3Fecha.innerHTM=elemento.texto[1];

    h3Descripcion.setAttribute("class","fechaEveG");
    pDescripcion.setAttribute("class","DescripcionEveG");
    pDescripcion.setAttribute("id",elemento.id);
    divContenedorInfo.setAttribute("class","contenedorInfoG");
    img.setAttribute("class","imagenCart");
    img.setAttribute("id",elemento.id);
    img.setAttribute("src",elemento.src);
    img.setAttribute("alt","");
    divFotoGD.setAttribute("class","contenedor");
    divFotoGD.setAttribute("class","contenedorFotoC");
    divFotoGD.setAttribute("id",elemento.id);

    pDescripcion.appendChild(h3Descripcion);
    pDescripcion.appendChild(br);
    divContenedorInfo.appendChild(pDescripcion);
    divContenedorInfo.appendChild(h3Fecha);
    divFotoGD.appendChild(img);
    divFotoGD.appendChild(divContenedorInfo);
    document.getElementById("bodyC").appendChild(divFotoGD);

}
function cFotoD(elemento){
    var labelTitulo=document.createElement("label");
    var divCNombre=document.createElement("div");
    var h3Fecha=document.createElement("h3");
    var pDescripcion=document.createElement("p");
    var divCInfo=document.createElement("div");
    var img=document.createElement("img");
    var divFotoD=document.createElement("div");

    pDescripcion.innerHTM=elemento.texto[2];
    h3Fecha.innerHTM=elemento.texto[1];
    labelTitulo.innerHTM=elemento.texto[0];

    
    
    pDescripcion.setAttribute("class","DescripcionEve");
    pDescripcion.setAttribute("id",elemento.id);
    h3Fecha.setAttribute("class","fechaEve");
    divCInfo.setAttribute("class","contenedorInfo");
    divCInfo.setAttribute("id",elemento.id);
    labelTitulo.setAttribute("class","tituloCart");
    divCNombre.setAttribute("class","contenedorNombre");
    divCNombre.setAttribute("id",elemento.id);
    img.setAttribute("id",elemento.id);
    img.setAttribute("class","imagenEvento3");
    img.setAttribute("src",elemento.src);
    img.setAttribute("alt","");
    divFotoD.setAttribute("class","contenedor");
    divFotoD.setAttribute("class","contenedorFotoC");
    divFotoD.setAttribute("id",elemento.id);



    divCInfo.appendChild(pDescripcion);
    divCInfo.appendChild(h3Fecha);
    divCNombre.appendChild(labelTitulo);
    divFotoD.appendChild(img);
    divFotoD.appendChild(divCInfo);
    divFotoD.appendChild(divCNombre);
    document.getElementById("bodyC").appendChild(divFotoD);
}
function videoD(elemento){

    var divCVideoD=document.createElement("div");   
    var divCVideo=document.createElement("div");
    var contenedorVideo=document.createElement("video");
    var source=document.createElement("source");
    var divCInfo=document.createElement("div");
    var pDescripcion=document.createElement("p");
    var h3Fecha=document.createElement("h3");
    var divCNombre=document.createElement("div");
    var labelTitulo=document.createElement("label");

    contenedorVideo.pause();

    pDescripcion.innerHTM=elemento.texto[2];
    h3Fecha.innerHTM=elemento.texto[1];
    labelTitulo.innerHTM=elemento.texto[0];


    divCVideoD.setAttribute("class","contenedor" );
    divCVideoD.setAttribute("class","contenedorEvento4");
    divCVideoD.setAttribute("id",elemento.id);
    divCVideo.setAttribute("class","contenedorVideo4");
    video.setAttribute("class","videoCart3");
    video.setAttribute("id","videoD"+elemento.id);
    source.setAttribute("src",elemento.src);
    source.setAttribute("type","video/mp4");
    source.setAttribute("id",elemento.id);
    divCinfo.setAttribute("class","contenedorInfo");
    divCinfo.setAttribute("id",elemento.id);
    pDescripcion.setAttribute("class","descripcionEve");
    pDescripcion.setAttribute("id",elemento.id);
    h3Fecha.setAttribute("class","fechaEve");
    h3Fecha.setAttribute("id",elemento.id);
    divCNombre.setAttribute("class","contenedorNombre");
    divCNombre.setAttribute("id",elemento.id);
    labelTitulo.setAttribute("class","tituloCart");


    contenedorVideo.appendChild("source");
    divCinfo.appendChild("pDescripcion");
    divCInfo.appendChild("h3Fecha");
    divCNombre.appendChild("labelTitulo");
    divCVideo.appendChild("contenedorVideo");
    divCVideo.appendChild("divCInfo");
    divCVideoD.appendChild("divCVideo");
    divCVideoD.appendChild("divCNombre");
    document.getElementById("bodyC").appendChild(divCVideoD);

    contenedorVideo.load();  
    contenedorVideo.addEventListener('loadeddata', function() {
        //ejecuta cuando termino de cargar
        //marca que el elemento fue cargado   
        reproductor.playList[elemento.id].cargado=true;
     }, false);
    
}
