const urlParams = new URLSearchParams(window.location.search);
const heroName = urlParams.get('name');

// Cargar datos del JSON
fetch('site/heroes.json')
  .then(response => response.json())
  .then(data => {
    const hero = data.heroes.find(hero => hero.name === heroName);
    if (hero) {

      let counterContainer = document.getElementById("counters")
      let countersData = hero.counter;
      counterContainer.textContent = countersData;

      //cambiar el script de iiner para que sea 100%dinamico el tema de hero.buildHero

      // El héroe se encontró, entonces puedes mostrar los detalles
      const heroDetails = document.getElementById('hero-details');
      const detailsHTML = `
    <link rel="shortcut icon" href="${hero.abilities.passiveIMG}"/>

    <title>Guia de ${hero.name}</title>


    <div class="layout" style="background-image: url('imagenes/${hero.name}.webp');">
        
        <div class="estats">
        <h1>${hero.name}</h1>
        <p class="lore">${hero.description}</p>
        </div>
    </div>

    <center>
<nav class="dropdown">

  <label for="touch"><span>Historia completa</span></label>               
  <input type="checkbox" id="touch"> 

  <ul class="slide">
    <p>${hero.lore}</p>
  </ul>

</nav> 
</center>

<h3 class="hero-abilities-title">Habilidades</h3>
<center class="ability-container">
<div class="habilidad">
      <div class="texto-habilidad"> 
      <img src="${hero.abilities.passiveIMG}" width="100px" height="100px">
      <div>
      <h1 class="hero-ability"><strong>Pasiva:</strong> ${hero.abilities.passive}</h1>
      <p class="ability-description">${hero.abilities.passiveDescription}<p>
      </div>
      </div>
<video src="${hero.abilities.passiveVideo}" muted autoplay loop preload="auto" width="700px" alt="video explicativo"></video>
</div>

<div class="habilidad">
<div class="texto-habilidad"> 
<img src="${hero.abilities.skill1IMG}" width="100px" height="100px">
<div>
  <h1 class="hero-ability"><strong>Habilidad 1:</strong> ${hero.abilities.skill1}</h1>
<p class="ability-description">${hero.abilities.skill1Description}<p>
</div>
</div>
<video src="${hero.abilities.skill1Video}" muted autoplay loop width="700px" preload="auto" alt="video explicativo"></video>

</div>  
<div class="habilidad">  
<div class="texto-habilidad"> 
<img src="${hero.abilities.skill2IMG}" width="100px" height="100px">
<div>
<h1 class="hero-ability"><strong>Habilidad 2:</strong> ${hero.abilities.skill2}</h1>
<p class="ability-description">${hero.abilities.skill2Description}<p>
</div>
</div>
<video src="${hero.abilities.skill2Video}" muted autoplay loop preload="auto" width="700px" alt="video explicativo"></video>

</div>

<div class="habilidad">
<div class="texto-habilidad">
<img src="${hero.abilities.ultimateIMG}" width="100px" height="100px">
<div>
<h1 class="hero-ability"><strong>Ultimate:</strong> ${hero.abilities.ultimate}</h1>
<p class="ability-description">${hero.abilities.ultimateDescription}<p>
</div>
</div>
<video src="${hero.abilities.ultimateVideo}" muted autoplay loop preload="auto" width="700px" alt="video explicativo"></video>
</div>
</center>

<br>

<h3 class="hero-abilities-title">equipamientos</h3>

<section class="build-hero">
<center>

<div class="build">

<h3 class="build-name">${hero.buildHero.build1.buildName}</h3>

<div class="hero-build-table">
<div class="hero-item-table">
<img src="${hero.buildHero.build1.item1}" alt="" class="item-img">
<img src="${hero.buildHero.build1.item2}" alt="" class="item-img">
<img src="${hero.buildHero.build1.item3}" alt="" class="item-img">
<img src="${hero.buildHero.build1.item4}" alt="" class="item-img">
<img src="${hero.buildHero.build1.item5}" alt="" class="item-img">
<img src="${hero.buildHero.build1.item6}" alt="" class="item-img">
</div>
<div class="hero-emblem-table">
<img src="${hero.buildHero.build1.emblem}" alt="" class="emblem-img">
<img src="${hero.buildHero.build1.talent1}" alt="" class="emblem-img">
<img src="${hero.buildHero.build1.talent2}" alt="" class="emblem-img">
<img src="${hero.buildHero.build1.talent3}" alt="" class="emblem-img">
</div>
<div class="hero-spell-table">
<img src="${hero.buildHero.build1.spell}" alt="" class="spell-img">
</div>
</div>

<h3 class="build-description">${hero.buildHero.build1.buildDescription}</h3>
</div>
</div>

<div class="build">

<h3 class="build-name">${hero.buildHero.build2.buildName}</h3>

<div class="hero-build-table">
<div class="hero-item-table">
<img src="${hero.buildHero.build2.item1}" alt="" class="item-img">
<img src="${hero.buildHero.build2.item2}" alt="" class="item-img">
<img src="${hero.buildHero.build2.item3}" alt="" class="item-img">
<img src="${hero.buildHero.build2.item4}" alt="" class="item-img">
<img src="${hero.buildHero.build2.item5}" alt="" class="item-img">
<img src="${hero.buildHero.build2.item6}" alt="" class="item-img">
</div>
<div class="hero-emblem-table">
<img src="${hero.buildHero.build2.emblem}" alt="" class="emblem-img">
<img src="${hero.buildHero.build2.talent1}" alt="" class="emblem-img">
<img src="${hero.buildHero.build2.talent2}" alt="" class="emblem-img">
<img src="${hero.buildHero.build2.talent3}" alt="" class="emblem-img">
</div>
<div class="hero-spell-table">
<img src="${hero.buildHero.build2.spell}" alt="" class="spell-img">
</div>
</div>

<h3 class="build-description">${hero.buildHero.build2.buildDescription}</h3>
</div>
</div>

<div class="build">

<h3 class="build-name">${hero.buildHero.build3.buildName}</h3>

<div class="hero-build-table">
<div class="hero-item-table">
<img src="${hero.buildHero.build3.item1}" alt="" class="item-img">
<img src="${hero.buildHero.build3.item2}" alt="" class="item-img">
<img src="${hero.buildHero.build3.item3}" alt="" class="item-img">
<img src="${hero.buildHero.build3.item4}" alt="" class="item-img">
<img src="${hero.buildHero.build3.item5}" alt="" class="item-img">
<img src="${hero.buildHero.build3.item6}" alt="" class="item-img">
</div>
<div class="hero-emblem-table">
<img src="${hero.buildHero.build3.emblem}" alt="" class="emblem-img">
<img src="${hero.buildHero.build3.talent1}" alt="" class="emblem-img">
<img src="${hero.buildHero.build3.talent2}" alt="" class="emblem-img">
<img src="${hero.buildHero.build3.talent3}" alt="" class="emblem-img">
</div>
<div class="hero-spell-table">
<img src="${hero.buildHero.build3.spell}" alt="" class="spell-img">
</div>
</div>

<h3 class="build-description">${hero.buildHero.build3.buildDescription}</h3>
</div>
</div>
</center>
</section>


</div>
      `;
      
      heroDetails.innerHTML = detailsHTML;

      //gameplays script

     const gameplayHero = hero.gameplayHero;
     let gameplayContent = '';
     Object.keys(gameplayHero).forEach(key => {
       const play = gameplayHero[key];
       if (play.video && play.video !== "url") {
         gameplayContent += `<div><iframe width="560" height="315" src="${play.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <p class="hero-name">${key}</p><p class="hero-description">${play.explicacion}</p></div>`;
       }

       //<iframe width="560" height="315" src="https://www.youtube.com/embed/mSWZUwh1qL4?si=hLS0YiSHaOzyjqbW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 });
     $('.gameplay').append(gameplayContent);

     // Inicializar Slick Carousel
    $('.gameplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 0,
      arrows: true,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
          arrows: false,
          }
        }
      ]
    });

    //section skins
     const skinsHero = hero.skinsHero;
     let carouselContent = '';
     Object.keys(skinsHero).forEach(key => {
       const skin = skinsHero[key];
       if (skin.image && skin.image !== "url") {
         carouselContent += `<div><img src="${skin.image}" alt="${key}"><p class="hero-name">${hero.name} - ${key}</p><p class="hero-description">${skin.description}</p></div>`;
       }
     });
     $('.carousel').append(carouselContent);

     // Inicializar Slick Carousel
    $('.carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: true,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
          arrows: false,
          }
        }
      ]
    });


    heroDetails.innerHTML = detailsHTML;
     // Crear el carrusel de imágenes para los combos del héroe seleccionado
     const CombosHero = hero.combos;
     let combosContent = '';
     
     Object.keys(CombosHero).forEach(key => {
       const combo = CombosHero[key];
       if (combo.combination && combo.combination !== "url") {
        
         combosContent += `
        <div>

  <video src="${combo.comboVideo}" muted autoplay loop preload="auto" width="700px" alt="video explicativo"></video>

  <h1 class="build-name">${key}: ${combo.combination}</h1>

  <p>${combo.comboDescription}</p>
  
  <h6 class="disclaimer">¡video hecho en partidas vs ia, el aplicar este combos en clásicas y/o clasificatorias puede dar resultados diferentes dependiendo del jugador y los enemigos </h6>
  </div>`
      };
    });
    $('.combos').append(combosContent);

     // Inicializar Slick Carousel
    $('.combos').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: true,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
          arrows: false,
          }
        }
      ]
    });

  } else {
     // Manejar el caso donde no se encuentra el héroe
    console.error('Hero not found');
  }

  
}




)
