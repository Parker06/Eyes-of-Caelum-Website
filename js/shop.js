$('.slider-two')
.not(".slice-initialized")
.slick({
    prevArrow: ".site-slider-two .prev",
    nextArrow: ".site-slider-two .next",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
});