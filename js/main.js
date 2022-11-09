$(".owl-carousel").owlCarousel({
    items: 4,
    dots: true, 
    loop:true,
    responsive : {
        0:{
            items:1,
            dots:false
        }, 
        485 :{
            items:2, 
            dots:true
        }, 
        728 :{
            items: 3,
            dots:true
        }, 
        960 :{
            items: 3,
            dots:true
        }, 
        1200 : {
            items: 4,
            dots: true
        }
    }
});


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

