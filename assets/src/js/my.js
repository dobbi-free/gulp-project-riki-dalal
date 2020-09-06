function deviceNav() {
    $('.sendwich').click(function() {
        $(this).find('.sendwich-btn').toggleClass('active');
        $(this).siblings('ul').toggleClass('active');
    });
};



$(document).ready(function() {
    deviceNav();

    $('.about__slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    });

    $('.clients__slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    });

    $('.instagram__slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
    });

    $('.slider-sight').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width = "40px"  height = "40px" >    <path fill-rule="evenodd"  fill="rgb(102, 102, 102)" d="M20.322,40.001 C9.470,40.001 0.641,31.177 0.641,20.331 C0.641,9.484 9.470,0.660 20.322,0.660 C31.173,0.660 40.001,9.484 40.001,20.331 C40.001,31.177 31.173,40.001 20.322,40.001 ZM20.322,1.795 C10.096,1.795 1.778,10.110 1.778,20.331 C1.778,30.550 10.096,38.864 20.322,38.864 C30.546,38.864 38.865,30.550 38.865,20.331 C38.865,10.110 30.546,1.795 20.322,1.795 ZM20.322,28.338 C20.176,28.338 20.031,28.282 19.920,28.171 C19.698,27.949 19.698,27.590 19.920,27.368 L26.393,20.899 L13.637,20.899 C13.323,20.899 13.069,20.645 13.069,20.331 C13.069,20.017 13.323,19.762 13.637,19.762 L26.393,19.762 L19.920,13.294 C19.698,13.071 19.698,12.712 19.920,12.490 C20.142,12.268 20.502,12.268 20.724,12.490 L28.569,20.331 L20.724,28.171 C20.613,28.282 20.467,28.338 20.322,28.338 Z"/> </svg>',
        prevArrow: '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width = "40px"  height = "40px" >    <path fill-rule="evenodd"  fill="rgb(102, 102, 102)" d="M20.322,40.001 C9.470,40.001 0.641,31.177 0.641,20.331 C0.641,9.484 9.470,0.660 20.322,0.660 C31.173,0.660 40.001,9.484 40.001,20.331 C40.001,31.177 31.173,40.001 20.322,40.001 ZM20.322,1.795 C10.096,1.795 1.778,10.110 1.778,20.331 C1.778,30.550 10.096,38.864 20.322,38.864 C30.546,38.864 38.865,30.550 38.865,20.331 C38.865,10.110 30.546,1.795 20.322,1.795 ZM20.322,28.338 C20.176,28.338 20.031,28.282 19.920,28.171 C19.698,27.949 19.698,27.590 19.920,27.368 L26.393,20.899 L13.637,20.899 C13.323,20.899 13.069,20.645 13.069,20.331 C13.069,20.017 13.323,19.762 13.637,19.762 L26.393,19.762 L19.920,13.294 C19.698,13.071 19.698,12.712 19.920,12.490 C20.142,12.268 20.502,12.268 20.724,12.490 L28.569,20.331 L20.724,28.171 C20.613,28.282 20.467,28.338 20.322,28.338 Z"/> </svg>',    });
});