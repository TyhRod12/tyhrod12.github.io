/*  
  Smooth Scroll + Active Menu  
  Actualizado para: Anthya Rodríguez  
*/

// Secciones del menú a controlar
const sections = [1, 2, 3, 4, 5];

// Distancia desde el top (alto de la barra)
const offsetTop = 90;

// Función: Actualizar el menú cuando se hace scroll
function updateActiveMenu() {
    let scrollPos = $(document).scrollTop() + offsetTop + 1;

    sections.forEach((value, index) => {
        let section = $('#section_' + value);

        if (section.length) {
            let sectionTop = section.offset().top;

            if (scrollPos >= sectionTop) {
                // Resetear estados
                $('.navbar-nav .nav-link').removeClass('active').addClass('inactive');

                // Activar el correspondiente
                $('.navbar-nav .nav-link').eq(index)
                    .addClass('active')
                    .removeClass('inactive')
                    .css({
                        "transition": "0.3s",
                        "color": "#1C4CA3"   // Tone azul personalizado
                    });
            }
        }
    });
}

// Click suave al navegar
function setupClickScroll() {
    sections.forEach((value, index) => {
        $('.click-scroll').eq(index).click(function (e) {
            e.preventDefault();
            let target = $('#section_' + value);

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - offsetTop
                }, 500); // velocidad más suave
            }
        });
    });
}

// Inicialización
$(document).ready(function () {

    // Estado inicial del menú
    $('.navbar-nav .nav-link')
        .addClass('inactive')
        .css("transition", "0.3s");

    $('.navbar-nav .nav-link').eq(0)
        .addClass('active')
        .removeClass('inactive')
        .css("color", "#1C4CA3");

    // Activar funciones
    setupClickScroll();
    updateActiveMenu();

    // Actualizar continuamente al hacer scroll
    $(document).on("scroll", updateActiveMenu);
});
