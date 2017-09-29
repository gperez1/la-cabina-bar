"use strict"
function cVideoG(contenedor,video,source,id){
    
    cSource=document.createElement("source");
    cVideo=document.createElement("video");
    divContenedor=document.createElement("div");

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
    imagen=document.createElement("img");
    divImagen=document.createElement("div");

    imagen.setAttribute("class","imagenEvento");
    imagen.setAttribute("src",img);
    imagen.setAttribute("alt","");
    imagen.setAttribute("id","fotoG"+id);

    divImagen.appendChild(imagen);

}
function cFotoGD(imagen,descripcion,fecha,id){
    h3Descripcion=document.createElement("h3");
    pDescripcion=document.createElement("p");
    h3Fecha=document.createElement("h3");
    divContenedorInfo=document.createElement("div");
    img=document.createElement("img");
    divFotoGD=document.createElement("div");
    br = document.createElement("br");

    h3Descripcion.innerHTM=descripcion;
    h3Fecha.innerHTM=fecha;

    h3Descripcion.setAttribute("class","fechaEveG");
    pDescripcion.setAttribute("class","DescripcionEveG");
    pDescripcion.setAttribute("id","DescriFotoGD");
    divContenedorInfo.setAttribute("class","contenedorInfoG");
    img.setAttribute("class","imagenCart");
    img.setAttribute("id","fotoGD");
    img.setAttribute("src",imagen);
    img.setAttribute("alt","");
    divFotoGD.setAttribute("class","contenedor");
    divFotoGD.setAttribute("class","contenedorFotoC");
    divFotoGD.setAttribute("id","contenedorFotoGD");

    pDescripcion.appendChild(h3Descripcion);
    pDescripcion.appendChild(br);
    divContenedorInfo.appendChild(pDescripcion);
    divContenedorInfo.appendChild(h3Fecha);
    divFotoGD.appendChild(img);
    divFotoGD.appendChild(divContenedorInfo);

}
function cFotoD(imagen,descripcion,fecha,titulo,id){
    labelTitulo=document.createElement("label");
    divCNombre=document.createElement("div");
    h3Fecha=document.createElement("h3");
    pDescripcion=document.createElement("p");
    divCInfo=document.createElement("div");
    img=document.createElement("img");
    divFotoD.createElement("div");

    pDescripcion.innerHTM=descripcion;
    h3Fecha.innerHTM=fecha;
    labelTitulo.innerHTM=titulo;

    
    
    pDescripcion.setAttribute("class","DescripcionEve");
    pDescripcion.setAttribute("id","fechaFotoConD"+id);
    h3Fecha.setAttribute("class","fechaEve");
    divCInfo.setAttribute("class","contenedorInfo");
    divCInfo.setAttribute("id","infoFotoConD");
    labelTitulo.setAttribute("class","tituloCart");
    divNombre.setAttribute("class","contenedorNombre");
    divNombre.setAttribute("id", "nombreVideoConD"+id);
    img.setAttribute("id","fotoD");
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
    divCVideoD.setAttribute("id","contenedorVideoD");
    divCVideo.setAttribute("class","contenedorVideo4");
    divCVideo.setAttribute("id","videoD");
    video.setAttribute("class","videoCart3");
    source.setAttribute("src",video);
    source.setAttribute("type","video/mp4");
    source.setAttribute("id","sourceVideoD");
    divCinfo.setAttribute("class","contenedorInfo");
    divCinfo.setAttribute("id","infoVideoConD");
    pDescripcion.setAttribute("class","descripcionEve");
    pDescripcion.setAttribute("id","descriVideoConD");
    h3Fecha.setAttribute("class","fechaEve");
    h3Fecha.setAttribute("id","videoConD");
    divCNombre.setAttribute("class","contenedorNombre");
    divCNombre.setAttribute("id","nombreVideoConD");
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
