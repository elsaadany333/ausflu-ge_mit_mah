/*----------------------------------------------
    Template Author
------------------------------------------------

    @author 	: initTheme
    @url 	    : initTheme

------------------------------------------------
    E n d 
------------------------------------------------*/


    /*----------------------------------------------
        Mobile Menu Active 
    ------------------------------------------------*/
    $( window ).load( active );
    $( window ).resize( active );
    $('#mobile-menu a').click(function(event) {
        event.preventDefault();
        
        $('#nav').slideToggle();    
        $('#mobile-menu').toggleClass('active');
    });

    /*----------------------------------------------
        Sidebar Menu Active current Menu
    ------------------------------------------------*/
    $('nav ul li a[href*="#"]').click(function(event) {
        event.preventDefault();
        var target = this.hash;
        $target = $(target);
                        
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 'slow', function () {
            window.location.hash = target;
        });
        
        $('nav ul li a[href*="#"]').removeClass('active');
    });

    var id = window.location.href.split("#!")[1];
    if ( id ) {
        $('nav ul li a').removeClass('active');
        $('nav ul li a[href*="'+ '#' + id +'"]').addClass('active');
    }

    function active() {
        var viewportWidth = $( window ).width();
        if ( viewportWidth > 1024 ) {
            $( document ).on('scroll resize', function() {
                $('.section').each(function() {
                    var tempScrollTop = $(window).scrollTop();

                    var id = window.location.href.split("!")[1];
                        
                    if ( $(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 10 ) {
                        location.hash = '#!' + $(this).attr('id');
                    }
            
                    $('nav ul li a[href*="#"]').removeClass('active');
                    $('nav ul li a[href*="'+ '#' + id +'"]').addClass('active');
            
                    $(window).scrollTop(tempScrollTop);
                });
            });
        }
    }  

