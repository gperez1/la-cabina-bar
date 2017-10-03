"use strict"
function cVideoG(contenedor,video,source,id){
    
   var cSource=document.createElement("source");
   var cVideo=document.createElement("video");
   var divContenedor=document.createElement("div");

    cSource.innerHTM=source;
    cVideo.innerHTM=video;
    divContenedor.innerHTM=contenedor;

    cSource.setAttribute("src","");
    cSource.setAttribute("type","video/mp4");
    cSource.setAttribute("id","sourceG");
    cVideo.setAttribute("class","videoCart");
    cVideo.setAttribute("id","videoG"+id);
    divContenedor.setAttribute("class","contenedor");
    divContenedor.setAttribute("class","contenedorVideo");
    divContenedor.setAttribute("id","contenedorVideoG"+id);

    cVideo.appendChild(cSource);
    divContenedor.appendChild(cVideo);
      
}
function fotoG(img){
   var imagen=document.createElement("img");
   var divImagen=document.createElement("div");

    imagen.setAttribute("class","imagenEvento");
    imagen.setAttribute("src",img);
    imagen.setAttribute("alt","");
    imagen.setAttribute("id","fotoG"+id);

    divImagen.appendChild(imagen);

}
function cFotoGD(imagen,descripcion,fecha,id){
    var h3Descripcion=document.createElement("h3");
    var pDescripcion=document.createElement("p");
    var h3Fecha=document.createElement("h3");
    var divContenedorInfo=document.createElement("div");
    var img=document.createElement("img");
    var divFotoGD=document.createElement("div");
    var br = document.createElement("br");

    h3Descripcion.innerHTM=descripcion;
    h3Fecha.innerHTM=fecha;

    h3Descripcion.setAttribute("class","fechaEveG");
    pDescripcion.setAttribute("class","DescripcionEveG");
    pDescripcion.setAttribute("id","DescriFotoGD"+id);
    divContenedorInfo.setAttribute("class","contenedorInfoG");
    img.setAttribute("class","imagenCart");
    img.setAttribute("id","fotoGD"+id);
    img.setAttribute("src",imagen);
    img.setAttribute("alt","");
    divFotoGD.setAttribute("class","contenedor");
    divFotoGD.setAttribute("class","contenedorFotoC");
    divFotoGD.setAttribute("id","contenedorFotoGD"+id);

    pDescripcion.appendChild(h3Descripcion);
    pDescripcion.appendChild(br);
    divContenedorInfo.appendChild(pDescripcion);
    divContenedorInfo.appendChild(h3Fecha);
    divFotoGD.appendChild(img);
    divFotoGD.appendChild(divContenedorInfo);

}
function cFotoD(imagen,descripcion,fecha,titulo,id){
    var labelTitulo=document.createElement("label");
    var divCNombre=document.createElement("div");
    var h3Fecha=document.createElement("h3");
    var pDescripcion=document.createElement("p");
    var divCInfo=document.createElement("div");
    var img=document.createElement("img");
    var divFotoD=document.createElement("div");

    pDescripcion.innerHTM=descripcion;
    h3Fecha.innerHTM=fecha;
    labelTitulo.innerHTM=titulo;

    
    
    pDescripcion.setAttribute("class","DescripcionEve");
    pDescripcion.setAttribute("id","fechaFotoConD"+id);
    h3Fecha.setAttribute("class","fechaEve");
    divCInfo.setAttribute("class","contenedorInfo");
    divCInfo.setAttribute("id","infoFotoConD"+id);
    labelTitulo.setAttribute("class","tituloCart");
    divNombre.setAttribute("class","contenedorNombre");
    divNombre.setAttribute("id", "nombreVideoConD"+id);
    img.setAttribute("id","fotoD"+id);
    img.setAttribute("class","imagenEvento3");
    img.setAttribute("src",imagen);
    img.setAttribute("alt","");


    divCInfo.appendChild(pDescripcion);
    divCInfo.appendChild(h3Fecha);
    divNombre.appendChild(labelTitulo);
    divFotoD.appendChild(img);
    divFotoD.appendChild(divCInfo);
    divFotoD.appendChild(divCNombre);
}
function videoD(video,descripcion,fecha,titulo,id){
    
    var divCVideoD=document.createElement("div");   
    var divCVideo=document.createElement("div");
    var contenedorVideo=document.createElement("video");
    var source=document.createElement("source");
    var divCInfo=document.createElement("div");
    var pDescripcion=document.createElement("p");
    var h3Fecha=document.createElement("h3");
    var divCNombre=document.createElement("div");
    var labelTitulo=document.createElement("label");


    pDescripcion.innerHTM=descripcion;
    h3Fecha.innerHTM=fecha;
    labelTitulo.innerHTM=titulo;


    divCVideoD.setAttribute("class","contenedor" );
    divCVideoD.setAttribute("class","contenedorEvento4");
    divCVideoD.setAttribute("id","contenedorVideoD"+id);
    divCVideo.setAttribute("class","contenedorVideo4");
    divCVideo.setAttribute("id","videoD"+id);
    video.setAttribute("class","videoCart3");
    source.setAttribute("src",video);
    source.setAttribute("type","video/mp4");
    source.setAttribute("id","sourceVideoD"+id);
    divCinfo.setAttribute("class","contenedorInfo");
    divCinfo.setAttribute("id","infoVideoConD"+id);
    pDescripcion.setAttribute("class","descripcionEve");
    pDescripcion.setAttribute("id","descriVideoConD"+id);
    h3Fecha.setAttribute("class","fechaEve");
    h3Fecha.setAttribute("id","videoConD"+id);
    divCNombre.setAttribute("class","contenedorNombre");
    divCNombre.setAttribute("id","nombreVideoConD"+id);
    labelTitulo.setAttribute("class","tituloCart");


    contenedorVideo.appendChild("source");
    divCinfo.appendChild("pDescripcion");
    divCInfo.appendChild("h3Fecha");
    divCNombre.appendChild("labelTitulo");
    divCVideo.appendChild("contenedorVideo");
    divCVideo.appendChild("divCInfo");
    divCVideoD.appendChild("divCVideo");
    divCVideoD.appendChild("divCNombre");
    
    

    

}
