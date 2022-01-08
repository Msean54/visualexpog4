$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').addClass("show"); 
        }
    });
    $('#comment').click(function(){
        var input = $('#input').val();
        $('.box').append(input + '<br>');
        $('input').val('');
        $('.box-container').slideDown();
    });
    $('#cancel').click(function(){
        $('input').val('');
    });
    $('#delete').click(function(){
        $('.box').text('');
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
        var typed = new Typed(".typing",{
            strings: ["Responsible", "Creative", "Hardworking", "Organized", "Optimistic"],
            typeSpeed: 100, 
            backSpeed: 60,
            loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        aitoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
