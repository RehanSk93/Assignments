$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if(scroll < 20){
        $('#sticky-header').removeClass('sticky');
    }else{
        $('#sticky-header').addClass('sticky');
    }
});