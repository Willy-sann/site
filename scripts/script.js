

// Obtener referencia al contenedor de héroes
// Definir el contenedor
let contenedor = document.getElementById("listaHeroes");

// Cargar el JSON de héroes
fetch('heroes.json')
  .then(response => response.json())
  .then(data => {
    // Iterar sobre los héroes en el JSON
    data.heroes.forEach(hero => {
      // Crear elementos para el héroe
      let img = document.createElement("img");
      img.src = `imagenes/${hero.name}.webp`;
      
      let tituloDiv = document.createElement("p");
      tituloDiv.textContent = hero.name;

      let rol = document.createElement("p");
      rol.textContent = hero.rol;
      rol.style.fontSize = "0.9rem";

      let div = document.createElement("div");
      div.className = "character";
      div.id = hero.rol.toLowerCase();

      // Agregar la imagen y el título al div del héroe
      div.appendChild(img);
      div.appendChild(tituloDiv);
      div.appendChild(rol);

      // Agregar el div del héroe al contenedor
      contenedor.appendChild(div);

      // Agregar evento de clic al div del héroe
      div.addEventListener('click', () => {
        // Redireccionar a la página de detalles del héroe con el nombre como parámetro
        window.location.href = `hero-details.html?name=${hero.name}`;
      });
    });
  })
  .catch(error => console.error('Error cargando datos:', error));






function filtrarPorRol(rol) {
    // Obtener todos los elementos de héroe
    let elementosHeroes = document.querySelectorAll('.character');

    // Iterar sobre los elementos de héroe
    elementosHeroes.forEach(function(elementoHeroe) {
        // Mostrar u ocultar según el rol
        if (elementoHeroe.id === rol.toLowerCase()) {
            elementoHeroe.style.display = 'block';
        } else {
            elementoHeroe.style.display = 'none';
        }
    });
}

document.getElementById('filtroTanque').addEventListener('click', function() {
    filtrarPorRol('tanque');
});

document.getElementById('filtroMagia').addEventListener('click', function() {
    filtrarPorRol('mago');
});

document.getElementById('filtroPeleador').addEventListener('click', function() {
    filtrarPorRol('combatiente');
});

document.getElementById('filtroTirador').addEventListener('click', function() {
    filtrarPorRol('tirador');
});

document.getElementById('filtroAsesino').addEventListener('click', function() {
    filtrarPorRol('asesino');
});

document.getElementById('filtroApoyo').addEventListener('click', function() {
    filtrarPorRol('apoyo');
});




