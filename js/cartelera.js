window.onload = onLoad;
window.onresize = onResize;


var pepe = [
    {
        id: 0,
        tipo: "VideoG", 
        contenido: "video",
        src:"videos/movie.mp4",
        tiempo: 6,
        texto: []
    },
    {
        id: 1,
        tipo: "EventoG",
        contenido: "imagen", 
        src:"img/eee.jpg",
        tiempo: 5,
        texto: ["Ey Roble","9 de Septiembre 21:30hs"]
   
    }];
 //reproductor.reproducirFoto(pepe[1]);
//reproductor.context = reproductor;
reproductor.cargarPlayList(pepe);
reproductor.reproducir();