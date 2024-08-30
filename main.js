$(document).ready(function(){
    //animation
    anime({
        targets:'.text',
        opacity:[0,1],
        duration:2000,
        delay:1000,
        easing:'easeInOutQuad',
    });
    anime({
        targets:'.blob1',
        translateY:[-450,0],
        duration:3000,
    });
    anime({
        targets:'.blob2',
        translateY:[450,0],
        duration:3000,
        delay:100,
    });
    anime({
        targets:'.overlay',
        width:0,
        duration:2000,
        easing:'easeInOutQuad',
    });
    //slider
    $(".slider").slick({
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        vertical:true,
        verticalSwiping:true,
        autoplay:true,
        autoplaySpeed:2000,
        speed:2000,
        arrows:false,
});
});


  
//menu on scroll

let header = document.querySelector('.header');
window.onscroll=function(){
    if (this.scrollY>=100){
        header.classList.add('active');
    }
    else
    header.classList.remove('active');
}

