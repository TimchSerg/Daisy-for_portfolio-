$(document).ready(function(){
    $('.btn-burg').on('click', function(){
        $('.nav-header ul').slideToggle(500);
    });
    $(window).resize(function(){
        if ($(window).width()>768){
            $('.nav-header ul').removeAttr('style');
        }
    })
})




$('.btn-a-nav').on('click', function(e) {
    e.preventDefault(); //Если будет вызван данный метод, то действие события по умолчанию не будет выполнено
    $('.btn-a-nav').removeClass('active');
    $(this).addClass('active');
})