$(function(){

    $('.slider-box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<svg class="slick-left" width="54" height="74" viewBox="0 0 54 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H17C37.4345 0 54 16.5655 54 37C54 57.4345 37.4345 74 17 74H0V0Z" fill="white"/><path d="M13.9766 37.9062L28.6484 43.8359V48.4297L9.47656 39.5469V36.125L28.6484 27.2656V31.8594L13.9766 37.9062Z" fill="black"/></svg>',
        nextArrow: '<svg class="slick-right" width="54" height="74" viewBox="0 0 54 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 37C0 16.5655 16.5655 0 37 0H54V74H37C16.5655 74 0 57.4345 0 37Z" fill="white"/><path d="M40.0938 37.7656L24.6016 31.6953V27.2422L44.6172 36.1016V39.5234L24.6016 48.4062V43.9062L40.0938 37.7656Z" fill="black"/></svg>',
        responsive:[
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 505,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.logo-slider').slick({
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1,
        slidesToShow: 5,
    }),

    $('.menu__btn').on('click', function(){
        $('.nav__list').toggleClass('nav__list--active')
    }),

    $('.service-slider').slick({
        slidesToShow: 5,
        slidesToShowL: 1,
        prevArrow: '<svg class="slick-left" width="54" height="74" viewBox="0 0 54 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H17C37.4345 0 54 16.5655 54 37C54 57.4345 37.4345 74 17 74H0V0Z" fill="white"/><path d="M13.9766 37.9062L28.6484 43.8359V48.4297L9.47656 39.5469V36.125L28.6484 27.2656V31.8594L13.9766 37.9062Z" fill="black"/></svg>',
        nextArrow: '<svg class="slick-right" width="54" height="74" viewBox="0 0 54 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 37C0 16.5655 16.5655 0 37 0H54V74H37C16.5655 74 0 57.4345 0 37Z" fill="white"/><path d="M40.0938 37.7656L24.6016 31.6953V27.2422L44.6172 36.1016V39.5234L24.6016 48.4062V43.9062L40.0938 37.7656Z" fill="black"/></svg>',
        responsive:[
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
            }  
          },
          {
              breakpoint: 370,
              settings: {
                  slidesToShow: 1,
              }
          }
        ]
    })


});