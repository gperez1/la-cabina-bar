window.onload = onLoad;
window.onresize = onResize;

reproductor.reproducirVideo("videos/movie.mp4", "G");
var pepe = [
    {
        id: 0,
        tipo: "VideoG", 
        contenido: "video",
        src:"videos/movie.mp4",
        tiempo: 10,
        texto: []
    },
    {
        id: 1,
        tipo: "Evento",
        contenido: "imagen", 
        src:"videos/movie.mp4",
        tiempo: 10,
        texto: ["Ey Roble","9 de Septiembre 21:30hs"]
   
    }];
reproductor.cargarPlayList(pepe);
reproductor.play();