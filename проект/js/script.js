$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function(){
    $('.span_1').click(function(event){
        $('.span_1').toggleClass('active');
        $('.gramata_1').toggleClass('active');
        $('.footer_main').toggleClass('active');
        $('.bloсk_3').toggleClass('none');
        $('.bloсk_2').toggleClass('none');
    });
});
$(document).ready(function(){
    $('.span_2').click(function(event){
        $('.span_2').toggleClass('active');
        $('.gramata_2').toggleClass('active');
        $('.footer_main').toggleClass('active');
        $('.bloсk_1').toggleClass('none');
        $('.bloсk_3').toggleClass('none');
    });
});
$(document).ready(function(){
    $('.span_3').click(function(event){
        $('.span_3').toggleClass('active');
        $('.gramata_3').toggleClass('active');
        $('.footer_main').toggleClass('active');
        $('.bloсk_1').toggleClass('none');
        $('.bloсk_2').toggleClass('none');
    });
});

$(document).ready(function(){
    $('.header_forma_regis').click(function(event){
        $('.model').toggleClass('active');
        $('.header_forma_regis').toggleClass('active');
    });
});
// let header__burger = document.querySelector('.header__burger');
// let header_menu = document.querySelector('.header__menu');
// let back = document.querySelector('body');
// let header__list = document.querySelector('.header__list');

// header__burger.onclick = function(){
//     header__burger.classList.toggle('active');
//     header_menu.classList.toggle('active');
//     back.classList.toggle('lock');
// }

// header__list.onclick = function () {
//     header__list.classList.remove('active');
//     back.classList.toggle('lock');
// }