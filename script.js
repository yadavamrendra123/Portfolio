$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
// scroll-up button show/hide script
if(this.scrollY > 500){
    $('.scroll-up-btn').addClass("show");
}else{
    $('.scroll-up-btn').removeClass("show");
}
    });

    // toogle menu navbar script
    $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
    });


    //slide up script

    $('.scroll-up-button').click(function(){
        $('html').animate({scrollTop:0});

        $('html').css("scrollBehavior", "auto");

    });


     // typing text animation script
     var typed = new Typed(".typing", {
        strings: [ " Web Developer", "Programmer","Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: [ " Web Developer", "Programmer","Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
})