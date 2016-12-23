$(document).ready(function() {
    $(window).scroll(function() {
        $('#banner:in-viewport(150)').run(function() {
            $(".title").addClass("animated fadeInUp")
            setTimeout(function() {
                $("#one").addClass("animated fadeInUp");
            }, 300);
            setTimeout(function() {
                $("#two").addClass("animated fadeInUp");
            }, 500);
            setTimeout(function() {
                $("#three").addClass("animated fadeInUp");
            }, 700);

        });
        $('#footer:in-viewport(450)').run(function() {
            $(".tweet").addClass("animated fadeInUp");
            $(".post").addClass("animated fadeInUp");
            $(".image2").addClass("animated fadeInUp");
        });
    });

    (function() {
        var qs, js, q, s, d = document,
            gi = d.getElementById,
            ce = d.createElement,
            gt = d.getElementsByTagName,
            id = 'typef_orm',
            b = 'https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
        if (!gi.call(d, id)) {
            js = ce.call(d, 'script');
            js.id = id;
            js.src = b + 'share.js';
            q = gt.call(d, 'script')[0];
            q.parentNode.insertBefore(js, q)
        }
        id = id + '_';
        if (!gi.call(d, id)) {
            qs = ce.call(d, 'link');
            qs.rel = 'stylesheet';
            qs.id = id;
            qs.href = b + 'share-button.css';
            s = gt.call(d, 'head')[0];
            s.appendChild(qs, s)
        }
    })()




    var $carousel = $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
    });


    var $carousel1 = $(".modal").find('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
    });


    $('.row').on('click', '.pix', function() {
        var index = $(this).index();
        $carousel1.flickity('select', index);
    });

    $(".close").click(function() {
        $(".modal").css("display", "none");
        $(".modal1").css("display", "none");
        $("body").css("overflow", "auto");
    });

    $(".image2").click(function() {
        $(".modal").css("display", "block");
        $(".modal").css("z-index", "1");
        $("body").css("overflow", "hidden");
        $(".modal").addClass("animated fadeIn");
        var index = $(this).index();
    });

    $(".fa-envelope-o").click(function() {
        $(".modal1").css("display", "block");
        $(".modal1").css("z-index", "1");
        $("body").css("overflow", "hidden");
        $(".modal1").addClass("animated fadeIn");
        setTimeout(function() {
            $("#form-div").addClass("animated fadeIn");
        }, 150);

    });


    $("#apply").click(function() {
        setTimeout(function() {
            $(".application").addTemporaryClass("orange", 550);
        }, 750);

    });


    $("#pics").click(function() {
        setTimeout(function() {
            $(".pictures").addTemporaryClass("orange", 550);
        }, 750);

    });


    $("#press").click(function() {
        setTimeout(function() {
            $(".news").addTemporaryClass("orange", 550);
        }, 750);

    });

    $(function() {
        $("#logo").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 0,
            backSpeed: 0,
            startDelay: 2200
        });



    });



    // setTimeout(function() {
    //     $(".fa-angle-down").addClass("animated fadeInUp");
    // }, 7000);
    setTimeout(function() {
        $(".left").addClass("animated fadeInLeft");
    }, 7100);
    setTimeout(function() {
        $(".right").addClass("animated fadeInRight");
    }, 7100);
    setTimeout(function() {
        $(".center").addClass("animated fadeInDown");
    }, 7100);

});



(function($) {

    $.fn.extend({

        addTemporaryClass: function(className, duration) {
            var elements = this;
            setTimeout(function() {
                elements.removeClass(className);
            }, duration);

            return this.each(function() {
                $(this).addClass(className);
            });
        }
    });

})(jQuery);