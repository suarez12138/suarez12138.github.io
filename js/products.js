$(function() {
    $(".star_1").hover(function () {
        $(this).toggleClass("star_1-fade").children().children().last().toggleClass("shadow-line line-in");
    });
    $(".first-img,.box-dy,.box-jdej,.box-gpzej,.box-lyej").hover(function () {
        $(this).toggleClass("star_1-fade").children().last().toggleClass("shadow-line line-in");
    });
    $(".box-sc,.box-usb").hover(function () {
        $(this).toggleClass("star_1-fade").children().last().toggleClass("shadow-lineW line-inw");
    });
    $(".box-fq,.box-gw,.box-hdfk,.box-gj").hover(function () {
        $(this).toggleClass("star_1-fade").children().last().toggleClass("shadow-line line-inz");
    });
    $(".asd").click(function () {
        if ($(this).className != "active") {
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
        }
    });


//滚动动画
    $(window).scroll(function () {
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;;
            if (scrollT > 340) {
                $(".a1").addClass("animated bounceInRight opt_show").removeClass("opt_hide");
                $(".a2").addClass("animated bounceInDown opt_show").removeClass("opt_hide");
                $(".a3").addClass("animated bounceInUp opt_show").removeClass("opt_hide");
                $(".a4").addClass("animated bounceInLeft opt_show").removeClass("opt_hide");
            }
        }
    );
    $(window).scroll(function () {
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;;
            if (scrollT > 900) {
                $(".b1").addClass("animated bounceInRight opt_show").removeClass("opt_hide");
                $(".b2").addClass("animated bounceInDown opt_show").removeClass("opt_hide");
                $(".b3").addClass("animated bounceInUp opt_show").removeClass("opt_hide");
                $(".b4").addClass("animated bounceInLeft opt_show").removeClass("opt_hide");
                $(".b5").addClass("animated bounceInRight opt_show").removeClass("opt_hide");
                $(".b6").addClass("animated bounceInDown opt_show").removeClass("opt_hide");
                $(".b7").addClass("animated bounceInUp opt_show").removeClass("opt_hide");
                $(".b8").addClass("animated bounceInLeft opt_show").removeClass("opt_hide");
            }
        }
    );
    $(window).scroll(function () {
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;;
            if (scrollT > 2050) {
                $(".c1").addClass("animated bounceInRight opt_show").removeClass("opt_hide");
                $(".c2").addClass("animated bounceInDown opt_show").removeClass("opt_hide");
                $(".c3").addClass("animated bounceInUp opt_show").removeClass("opt_hide");
                $(".c4").addClass("animated bounceInLeft opt_show").removeClass("opt_hide");
            }
        }
    );
    $(window).scroll(function () {
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;;
            if (scrollT > 2050) {
                $(".d1").addClass("animated fadeIn opt_show").removeClass("opt_hide");
                $(".d2").addClass("animated fadeIn opt_show").removeClass("opt_hide");
            }
        }
    );
    $(window).scroll(function () {
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;;
            if (scrollT > 2300) {
                $(".f1,.f2,.f3,.f4,.f5").addClass("animated zoomInUp opt_show").removeClass("opt_hide");
            }
        }
    );
});
