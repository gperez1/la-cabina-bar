var eventos=[];

function init(){
    var Brindis= new Object();
    Brindis.id=0;
    Brindis.titulo= "Brindis/Música de Flores Vol. 4";
    Brindis.fecha= "20 de Noviembre/2016";
    Brindis.descripcion= 'Con la participación de el grupo del compositor Juan "Pollo" Raffo, premio Konex de platino 2015, presentando su cuarto álbum "Brindis/Música de Flores Vol. 4". ' ;
    Brindis.img1= "img/Eventos/foto4.jpg";
    Brindis.img2= "img/Eventos/foto4.jpg";
    Brindis.img3= "img/Eventos/foto4.jpg";
    var Lapua= new Object();
    Lapua.id=1;
    Lapua.titulo= "Reyes de la Pua";
    Lapua.fecha= "8 de Julio";
    Lapua.descripcion= 'Presentamos el Sabado 8 de julio a las 22.30hs junto a el club Argentino de Castelar a "Reyes de la Pua" Fiesta ochentosa ';
    Lapua.img1= "img/Eventos/foto1.jpg";
    Lapua.img2= "img/Eventos/foto2.jpg";
    Lapua.img3= "img/Eventos/foto3.jpg";
    var EyRoble= new Object();
    EyRoble.id=2;
    EyRoble.titulo= "Ey Roble";
    EyRoble.fecha= "9 de Septiembre";
    EyRoble.descripcion= "En la Cabina, Bar de Artes. Sabado 9 de Septiembre a las 21:30hs junto al Club Argentino de Castelar";
    EyRoble.img1= "img/Eventos/foto7.jpg";
    EyRoble.img2= "img/Eventos/foto8.jpg";
    EyRoble.img3= "img/Eventos/foto9.jpg";


    eventos.push(Brindis);
    eventos.push(Lapua);
    eventos.push(EyRoble);
    addEvento(Brindis);
    addEvento(Lapua);
    addEvento(EyRoble);
}
    

document.getElementById("enviar").addEventListener("click", function () {
    var nombre, apellido, email, telefono;
    nombre = document.getElementById("Nombre").value;
    apellido = document.getElementById("Apellido").value;
    email = document.getElementById("Email").value;
    telefono = document.getElementById("Telefono").value;
    document.getElementById("campoNombreF").style.display = "none";
    document.getElementById("campoApellido").style.display = "none";
    document.getElementById("campoEmail").style.display = "none";
    document.getElementById("campoTelefono").style.display = "none";
    if(nombre == ""){
        //muestro error que falta nombre
        document.getElementById("campoNombreF").style.display = "inline-block";
        return false;
    }
    if(apellido == ""){
        //muestro error que falta nombre
        document.getElementById("campoApellido").style.display = "inline-block";

        return false;
    }
    if(email == ""){
        //muestro error que falta nombre
        document.getElementById("campoEmail").style.display = "inline-block";

        return false;
    }
    if(telefono == ""){
        //muestro error que falta nombre
        document.getElementById("campoTelefono").style.display = "inline-block";

        return false;
    }
    if(nombre != "" && apellido != "" && email != "" && telefono != ""){        
        this.disabled = true;
        document.getElementById("loading").style.display = "block";
        $.ajax({
            type: "POST",
            //crossDomain: true,
            contentType: "application/json; charset=utf-8",
            url: 'http://www.lacabinabar.com.ar/LaCabinaWS.svc/Registro',
            data: '{"usr":{"Nombre":"' + nombre + '", "Apellido":"' + apellido + '","Email":"' + email + '","Telefono":"' + telefono + '"}}',
            success: function (dataR) {
                var response = dataR.d;
                //aviso segun codigo
                switch(response) {
                    case 0:
                        $("#warning").modal();
                        break;
                    case 1:
                        document.getElementById("success-body").innerHTML="Gracias por registrarte! Revisa tu casilla de e-mail, te enviamos un correo para confirmar tus datos.";
                        $("#success").modal();
                        break;
                    case -1:
                        $("#danger").modal();
                        break;
                }
                document.getElementById("enviar").disabled = false;
                document.getElementById("loading").style.display = "none";
            },
            error: function (result) {
                //aviso error
                $("#danger").modal();                
                document.getElementById("enviar").disabled = false;
                document.getElementById("loading").style.display = "none";
            }
        });
    }
});
document.getElementById("enviarComentario").addEventListener("click", function (){
    var nombre, comentario;
    nombre = document.getElementById("NombreC").value;
    comentario = document.getElementById("Comentario").value;
    //ocultar todos los errores 
     document.getElementById("campoNombre").style.display = "none";
     document.getElementById("campoComentario").style.display = "none";
    if(nombre == ""){
        //muestro error que falta nombre
        document.getElementById("campoNombre").style.display = "inline-block";

        return false;
    }
    if(comentario == ""){
        
        document.getElementById("campoComentario").style.display = "inline-block";

        return false;
    }
    
    if(nombre != "" && comentario != ""){        
        this.disabled = true;
        document.getElementById("loading").style.display = "block";
        $.ajax({
            type: "POST",
            //crossDomain: true,
            contentType: "application/json; charset=utf-8",
            url: 'http://www.lacabinabar.com.ar/LaCabinaWS.svc/addComentario',
            data: '{"com":{"Nombre":"' + nombre + '", "Comentario":"' + comentario + '", "Fecha":""}}',
            success: function (dataR) {
                var response = dataR.d;
                //aviso segun codigo
                switch(response) {
                    case 0:
                        document.getElementById("success-body").innerHTML="Ya enviamos tu comentario, Gracias!";
                        $("#success").modal();
                        break;
                    case -1:
                        $("#danger").modal();
                        break;
                }
                document.getElementById("enviarComentario").disabled = false;
                document.getElementById("loading").style.display = "none";
            },
            error: function (result) {
                //aviso error
                $("#danger").modal();                
                document.getElementById("enviarComentario").disabled = false;
                document.getElementById("loading").style.display = "none";
            }
        });
    }
});

