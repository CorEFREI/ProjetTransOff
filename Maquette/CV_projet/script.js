// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});

// TYPED
var typed = new Typed('.typed', {
  strings: ["Bonjour à tous et à toutes, je me présente je m'appelle Ragnar Lothbrock", 
            "Volontaire et travailleur, doté d’une réelle faculté d’adaptation et d’un bon sens relationnel, je suis de nature patient, sérieux, organisé et responsable. De plus, aimant le travail en équipe, je suis capable de m’y intégrer afin d’y travailler de façon efficace et dans la bonne humeur."],
  typeSpeed: 20,
});
  
// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

//AOS
AOS.init();