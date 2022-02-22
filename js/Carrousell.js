document.addEventListener('DOMContentLoaded', () => { /* Que el carousel empiece al cargar la pagina */
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, { /* M accede a materializa, Al carousel y lo inicializa por cada elemento carousel */
        duration: 200,
        dist: -80,
        /* perspectiva de la imagen */
        shift: 5,
        /* distancia de las imagenes a los costados */
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false /* si queremos que el carousel tenga fin y empiece con la primera imagen */
    });
});