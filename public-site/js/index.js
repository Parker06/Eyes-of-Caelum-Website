const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarTabs = document.getElementsByClassName('navbar-tabs')[0];

toggleButton.addEventListener('click', () =>{
  navbarTabs.classList.toggle('active');
})

//First Slider

$('.slider-one')
.not(".slice-initialized")
.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
});



