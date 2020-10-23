$(".header__btn").click(function(){
    $(".header__btn").toggleClass("is-active");
});

$(".header__btn").click(function(){
    $(".hero__box").toggleClass("box-under");
});

$('.header__btn').on('click', function() {
    $('.header__nav').slideToggle();
});