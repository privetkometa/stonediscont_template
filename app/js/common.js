$(function () {
    // calculate disconts at card
    $(document).on('msoptionsprice_product_action', function (e, action, form, r) {
        var pageId = document.getElementById('pageId').value;
        if (action == 'modification/get' && r.success && r.data) {
            if (r.data.rid == pageId) {
                var modification = r.data.modification || {};
                var discount = modification.options.discount || 0;
                if (discount) {
                    var oldPrice = Math.round(modification.cost / ((100 - discount) / 100));
                    var formattedPrice = oldPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
                    document.getElementById('old_price').textContent = formattedPrice;
                    var benefit = oldPrice - modification.cost;
                    var formattedBenefit = benefit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
                    $("#discount").html(`<div class="product-card__discount">Скидка <span class="product-card__discount-value">${discount} %</span></div>`)
                    $("#benefit").html(`<span class="product-card__benefit-title">Экономия</span><span id="benefit-value" class="product-card__benefit-value">${formattedBenefit} ₽</span>`);
                } else {
                    document.getElementById('benefit').textContent = '';
                    document.getElementById('discount').textContent = '';
                    document.getElementById('old_price').textContent = '';
                }
            }

        }
    });

    // calculate discont in other cards
    var discountNode = document.getElementById('simple-discount');
    if (discountNode) {
        var discount = discountNode.value;
        if (discount) {
            var price = document.getElementById('price').value.split(' ').join('');
            var oldPrice = Math.round(price / ((100 - discount) / 100));
            var benefit = oldPrice - price;
            var formattedOldPrice = oldPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
            var formattedBenefit = benefit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
            document.getElementById('old_price').textContent = formattedOldPrice;
            $("#discount").html(`<div class="product-card__discount">Скидка <span class="product-card__discount-value">${discount} %</span></div>`)
            $("#benefit").html(`<span class="product-card__benefit-title">Экономия</span><span id="benefit-value" class="product-card__benefit-value">${formattedBenefit} ₽</span>`);
        }
    }

    if (document.body.offsetWidth > 767) {
        $('#mobile-options').remove()
    } else {
        $('#options').remove()
    }


    $('.similar-carusel').owlCarousel({
        items: 4,
        margin: 30,
        nav: true,
        loop: true,
        navText: ['<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.2774 0.308777C10.6591 -0.0903267 11.2921 -0.104394 11.6912 0.277358C12.0903 0.65911 12.1044 1.29212 11.7226 1.69122L10.2774 0.308777ZM1.43478 11L0.712141 11.6912L0.050971 11L0.712141 10.3088L1.43478 11ZM11.7226 20.3088C12.1044 20.7079 12.0903 21.3409 11.6912 21.7226C11.2921 22.1044 10.6591 22.0903 10.2774 21.6912L11.7226 20.3088ZM11.7226 1.69122L2.15742 11.6912L0.712141 10.3088L10.2774 0.308777L11.7226 1.69122ZM2.15742 10.3088L11.7226 20.3088L10.2774 21.6912L0.712141 11.6912L2.15742 10.3088Z"/> </svg>',
            '<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"> <path d="M1.72264 0.308777C1.34089 -0.0903267 0.707881 -0.104394 0.308777 0.277358C-0.0903267 0.65911 -0.104394 1.29212 0.277358 1.69122L1.72264 0.308777ZM10.5652 11L11.2879 11.6912L11.949 11L11.2879 10.3088L10.5652 11ZM0.277358 20.3088C-0.104394 20.7079 -0.0903267 21.3409 0.308777 21.7226C0.707881 22.1044 1.34089 22.0903 1.72264 21.6912L0.277358 20.3088ZM0.277358 1.69122L9.84258 11.6912L11.2879 10.3088L1.72264 0.308777L0.277358 1.69122ZM9.84258 10.3088L0.277358 20.3088L1.72264 21.6912L11.2879 11.6912L9.84258 10.3088Z"/> </svg>'],
        responsive: {
            0: {
                items: 2,
                margin: 10,
            },
            480: {
                items: 2,
                margin: 10,
            },
            768: {
                items: 3,
                margin: 20,
            },
            1200: {
                items: 4,
                margin: 30,
            }
        }
    });

    $('.cemetery__examples').owlCarousel({
        items: 4,
        margin: 30,
        nav: true,
        loop: true,
        navText: ['<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.2774 0.308777C10.6591 -0.0903267 11.2921 -0.104394 11.6912 0.277358C12.0903 0.65911 12.1044 1.29212 11.7226 1.69122L10.2774 0.308777ZM1.43478 11L0.712141 11.6912L0.050971 11L0.712141 10.3088L1.43478 11ZM11.7226 20.3088C12.1044 20.7079 12.0903 21.3409 11.6912 21.7226C11.2921 22.1044 10.6591 22.0903 10.2774 21.6912L11.7226 20.3088ZM11.7226 1.69122L2.15742 11.6912L0.712141 10.3088L10.2774 0.308777L11.7226 1.69122ZM2.15742 10.3088L11.7226 20.3088L10.2774 21.6912L0.712141 11.6912L2.15742 10.3088Z"/> </svg>',
            '<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"> <path d="M1.72264 0.308777C1.34089 -0.0903267 0.707881 -0.104394 0.308777 0.277358C-0.0903267 0.65911 -0.104394 1.29212 0.277358 1.69122L1.72264 0.308777ZM10.5652 11L11.2879 11.6912L11.949 11L11.2879 10.3088L10.5652 11ZM0.277358 20.3088C-0.104394 20.7079 -0.0903267 21.3409 0.308777 21.7226C0.707881 22.1044 1.34089 22.0903 1.72264 21.6912L0.277358 20.3088ZM0.277358 1.69122L9.84258 11.6912L11.2879 10.3088L1.72264 0.308777L0.277358 1.69122ZM9.84258 10.3088L0.277358 20.3088L1.72264 21.6912L11.2879 11.6912L9.84258 10.3088Z"/> </svg>'],
        responsive: {
            0: {
                items: 2,
                margin: 10,
            },
            480: {
                items: 2,
                margin: 10,
            },
            768: {
                items: 3,
                margin: 20,
            },
        }
    });

    $('.similar-complex-carusel').owlCarousel({
        items: 3,
        margin: 30,
        nav: true,
        loop: true,
    });

    $('.examples-carusel').owlCarousel({
        nav: true,
        loop: true,
        navText: ['<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.2774 0.308777C10.6591 -0.0903267 11.2921 -0.104394 11.6912 0.277358C12.0903 0.65911 12.1044 1.29212 11.7226 1.69122L10.2774 0.308777ZM1.43478 11L0.712141 11.6912L0.050971 11L0.712141 10.3088L1.43478 11ZM11.7226 20.3088C12.1044 20.7079 12.0903 21.3409 11.6912 21.7226C11.2921 22.1044 10.6591 22.0903 10.2774 21.6912L11.7226 20.3088ZM11.7226 1.69122L2.15742 11.6912L0.712141 10.3088L10.2774 0.308777L11.7226 1.69122ZM2.15742 10.3088L11.7226 20.3088L10.2774 21.6912L0.712141 11.6912L2.15742 10.3088Z"/> </svg>',
            '<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"> <path d="M1.72264 0.308777C1.34089 -0.0903267 0.707881 -0.104394 0.308777 0.277358C-0.0903267 0.65911 -0.104394 1.29212 0.277358 1.69122L1.72264 0.308777ZM10.5652 11L11.2879 11.6912L11.949 11L11.2879 10.3088L10.5652 11ZM0.277358 20.3088C-0.104394 20.7079 -0.0903267 21.3409 0.308777 21.7226C0.707881 22.1044 1.34089 22.0903 1.72264 21.6912L0.277358 20.3088ZM0.277358 1.69122L9.84258 11.6912L11.2879 10.3088L1.72264 0.308777L0.277358 1.69122ZM9.84258 10.3088L0.277358 20.3088L1.72264 21.6912L11.2879 11.6912L9.84258 10.3088Z"/> </svg>'],
        responsive: {
            0: {
                items: 2,
                margin: 10,
            },
            480: {
                items: 2,
                margin: 10,
            },
            768: {
                items: 3,
                margin: 20,
            },
            1200: {
                items: 4,
                margin: 30,
            }
        }
    });

    $('.category__gallery').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.2774 0.308777C10.6591 -0.0903267 11.2921 -0.104394 11.6912 0.277358C12.0903 0.65911 12.1044 1.29212 11.7226 1.69122L10.2774 0.308777ZM1.43478 11L0.712141 11.6912L0.050971 11L0.712141 10.3088L1.43478 11ZM11.7226 20.3088C12.1044 20.7079 12.0903 21.3409 11.6912 21.7226C11.2921 22.1044 10.6591 22.0903 10.2774 21.6912L11.7226 20.3088ZM11.7226 1.69122L2.15742 11.6912L0.712141 10.3088L10.2774 0.308777L11.7226 1.69122ZM2.15742 10.3088L11.7226 20.3088L10.2774 21.6912L0.712141 11.6912L2.15742 10.3088Z"/> </svg>',
            '<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"> <path d="M1.72264 0.308777C1.34089 -0.0903267 0.707881 -0.104394 0.308777 0.277358C-0.0903267 0.65911 -0.104394 1.29212 0.277358 1.69122L1.72264 0.308777ZM10.5652 11L11.2879 11.6912L11.949 11L11.2879 10.3088L10.5652 11ZM0.277358 20.3088C-0.104394 20.7079 -0.0903267 21.3409 0.308777 21.7226C0.707881 22.1044 1.34089 22.0903 1.72264 21.6912L0.277358 20.3088ZM0.277358 1.69122L9.84258 11.6912L11.2879 10.3088L1.72264 0.308777L0.277358 1.69122ZM9.84258 10.3088L0.277358 20.3088L1.72264 21.6912L11.2879 11.6912L9.84258 10.3088Z"/> </svg>'],
        responsive: {
            0: {
                items: 1,
                margin: 50,
                stagePadding: 50
            },
            576: {
                items: 3,
            },
            768: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    $('.cemetery__gallery').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        navText: ['<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.2774 0.308777C10.6591 -0.0903267 11.2921 -0.104394 11.6912 0.277358C12.0903 0.65911 12.1044 1.29212 11.7226 1.69122L10.2774 0.308777ZM1.43478 11L0.712141 11.6912L0.050971 11L0.712141 10.3088L1.43478 11ZM11.7226 20.3088C12.1044 20.7079 12.0903 21.3409 11.6912 21.7226C11.2921 22.1044 10.6591 22.0903 10.2774 21.6912L11.7226 20.3088ZM11.7226 1.69122L2.15742 11.6912L0.712141 10.3088L10.2774 0.308777L11.7226 1.69122ZM2.15742 10.3088L11.7226 20.3088L10.2774 21.6912L0.712141 11.6912L2.15742 10.3088Z"/> </svg>',
            '<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"> <path d="M1.72264 0.308777C1.34089 -0.0903267 0.707881 -0.104394 0.308777 0.277358C-0.0903267 0.65911 -0.104394 1.29212 0.277358 1.69122L1.72264 0.308777ZM10.5652 11L11.2879 11.6912L11.949 11L11.2879 10.3088L10.5652 11ZM0.277358 20.3088C-0.104394 20.7079 -0.0903267 21.3409 0.308777 21.7226C0.707881 22.1044 1.34089 22.0903 1.72264 21.6912L0.277358 20.3088ZM0.277358 1.69122L9.84258 11.6912L11.2879 10.3088L1.72264 0.308777L0.277358 1.69122ZM9.84258 10.3088L0.277358 20.3088L1.72264 21.6912L11.2879 11.6912L9.84258 10.3088Z"/> </svg>'],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3
            },
        }
    });

    $('.main-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.2774 0.308777C10.6591 -0.0903267 11.2921 -0.104394 11.6912 0.277358C12.0903 0.65911 12.1044 1.29212 11.7226 1.69122L10.2774 0.308777ZM1.43478 11L0.712141 11.6912L0.050971 11L0.712141 10.3088L1.43478 11ZM11.7226 20.3088C12.1044 20.7079 12.0903 21.3409 11.6912 21.7226C11.2921 22.1044 10.6591 22.0903 10.2774 21.6912L11.7226 20.3088ZM11.7226 1.69122L2.15742 11.6912L0.712141 10.3088L10.2774 0.308777L11.7226 1.69122ZM2.15742 10.3088L11.7226 20.3088L10.2774 21.6912L0.712141 11.6912L2.15742 10.3088Z"/> </svg>',
            '<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"> <path d="M1.72264 0.308777C1.34089 -0.0903267 0.707881 -0.104394 0.308777 0.277358C-0.0903267 0.65911 -0.104394 1.29212 0.277358 1.69122L1.72264 0.308777ZM10.5652 11L11.2879 11.6912L11.949 11L11.2879 10.3088L10.5652 11ZM0.277358 20.3088C-0.104394 20.7079 -0.0903267 21.3409 0.308777 21.7226C0.707881 22.1044 1.34089 22.0903 1.72264 21.6912L0.277358 20.3088ZM0.277358 1.69122L9.84258 11.6912L11.2879 10.3088L1.72264 0.308777L0.277358 1.69122ZM9.84258 10.3088L0.277358 20.3088L1.72264 21.6912L11.2879 11.6912L9.84258 10.3088Z"/> </svg>'],
        responsive: {
            0: {
                items: 1,
                margin: 50,
                stagePadding: 50
            },
            576: {
                items: 3,
            },
            768: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    $('.samples__window-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        slideBy: 3,
        navText: ['<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.2774 0.308777C10.6591 -0.0903267 11.2921 -0.104394 11.6912 0.277358C12.0903 0.65911 12.1044 1.29212 11.7226 1.69122L10.2774 0.308777ZM1.43478 11L0.712141 11.6912L0.050971 11L0.712141 10.3088L1.43478 11ZM11.7226 20.3088C12.1044 20.7079 12.0903 21.3409 11.6912 21.7226C11.2921 22.1044 10.6591 22.0903 10.2774 21.6912L11.7226 20.3088ZM11.7226 1.69122L2.15742 11.6912L0.712141 10.3088L10.2774 0.308777L11.7226 1.69122ZM2.15742 10.3088L11.7226 20.3088L10.2774 21.6912L0.712141 11.6912L2.15742 10.3088Z"/> </svg>',
            '<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"> <path d="M1.72264 0.308777C1.34089 -0.0903267 0.707881 -0.104394 0.308777 0.277358C-0.0903267 0.65911 -0.104394 1.29212 0.277358 1.69122L1.72264 0.308777ZM10.5652 11L11.2879 11.6912L11.949 11L11.2879 10.3088L10.5652 11ZM0.277358 20.3088C-0.104394 20.7079 -0.0903267 21.3409 0.308777 21.7226C0.707881 22.1044 1.34089 22.0903 1.72264 21.6912L0.277358 20.3088ZM0.277358 1.69122L9.84258 11.6912L11.2879 10.3088L1.72264 0.308777L0.277358 1.69122ZM9.84258 10.3088L0.277358 20.3088L1.72264 21.6912L11.2879 11.6912L9.84258 10.3088Z"/> </svg>'],
        dotsContainer: '#samples-dots',
        responsive: {
            0: {
                items: 3,
                margin: 0
            },
            567: {
                margin: 10
            },
            768: {
                margin: 20
            },
            992: {
                margin: 30
            },
        }
    });

    $(document).ready(function () {
        if ($(window).width() < 992) {
            startCarousel();
        } else {
            $('.catalog__items').addClass('off');
        }
    });

    $(window).resize(function () {
        if ($(window).width() < 992) {
            startCarousel();
        } else {
            stopCarousel();
        }
    });

    function startCarousel() {
        $(".catalog__items").owlCarousel({
            navigation: true, // Show next and prev buttons
            //autoplay: true,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.2774 0.308777C10.6591 -0.0903267 11.2921 -0.104394 11.6912 0.277358C12.0903 0.65911 12.1044 1.29212 11.7226 1.69122L10.2774 0.308777ZM1.43478 11L0.712141 11.6912L0.050971 11L0.712141 10.3088L1.43478 11ZM11.7226 20.3088C12.1044 20.7079 12.0903 21.3409 11.6912 21.7226C11.2921 22.1044 10.6591 22.0903 10.2774 21.6912L11.7226 20.3088ZM11.7226 1.69122L2.15742 11.6912L0.712141 10.3088L10.2774 0.308777L11.7226 1.69122ZM2.15742 10.3088L11.7226 20.3088L10.2774 21.6912L0.712141 11.6912L2.15742 10.3088Z"/> </svg>',
                '<svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg"> <path d="M1.72264 0.308777C1.34089 -0.0903267 0.707881 -0.104394 0.308777 0.277358C-0.0903267 0.65911 -0.104394 1.29212 0.277358 1.69122L1.72264 0.308777ZM10.5652 11L11.2879 11.6912L11.949 11L11.2879 10.3088L10.5652 11ZM0.277358 20.3088C-0.104394 20.7079 -0.0903267 21.3409 0.308777 21.7226C0.707881 22.1044 1.34089 22.0903 1.72264 21.6912L0.277358 20.3088ZM0.277358 1.69122L9.84258 11.6912L11.2879 10.3088L1.72264 0.308777L0.277358 1.69122ZM9.84258 10.3088L0.277358 20.3088L1.72264 21.6912L11.2879 11.6912L9.84258 10.3088Z"/> </svg>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                }
            }
        });
    }

    function stopCarousel() {
        var owl = $('.catalog__items');
        owl.trigger('destroy.owl.carousel');
    }


    $('[data-fancybox="examplesCarusel"]').fancybox({
        loop: true,
    })

    $('.product-gallery-carusel').owlCarousel({
        items: 1,
        margin: 20,
        nav: true,
        loop: true,
        URLhashListener: true,
    })

    $('[data-fancybox="productGallery"]').fancybox({
        loop: true,
    })

    $('#navbarCatalogMenuButton').click(function () {
        $("#navbarMenu").removeClass("show")
    })

    $('#navbarMenuButton').click(function () {
        $("#navbarCatalogMenu").removeClass("show")
    })

    // function CopyToClipboard(containerid) {
    //   if (document.selection) {
    //       var range = document.body.createTextRange();
    //       range.moveToElementText(document.getElementById(containerid));
    //       range.select().createTextRange();
    //       document.execCommand("Copy");

    //   } else if (window.getSelection) {
    //       var range = document.createRange();
    //        range.selectNode(document.getElementById(containerid));
    //        console.log('range', range)
    //        window.getSelection().addRange(range);
    //        document.execCommand("Copy");
    //   }}

    function CopyToClipboard(containerid) {
        var copyText = document.getElementById(containerid);
        copyText.select();
        document.execCommand("Copy");
    }


    $('.epitaph__price-button').click(function () {
        var epitaphId = $(this).attr('for');
        $(`#price-table_${epitaphId}`).addClass("open");
        var textLength = $(`#content_${epitaphId}`).text().replace(/\s/g, '').length

        $(`#price-table_${epitaphId} .epitaph__price--standart`).text(`${textLength * 35} ₽`)
        $(`#price-table_${epitaphId} .epitaph__price--gold`).text(`${textLength * 65} ₽`)
        $(`#price-table_${epitaphId} .epitaph__price--white`).text(`${textLength * 90} ₽`)
        console.log(textLength)
    });


    $(document).ready(function () {
        $('.cemetery__list a[href^="#"]').bind('click', function (e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 600, function () {
                location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
        });
    });

    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $('.cemetery section').each(function (i) {
            if ($(this).position().top <= scrollDistance) {
                $('.cemetery__list a.active').removeClass('active');
                $('.cemetery__list a').eq(i).addClass('active');
            }
        });
    }).scroll();
});
