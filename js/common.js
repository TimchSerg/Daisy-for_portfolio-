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
    
    //Слайдер
    
    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
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



// Слайдер team-info


var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}