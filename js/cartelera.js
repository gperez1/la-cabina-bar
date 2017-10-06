var pepe = [
    {
        id: 0,
        tipo: "VideoG", 
        contenido: "video",
        src:"videos/movie.mp4",
        tiempo: 6,
        texto: [],
        cargado: false
    },
    {
        id: 1,
        tipo: "EventoG",
        contenido: "imagen", 
        src:"img/eee.jpg",
        tiempo: 6,
        texto: ["Ey Roble","9 de Septiembre 21:30hs"],
        cargado: false
   
    },
    {
        id:3,
        tipo:"Evento",
        contenido:"imagen",
        src:"img/Cartelera/1.jpg",
        tiempo: 6,
        texto: ["Ey Roble","12 de Abril","ey roble se presentopiririrlul luli lu li l i l llllllu pepe"],
        cargado: false
    },
    {
        id:4,
        tipo:"Foto",
        contenido:"imagen",
        src:"img/Cartelera/2.jpg",
        tiempo: 4,
        texto: [],
        cargado: false
    },
    {
        id:5,
        tipo:"Foto",
        contenido:"imagen",
        src:"img/Cartelera/3.jpg",
        tiempo: 4,
        texto: [],
        cargado: false
    },
    {
        id:6,
        tipo:"Foto",
        contenido:"imagen",
        src:"img/Cartelera/4.jpg",
        tiempo: 4,
        texto: [],
        cargado: false
    },
    {
        id:7,
        tipo:"Foto",
        contenido:"imagen",
        src:"img/Cartelera/5.jpg",
        tiempo: 4,
        texto: [],
        cargado: false
    },
    {
        id:8,
        tipo:"Foto",
        contenido:"imagen",
        src:"img/Cartelera/6.jpg",
        tiempo: 4,
        texto: [],
        cargado:false
    },

];
 //reproductor.reproducirFoto(pepe[1]);
//reproductor.context = reproductor;
reproductor.cargarPlayList(pepe);
reproductor.reproducir();