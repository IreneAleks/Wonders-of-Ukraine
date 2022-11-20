$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

        // Fixed header

        checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH -50) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



        // Smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");    
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset -80 }, 600);
    });


        // Menu nav toggle

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    // Arrow up

    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
      
        if (scrolled > 500) {
          $('#arrow-up').addClass('active');
        } else {
          $('#arrow-up').removeClass('active');
        }
      });
      
      $('#arrow-up').click(function() {
        $('body,html').animate({scrollTop: 0}, 800)
      });



});
