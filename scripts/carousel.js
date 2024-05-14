$(document).ready(function(){
  $.getJSON('heroes.json', function(data) {
    var heroes = data.heroes;
    var carouselContent = '';

    heroes.forEach(function(hero) {
      var skinsHero = hero.skinsHero;
      Object.keys(skinsHero).forEach(function(key) {
        var skin = skinsHero[key];
        if (skin.image !== "" && skin.image !== "url") {
          carouselContent += '<div><img src="' + skin.image + '" alt="' + key + '"><p>' + hero.name + ' - ' + key + '</p><p>' + skin.description + '</p></div>';
        }
      });
    });

    $('.carousel').append(carouselContent);

    $('.carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
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
  });
});
