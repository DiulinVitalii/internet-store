"use strict";

;(function ($) {
    var asideToggleBtn = $(".mobile-aside-toggle");
    var body = $("body");
    var closeAside = $(".close-mobile-aside");

    function toggleAside(e) {
        body.toggleClass("show-aside");
    }

    asideToggleBtn.on("click", toggleAside);
    closeAside.on("click", toggleAside);
})(jQuery);
"use strict";

;(function ($) {
    //init ion range slider
    if ($('#price-range').length) {
        $("#price-range").ionRangeSlider({
            type: "double",
            grid: false,
            min: 0,
            max: 1000,
            from: 200,
            to: 800,
            prefix: "$",
            hide_min_max: true
        });
    }
    //init slick slider
    if ($('.trending-products-carousel').length) {
        $('.trending-products-carousel').slick({
            dots: true,
            nextArrow: false,
            prevArrow: false,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            autoplaySpeed: 3000,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    // Init jquery form stayler
    if ($('.select-styler, .input-file-styler').length) {
        $('.select-styler, .input-file-styler').styler();
    }
    //slicknav
    if ($(".header-nav").length) {
        $('.header-nav').slicknav({
            appendTo: '.bottom-header .container',
            label: ''
        });
    }
})(jQuery);