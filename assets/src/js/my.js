function deviceNav() {
    $('.sendwich').click(function () {
        $(this).find('.sendwich-btn').toggleClass('active');
        $(this).siblings('ul').toggleClass('active');
    });
};


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

    $('.instagram__slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,

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




