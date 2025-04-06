(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    

    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
    
    
    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);










// CARROUSEL PROYECTOS

const proyectos = [
    {
    titulo: "Proyecto A",
    descripcion: "Este es el Proyecto A. Tiene muchas funcionalidades bacanes.",
    fecha:"25/20/2004",
    imagenPrincipal: "img/portfolio-1.jpg",
    imagenes: [
        "img/portfolio-1.jpg",
        "img/portfolio-2.jpg",
        "img/portfolio-3.jpg"
    ]
    },

    {
    titulo: "Proyecto B",
    descripcion: "Este es el Proyecto B. También está bacan.",
    fecha:"25/20/2004",
    imagenPrincipal: "img/portfolio-2.jpg",
    imagenes: [
        "img/portfolio-1.jpg",
        "img/portfolio-2.jpg",
        "img/portfolio-3.jpg"
    ]
    },

    {
    titulo: "Proyecto C",
    descripcion: "Este es el Proyecto C. Otro de mis favoritos.",
    fecha:"25/20/2004",
    imagenPrincipal: "img/portfolio-3.jpg",
    imagenes: [
        "img/portfolio-1.jpg",
        "img/portfolio-2.jpg",
        "img/portfolio-3.jpg"
    ]
    },

    {
        titulo: "Proyecto D",
        descripcion: "Este es el Proyecto A. Tiene muchas funcionalidades bacanes.",
        fecha:"25/20/2004",
        imagenPrincipal: "img/portfolio-1.jpg",
        imagenes: [
            "img/portfolio-1.jpg",
            "img/portfolio-2.jpg",
            "img/portfolio-3.jpg"
        ]
        },
        
        {
        titulo: "Proyecto E",
        descripcion: "Este es el Proyecto B. También está bacan.",
        fecha:"25/20/2004",
        imagenPrincipal: "img/portfolio-2.jpg",
        imagenes: [
            "img/portfolio-1.jpg",
            "img/portfolio-2.jpg",
            "img/portfolio-3.jpg"
        ]
        },
    
        {
        titulo: "Proyecto F",
        descripcion: "Este es el Proyecto C. Otro de mis favoritos.",
        fecha:"25/20/2004",
        imagenPrincipal: "img/portfolio-3.jpg",
        imagenes: [
            "img/portfolio-1.jpg",
            "img/portfolio-2.jpg",
            "img/portfolio-3.jpg"
        ]
        }

];

const contenedor = document.getElementById("proyectos-container");

    proyectos.forEach((proyecto, index) => {
      const div = document.createElement("div");
      div.className = "col-md-4 mb-4";
      div.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${proyecto.imagenPrincipal}" class="card-img-top" alt="${proyecto.titulo}" style="cursor:pointer;" onclick="mostrarModal(${index})">
          <div class="card-body">
            <h5 class="card-title">${proyecto.titulo}</h5>
          </div>
        </div>
      `;
      contenedor.appendChild(div);
    });

    function mostrarModal(index) {
      const proyecto = proyectos[index];

      // Set titulo y descripcion
      document.getElementById("modalTitulo").innerText = proyecto.titulo;
      document.getElementById("modalDescripcion").innerText = proyecto.descripcion;
      document.getElementById("modalFecha").innerText = proyecto.fecha;

      // Carousel de imágenes
      const imagenesDiv = document.getElementById("modalImagenes");
      imagenesDiv.innerHTML = ""; // Limpiar contenido previo

      // Miniaturas
      const miniaturasDiv = document.getElementById("modalMiniaturas");
      miniaturasDiv.innerHTML = ""; // Limpiar miniaturas previas

      proyecto.imagenes.forEach((img, idx) => {
        // Agregar al carousel
        const item = document.createElement("div");
        item.className = `carousel-item ${idx === 0 ? 'active' : ''}`;
        item.innerHTML = `<img src="${img}" class="d-block w-100" alt="Imagen del Proyecto">`;
        imagenesDiv.appendChild(item);

        // Agregar miniatura
        const thumbnail = document.createElement("img");
        thumbnail.src = img;
        thumbnail.className = "carousel-thumbnail";
        thumbnail.onclick = () => selectImage(idx);
        miniaturasDiv.appendChild(thumbnail);
      });

      // Mostrar el modal
      const modal = new bootstrap.Modal(document.getElementById('modalProyecto'));
      modal.show();
    }

    // Cambiar imagen en el carousel al hacer clic en la miniatura
    function selectImage(index) {
      const carousel = document.getElementById("carouselProyecto");
      const carouselInstance = bootstrap.Carousel.getInstance(carousel);
      carouselInstance.to(index);
    }



