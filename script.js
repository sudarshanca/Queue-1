$(document).ready(function () {
  try {
    $('.discover-box').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 4,
      arrows: true,
      prevArrow: '<button class="sk-button sk-round arrow-prev"></button>',
      nextArrow: '<button class="sk-button sk-round arrow-next"><img src="img/Arrow.svg" alt=""></button>',
      dots: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
  catch (ex) {
    console.log("Error initiating carousel" + ex)
  }
  document.getElementById("slider-main").style.height = "auto"
});


//header sidebar
function headerSidebar() {
  let headerSidebarc = document.getElementById('header-sidebar')
  let backgroundSidebar = document.getElementById('background-sidebar')
  headerSidebarc.classList.toggle('show-header-sidebar');
  backgroundSidebar.classList.toggle('show-background-sidebar');
}

