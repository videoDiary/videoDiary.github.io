$(document).ready(function () {
    
    /* Navigation Scroll */
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  })
  
  $('.js--contact').click(function(){
      $(this).css('color','#000');
  })
  
  $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
        /*Sticky Nav*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '160px;'
    });
    
        /* Waypoint Animations on Scroll*/
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    })
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset: '50%'
    })
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset: '50%'
    })
    
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    },{
        offset: '50%'
    })
    
     /* Mobile Navigation*/
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon');
        } else{
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon');
        }
        
    })
    
});