$(document).ready(function(){
    $('.btn-burg').on('click', function(){
        $('.nav-header ul').slideToggle(500);
    });
    $(window).resize(function(){
        if ($(window).width()>768){
            $('.nav-header ul').removeAttr('style');
        }
    })
    
    //Вешаем события клик на стрелки (навигации)
    $('.arrow').on('click', 'a', function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
       
    });
})




$('.btn-a-nav').on('click', function(e) {
    e.preventDefault(); //Если будет вызван данный метод, то действие события по умолчанию не будет выполнено
    $('.btn-a-nav').removeClass('active');
    $(this).addClass('active');
})

$('.btn-prev-offter').on('click', function(e) {
    e.preventDefault(); //Если будет вызван данный метод, то действие события по умолчанию не будет выполнено
    var src = $(this).attr('data-img');
    
    $('#img-1').attr('src', 'img/icons/clients-NOactive.png');
    $('#img-2').attr('src', 'img/icons/braiding-NOactive.png');
    $('#img-3').attr('src', 'img/icons/Marketing-NOactive.png');
    $('#img-4').attr('src', 'img/icons/ADV-NOactive.png');
    
    
    $(this).attr('src', src);
})