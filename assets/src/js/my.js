function deviceNav() {
    $('.sendwich').click(function () {
        $(this).find('.sendwich-btn').toggleClass('active');
        $(this).siblings('ul').toggleClass('active');
    });
};

//= https://code.jquery.com/ui/1.12.1/jquery-ui.js

$(document).ready(function () {
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

    $('.trends__slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: '.trends__arrow-prev',
        prevArrow: '.trends__arrow-next'
    });

    $('.collections__slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: '.collections__arrow-prev',
        prevArrow: '.collections__arrow-next'
    });

    $('.dress__slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: '.dress__arrow-prev',
        prevArrow: '.dress__arrow-next'
    });

    $('.instagram__slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    variableWidth: true,
                    arrows: false,
                    slidesToShow: 3,

                }
            }
        ]
    });

    $('.product__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product__slider',
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        nextArrow: '.next-arrow',
        prevArrow: '.prev-arrow',
    });

    $('.product__slider-bottom').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        nextArrow: '.next-arrow__bottom',
        prevArrow: '.prev-arrow__bottom',
        asNavFor: '.slider-nav__bottom'
    });

    $('.slider-nav__bottom').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.product__slider',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        vertical: false,
        verticalSwiping: false,

    });
});

function backToTop() {
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    $(button).click(function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, "slow")
    })
}

backToTop()


let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');


    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};

$(document).mouseup(function (e) {
    var container = $(".select");
    container.removeClass('is-active');
    if (container.has(e.target).length === 0) {
        container.removeClass('is-active');
    }
});


select();

function deviceNav() {
    $('.sendwich').click(function () {
        $(this).find('.sendwich-btn').toggleClass('active');
        $(this).siblings('ul').toggleClass('active');
    });
};


// $(function () {
//     var dateFormat = "mm/dd/yy",
//         from = $("#from")
//             .datepicker({
//                 defaultDate: "+1w",
//                 changeMonth: true,
//                 numberOfMonths: 1
//             })
//             .on("change", function () {
//                 to.datepicker("option", "minDate", getDate(this));
//             }),
//         to = $("#to").datepicker({
//             defaultDate: "+1w",
//             changeMonth: true,
//             numberOfMonths: 1
//         })
//             .on("change", function () {
//                 from.datepicker("option", "maxDate", getDate(this));
//             });
//
//     function getDate(element) {
//         var date;
//         try {
//             date = $.datepicker.parseDate(dateFormat, element.value);
//         } catch (error) {
//             date = null;
//         }
//
//         return date;
//     }
// });

$(".event__button-bottom").click(function () {
    $(this).toggleClass("button__active", 400,);
});

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.menu').toggleClass('active')
        $('body').toggleClass('lock')
    });
});

$(document).ready(function () {
    $('.open-desc').click(function (event) {
        $('.description-block,.svg-desc').addClass('active')
    });

    $( "#from,#to" ).datepicker();

});


$(document).ready(function () {
    $('.close-desc').click(function (event) {
        $('.description-block,.svg-desc').removeClass('active')
    });
});

$(document).ready(function () {
    $('.open-desc').click(function (event) {
        $('.svg-open').addClass('active')
    });
});

$(document).ready(function () {
    $('.close-desc').click(function (event) {
        $('.svg-open').removeClass('active')
    });
});

$(document).ready(function () {
    $('.close-desc').click(function (event) {
        $('.svg-close').addClass('active')
    });
});

$(document).ready(function () {
    $('.open-desc').click(function (event) {
        $('.svg-close').removeClass('active')
    });
});

