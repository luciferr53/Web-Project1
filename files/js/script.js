$(document).ready(function () {
   /* Sticky-navigation-bar */
    
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    },{
        offset: '8%'    
    });
    
    /* Scrolls on buttons*/
    
    $('.js--scroll-to-features').click(function(){
        
        $('html,body').animate({ scrollTop: $('.js--section-features').offset().top} , 1000)
    });
    
    $('.js--scroll-to-meals').click(function(){
        
        $('html,body').animate({ scrollTop: $('.js--section-meals').offset().top} , 1000)
    });
    
    
    /* navigation bar buttons */
    

    $(function(){
        $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    });
    
    /* animation of nav bar */
    
    $('.js--drop').waypoint(function(direction){
        
        $('js--drop').addClass('animated bounceInDown');
    });
    
    $('.js--small-nav').click(function(){
       var nav = $('.js--main-nav');
        nav.slideToggle(200);
    });
    
    
    
});
    
    