function addEvento(evento){
    /*titulo="Agkjudswcs";
    fecha="8 de Julio";
    foto="img/Eventos/foto1.jpg";*/
    var portafolioItem=document.createElement("div");
    var portafolioLink=document.createElement("div");
    var portafolioHover=document.createElement("div")
    var portafolioHoverContent=document.createElement("div");
    var iPortafolio=document.createElement("i");
    var fotoEvento=document.createElement("img");
    var portafolioCaption=document.createElement("div");
    var h4Titulo=document.createElement("h4");
    var pFecha=document.createElement("p");
    var eventoContenedor = document.getElementById("rowContenedor");

    h4Titulo.innerHTML=evento.titulo;
    pFecha.innerHTML=evento.fecha;

    portafolioItem.setAttribute("class","col-md-4 col-sm-6 portfolio-item");
    portafolioLink.setAttribute("class","portfolio-link");
    portafolioLink.setAttribute("data-toggle","modal");
    portafolioLink.setAttribute("onclick","showEvent("+evento.id+")");
    portafolioHover.setAttribute("class","portfolio-hover");
    portafolioHoverContent.setAttribute("class","portfolio-hover-content");
    iPortafolio.setAttribute("class","fa fa-plus fa-3x");
    fotoEvento.setAttribute("src",evento.img1);
    fotoEvento.setAttribute("class","img-fluid");
    portafolioCaption.setAttribute("class","portfolio-caption");
    pFecha.setAttribute("class","text-muted");

    portafolioHoverContent.appendChild(iPortafolio);
    portafolioHover.appendChild(portafolioHoverContent);    
    portafolioLink.appendChild(portafolioHover);
    portafolioLink.appendChild(fotoEvento);
    portafolioCaption.appendChild(h4Titulo);
    portafolioCaption.appendChild(pFecha);
    portafolioItem.appendChild(portafolioLink);
    portafolioItem.appendChild(portafolioCaption);
    eventoContenedor.appendChild(portafolioItem);
}


function showEvent(id){
//seteamos campos
    var tituloEvento=document.getElementById("tituloEvento");
    var fechaEvento=document.getElementById("fechaEvento");
    var img1Evento=document.getElementById("img1Evento");
    var img2Evento=document.getElementById("img2Evento");
    var img3Evento=document.getElementById("img3Evento");
    var descripcionEvento=document.getElementById("descripcionEvento");

    tituloEvento.innerHTML = eventos[id].titulo;
    fechaEvento.innerHTML= eventos[id].fecha;
    descripcionEvento.innerHTML = eventos[id].descripcion;
    img1Evento.setAttribute("src",eventos[id].img1);
    img2Evento.setAttribute("src",eventos[id].img2);
    img3Evento.setAttribute("src",eventos[id].img3);
    

   $("#portfolioModal2").modal();    

}






