;(function($){
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
            autoplaySpeed: 3000
        });
    }
})(jQuery);