$(document).ready(function() {
    "use strict";

    //show nav link underline 
    $(".nav-link").on("mouseleave", function() {
        $(this).addClass("change")
    });
    $(".nav-link").on("mousemove", function() {
        $(this).removeClass("change")
    });

    // fixed header
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if (scroll > 1) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    });

    //main slider owl
    $(".main-slider-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        items: 1,
        nav: false,
        dots: true,
        rtl: true,
        smartSpeed: 1000,
        // animateOut: "slideOutUp",
        // animateIn: "slideInDown",
        navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            768: {
                items: 1,
                nav: true,
            },

            992: {
                items: 1,
            }
        }
    });

    //kingdomNews owl

    $(".kingdomNews-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 3,
        nav: true,
        dots: false,
        center: true,
        responsiveClass: true,
        rtl: true,
        smartSpeed: 1000,
        margin: 0,
        navText: ["<i class='bi bi-arrow-right'></i>", "<i class='bi bi-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            768: {
                items: 1,
            },

            992: {
                items: 3,
            },

        }
    });
    //clients slider owl
    $(".decisions-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 3,
        nav: true,
        dots: false,
        responsiveClass: true,
        rtl: true,
        smartSpeed: 1000,
        margin: 10,
        navText: ["<i class='bi bi-arrow-right'></i>", "<i class='bi bi-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            768: {
                items: 2,
            },

            992: {
                items: 4,
            }
        }
    });

    $(".media-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 5,
        nav: true,
        dots: false,
        responsiveClass: true,
        rtl: true,
        smartSpeed: 1000,
        margin: 0,
        navText: ["<i class='bi bi-arrow-right'></i>", "<i class='bi bi-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            768: {
                items: 2,
            },

            992: {
                items: 5,
            }
        }
    });
    // media 
    $(".condolences-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 3,
        nav: true,
        dots: false,
        responsiveClass: true,
        rtl: true,
        smartSpeed: 1000,
        margin: 10,
        navText: ["<i class='bi bi-arrow-right'></i>", "<i class='bi bi-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            768: {
                items: 2,
            },

            992: {
                items: 3,
                nav: true
            }
        }
    });
    $('.single-news-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 3,
        nav: true,
        dots: false,
        responsiveClass: true,
        rtl: true,
        smartSpeed: 1000,
        margin: 10,
        navText: ["<i class='bi bi-arrow-right-short'> </i>", "<i class='bi bi-arrow-left-short'> </i>"],
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            768: {
                items: 2,
            },

            992: {
                items: 3,
                nav: true
            }
        }
    })

    //to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 500) {
            $("#toTop").fadeIn(100);
        } else {
            $("#toTop").fadeOut(100);
        }
    });

    $("#toTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 0);
    });

    //validate form
    (function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.querySelectorAll(".needs-validation")

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function(form) {
                form.addEventListener("submit", function(event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    } else {
                        event.preventDefault()
                    }
                    form.classList.add("was-validated")
                }, false)
            })
    })();
  
    //lazyload. images
    // $("img").Lazy({
    //   scrollDirection: "vertical",
    //   effect: "fadeIn",
    //   visibleOnly: false,
    // });

    //counter up
    // $(".counter").counterUp({
    //   delay: 10,
    //   time: 1000,
    //   offset: 50,
    //   beginAt: 100,

    // genertate random code
    
        let numberGen = document.getElementById("code")
        if(numberGen){
            numberGen.innerHTML = '<span>'+Math.random().toString(36).slice(2, 7)+'</span>';
        }
    
});


$(window).on("load", function() {
    $('.loader').delay(500).fadeOut(500);

    //wow animate
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    })
    wow.init();
});