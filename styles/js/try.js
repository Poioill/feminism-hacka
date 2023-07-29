$(document).ready(function(){
    $('.more__slider').slick({
        slidesToShow: 3,
        appendArrows: $('.more__click'),
        infinite: true,
    })
    $('.articles-list__slider').slick({
        slidesToShow: 5,
        appendArrows: $('.art-click'),
        infinite: true,
    })
    $('.art__slider').slick({
        slidesToShow: 1,
        infinite: true,
        arrows:true,
    })
});