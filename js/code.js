$(document).ready(function(){
    $('.carousel__inner').slick({
            speed: 1300,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"> <img class="img_js" src="img/chevron left solid.svg"> </button>',
            nextArrow: '<button type="button" class="slick-next"> <img class="img_jss" src="img/chevron right solid.svg"> </button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        arrows: false,
                    }
                }
            ]
        }
    );
    // функция для активной кнопки и привязывания к этой кнопче.
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
// // Функция используется для показа скрытого текста
//     $('.catalog-item__link').each(function(i) {
//         // Реагирует на назажие 
//         $(this).on('click', function(e) {
//             e.preventDefault();
//             //указует что будет открывать
//             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//         })
//     })

//     $('.catalog-item__back').each(function(i) {
//         $(this).on('click', function(e) {
//             e.preventDefault();
//             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//         })
//     })
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }
    toggleSlide('.catalog-item__back')
    toggleSlide('.catalog-item__link')
});