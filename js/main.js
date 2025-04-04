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
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
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





// -------------------------------------------------------------------- SCRIPT DEL APARTADO BLOG --------------------------------------------------------------------

// Simulación de los artículos del blog
const blogData = [
    { img: 'img/blog-1.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-1.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-1.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-1.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-1.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-1.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },

    { img: 'img/blog-2.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-2.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-2.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-2.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-2.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-2.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },

    { img: 'img/blog-3.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-3.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-3.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-3.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-3.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' },
    { img: 'img/blog-3.jpg', title: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.' }
    // Aquí puedes agregar más artículos
];

const itemsPerPage = 6; // Número de artículos por página
let currentPage = 1;

// Función para cargar los artículos del blog para la página actual
function loadBlogPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    const currentPageData = blogData.slice(start, end);

    // Cargar los artículos en la página
    const blogContainer = document.getElementById('blog-items');
    blogContainer.innerHTML = ''; // Limpiar la página

    currentPageData.forEach(item => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('col-lg-4', 'col-md-6', 'wow', 'fadeInUp');
        blogItem.innerHTML = `
            <div class="blog-item">
                <div class="blog-img">
                    <img src="${item.img}" alt="Image">
                </div>
                <div class="blog-title">
                    <h3>${item.title}</h3>
                    <a class="btn" href="#">+</a>
                </div>
                <div class="blog-meta">
                    <p>By<a href="#">Admin</a></p>
                    <p>In<a href="#">Construction</a></p>
                </div>
                <div class="blog-text">
                    <p>${item.description}</p>
                </div>
            </div>
        `;
        blogContainer.appendChild(blogItem);
    });

    // Actualizar la paginación
    updatePagination(page);
}

// Función para actualizar los controles de paginación
function updatePagination(page) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Limpiar la paginación

    const totalPages = Math.ceil(blogData.length / itemsPerPage);

    // Botón "Previous"
    if (page > 1) {
        pagination.innerHTML += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(${page - 1})">Anterior</a></li>`;
    } else {
        pagination.innerHTML += `<li class="page-item disabled"><a class="page-link" href="#">Anterior</a></li>`;
    }

    // Páginas
    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
            <li class="page-item ${i === page ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }

    // Botón "Next"
    if (page < totalPages) {
        pagination.innerHTML += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(${page + 1})">Siguiente</a></li>`;
    } else {
        pagination.innerHTML += `<li class="page-item disabled"><a class="page-link" href="#">Siguiente</a></li>`;
    }
}

// Función para cambiar de página
function changePage(page) {
    currentPage = page;
    loadBlogPage(currentPage);
}

// Inicializar la página con los primeros artículos
window.onload = () => loadBlogPage(currentPage);


//--------------------------------------------------------------------  END SCRIPT DEL APARTADO BLOG --------------------------------------------------------------------