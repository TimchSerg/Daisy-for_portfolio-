$('.nav-header ul li a').on('click', function(e) {
    e.preventDefault(); //Если будет вызван данный метод, то действие события по умолчанию не будет выполнено
    $('.nav-header ul li a').removeClass('active');
    $(this).addClass('active');
})