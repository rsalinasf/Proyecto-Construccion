// CARROUSEL PROYECTOS

const proyectos = [
    {
    titulo: "Proyecto Brisas Santo Domingo",
    descripcion: "Diseño y construcción de una casa ubicada en el Litoral Central, pensada para combinar comodidad, funcionalidad y una conexión armónica con el entorno costero.",
    fecha:"25/20/2004",
    imagenPrincipal: "img/Brisas-Santo-Domingo/1.jpg",
    imagenes: [
        "img/Brisas-Santo-Domingo/1.jpg",
        "img/Brisas-Santo-Domingo/2.jpg",
        "img/Brisas-Santo-Domingo/3.jpg",
        "img/Brisas-Santo-Domingo/4.jpg",
        "img/Brisas-Santo-Domingo/5.jpg",
        "img/Brisas-Santo-Domingo/6.jpg",
        "img/Brisas-Santo-Domingo/7.jpg"
    ]
    },

    {
    titulo: "Proyecto Casa Leyda",
    descripcion: "Este es el Proyecto Casa Leyda.",
    fecha:"25/20/2004",
    imagenPrincipal: "img/Casa-Leyda/1.jpg",
    imagenes: [
        "img/Casa-Leyda/1.jpg",
        "img/Casa-Leyda/2.jpg",
        "img/Casa-Leyda/3.jpg",
        "img/Casa-Leyda/4.jpg"
    ]
    },

    {
    titulo: "Proyecto Interior Santo Domingo",
    descripcion: "Este es el Proyecto Interior Santo Domingo.",
    fecha:"25/20/2004",
    imagenPrincipal: "img/Interior-Santo-Domingo/1.jpg",
    imagenes: [
        "img/Interior-Santo-Domingo/1.jpg",
        "img/Interior-Santo-Domingo/2.jpg",
        "img/Interior-Santo-Domingo/3.jpg",
        "img/Interior-Santo-Domingo/4.jpg"
    ]
    },

    {
        titulo: "Proyecto Interior 2",
        descripcion: "Este es el Proyecto Interior.",
        fecha:"25/20/2004",
        imagenPrincipal: "img/Proyecto-Interior/1.jpg",
        imagenes: [
            "img/Proyecto-Interior/1.jpg",
            "img/Proyecto-Interior/2.jpg",
            "img/Proyecto-Interior/3.jpg",
            "img/Proyecto-Interior/4.jpg"
        ]
        },
        
        {
        titulo: "Proyecto Santo Domingo 1",
        descripcion: "Este es el Proyecto Santo-Domingo 1.",
        fecha:"25/20/2004",
        imagenPrincipal: "img/Santo-Domingo/1.jpg",
        imagenes: [
            "img/Santo-Domingo/1.jpg",
            "img/Santo-Domingo/2.jpg"
        ]
        },
    
        {
        titulo: "Proyecto Santo Domingo 2",
        descripcion: "Este es el Proyecto Santo Domingo 2.",
        fecha:"25/20/2004",
        imagenPrincipal: "img/Santo-Domingo-2/1.jpg",
        imagenes: [
            "img/Santo-Domingo-2/1.jpg",
            "img/Santo-Domingo-2/2.jpg",
            "img/Santo-Domingo-2/3.jpg",
            "img/Santo-Domingo-2/4.jpg",
            "img/Santo-Domingo-2/5.jpg"
        ]
        },

        {
            titulo: "Proyecto Ventanas Panorámicas",
            descripcion: "Este es el Proyecto Ventanas Panorámicas",
            fecha:"25/20/2004",
            imagenPrincipal: "img/Vidrios-Vista-Libre/1.jpg",
            imagenes: [
                "img/Vidrios-Vista-Libre/1.jpg",
                "img/Vidrios-Vista-Libre/2.jpg"
            ]
        },

        {
            titulo: "Proyecto Litoral Central",
            descripcion: "Este es el Proyecto Vidrios Vista Libre",
            fecha:"19/08/2022",
            imagenPrincipal: "img/Proyecto Litoral Central/1.jpg",
            imagenes: [
                "img/Proyecto Litoral Central/1.jpg", 
                "img/Proyecto Litoral Central/2.jpg",
                "img/Proyecto Litoral Central/3.jpg",
                "img/Proyecto Litoral Central/4.jpg",
                "img/Proyecto Litoral Central/5.jpg",
                "img/Proyecto Litoral Central/6.jpg"
            ]
        },

        {
            titulo: "Proyecto Remodelación",
            descripcion: "Este es el Proyecto Vidrios Vista Libre",
            fecha:"25/20/2004",
            imagenPrincipal: "img/Proyecto Remodelación/1.jpg",
            imagenes: [
                "img/Proyecto Remodelación/1.jpg",
                "img/Proyecto Remodelación/2.jpg",
                "img/Proyecto Remodelación/3.jpg"
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
