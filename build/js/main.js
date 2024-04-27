//отслеживание скролла для шапки
var header = $('.header'),
    scrollPrev = 0;

var resize_scroll = function(e) {
  var scrolled = $(window).scrollTop();

  if (scrolled > $('.header').height() * 2) {
		header.addClass('is-scrolled');
	} else {
		header.removeClass('is-scrolled');
	}

  if ( scrolled > $('.header').height() && scrolled > scrollPrev ) {
		header.addClass('is-out');
	} else {
		header.removeClass('is-out');
	}

	scrollPrev = scrolled;
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//тогглер меню
$(document).on('click', '.js-menu-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass('is-active');
    $(this).find('use').attr('xlink:href', 'images/sprite.svg#close_icon');
    $('body').addClass('is-overflow');
  } else {
    $(this).removeClass('is-active');
    $(this).find('use').attr('xlink:href', 'images/sprite.svg#burger_icon');
    $('body').removeClass('is-overflow');
  }
  $('.header').toggleClass('menu-is-open');
  return false;
});

/*****************************позже удалить*****************************/
$(document).on('focus', '.header .search-form__input', function() {
  $('.header .search-form__form').addClass('is-open');
});

$(document).on('blur', '.header .search-form__input', function() {
  $('.header .search-form__form').removeClass('is-open');
});
/*****************************позже удалить*****************************/

function formatState (state) {
  if (!state.id) {
    return state.text;
  }

  if(state.element.parentElement.dataset.icon !== '' && state.element.parentElement.dataset.icon !== undefined) {
    var $state = $('<span><svg aria-hidden="true"><use xlink:href="images/sprite.svg#'+state.element.parentElement.dataset.icon+'" /></svg> <span>'+state.text+'</span></span>');
  } else {
    $state = state.text;
  }

  return $state;
};

$(document).ready(function () {
  //кастомный селект
  $('.js-select').each(function() {
    var $p = $(this).closest('.select-wrapper');
    $(this).select2({
      dropdownPosition: 'below',
      dropdownParent: $p,
      'language': {
        'noResults': function(){
          return 'Ничего не найдено';
        }
      },
      templateSelection: formatState
    });
    if($(this).attr('data-icon') !== '' && $(this).attr('data-icon') !== undefined) {
      var $placeholder = $(this).parent().find('.select2-selection__placeholder');
      $placeholder.html('<svg aria-hidden="true"><use xlink:href="images/sprite.svg#'+$(this).attr('data-icon')+'" /></svg> <span>'+$(this).attr('data-placeholder')+'</span>');
    }
	}).on('select2:open', function (e) {
    var $p = $(this).closest('.select-wrapper');
    $p.addClass('open');
    var $searchfield = $(this).parent().find('.select2-search__field');
    $searchfield.get(0).focus();
	}).on('select2:close', function (e) {
    var $p = $(this).closest('.select-wrapper');
    $p.removeClass('open');
	});

  //состояние заполненности поля ввода
  $('.js-input-group__input').each(function(index) {
    if($(this).val() !== '') {
      $(this).closest('.input-group').addClass('is-filled');
    } else {
      $(this).closest('.input-group').removeClass('is-filled');
    }
  });

  $('.js-articles-slider').each(function() {
    var arrowsContainer = $(this).closest('.articles-slider').find('.articles-slider__arrows');
    var arrowsContainer2 = $(this).closest('.articles-slider');
    var dostContainer = $(this).closest('.articles-slider').find('.articles-slider__dots');

    var articlesSliderOptions_1 = {
      infinite: true,
      mobileFirst: true,
      dots: true,
      appendDots: dostContainer,
      arrows: true,
      prevArrow: '<button class="slick-prev" type="button" title="Назад"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#circle_arrow_left" /></svg></button>',
      nextArrow: '<button class="slick-next" type="button" title="Вперед"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#circle_arrow_right" /></svg></button>',
      appendArrows: arrowsContainer,
      responsive: [
       {
         breakpoint: 767,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 1279,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3
         }
       },
       {
         breakpoint: 1310,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           appendArrows: arrowsContainer2
         }
       }
     ]
    };

    var articlesSliderOptions_2 = {
      infinite: true,
      mobileFirst: true,
      dots: true,
      appendDots: dostContainer,
      arrows: true,
      prevArrow: '<button class="slick-prev" type="button" title="Назад"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#circle_arrow_left" /></svg></button>',
      nextArrow: '<button class="slick-next" type="button" title="Вперед"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#circle_arrow_right" /></svg></button>',
      appendArrows: arrowsContainer,
      responsive: [
       {
         breakpoint: 767,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 1310,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           appendArrows: arrowsContainer2
         }
       }
     ]
    };

    var articlesSliderOptions_3 = {
      infinite: true,
      mobileFirst: true,
      dots: true,
      appendDots: dostContainer,
      arrows: true,
      prevArrow: '<button class="slick-prev" type="button" title="Назад"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#circle_arrow_left" /></svg></button>',
      nextArrow: '<button class="slick-next" type="button" title="Вперед"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#circle_arrow_right" /></svg></button>',
      appendArrows: arrowsContainer,
      responsive: [
       {
         breakpoint: 767,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 1310,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       }
     ]
    };

    if($(this).hasClass('articles-slider__slider--type_1')){
      $(this).slick(articlesSliderOptions_1);
    } else if ($(this).hasClass('articles-slider__slider--type_2')) {
      $(this).slick(articlesSliderOptions_2);
    } else {
      $(this).slick(articlesSliderOptions_3);
    }

  });

  $('.js-contacts-slider').each(function() {
    var arrowsContainer = $(this).closest('.contacts-slider').find('.contacts-slider__arrows');
    var dostContainer = $(this).closest('.contacts-slider').find('.contacts-slider__dots');

    $(this).slick({
      infinite: true,
      mobileFirst: true,
      dots: true,
      appendDots: dostContainer,
      arrows: true,
      prevArrow: '<button class="slick-prev" type="button" title="Назад"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#circle_arrow_left" /></svg></button>',
      nextArrow: '<button class="slick-next" type="button" title="Вперед"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#circle_arrow_right" /></svg></button>',
      appendArrows: arrowsContainer,
      responsive: [
       {
         breakpoint: 767,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 1279,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3
         }
       }
     ]
    });
  });

  $('.js-simple-slider').each(function() {
    var arrowsContainer = $(this).closest('.simple-slider').find('.simple-slider__arrows');
    var dostContainer = $(this).closest('.simple-slider').find('.simple-slider__dots');

    $(this).slick({
      infinite: true,
      mobileFirst: true,
      dots: true,
      appendDots: dostContainer,
      arrows: true,
      prevArrow: '<button class="slick-prev" type="button" title="Назад"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#circle_arrow_left" /></svg></button>',
      nextArrow: '<button class="slick-next" type="button" title="Вперед"><svg aria-hidden="true"><use xlink:href="images/sprite.svg#circle_arrow_right" /></svg></button>',
      appendArrows: arrowsContainer,
    });
  });
});

//состояние заполненности поля ввода
$(document).on('keyup', '.js-input-group__input', function () {
  if($(this).val() !== '') {
    $(this).closest('.input-group').addClass('is-filled');
  } else {
    $(this).closest('.input-group').removeClass('is-filled');
  }
});

//сбросс содержимого поля ввода
$(document).on('click', '.js-input-group__clear', function () {
  $(this).closest('.input-group').find('.js-input-group__input').val('');
  $(this).closest('.input-group').removeClass('is-filled');
  $(this).closest('.input-group').find('.js-input-group__input').focus();
  return false;
});

//закрытие попапа
$(document).on('click', '.js-popup-closer', function () {
  $.fancybox.close();
  return false;
});

//input[type=file]
$('.file-container input[type=file]').on('change', function(){
	let file = this.files[0];
  $(this).closest('.file-container').find('.file-attach').addClass('is-filled');
	$(this).closest('.file-container').find('.file-attach__value').html(file.name);
});

//сбросс содержимого input[type=file]
$(document).on('click', '.js-file-attach__clear', function () {
  $(this).closest('.file-container').find('input[type=file]').val('');
  $(this).closest('.file-attach').removeClass('is-filled');
  $(this).closest('.file-container').find('.file-attach__value').html('Файл не выбран...');
  return false;
});

//выбор периода
$(document).on('click', '.period__button', function () {
  if(!$(this).closest('.period').hasClass('is-open')){
    $(this).closest('.period').addClass('is-open');
    document.addEventListener('click', closePeriod);
  }else{
    $(this).closest('.period').removeClass('is-open');
    document.removeEventListener('click', closePeriod);
  }
  return false;
});

function closePeriod(evt) {
  if (!$('.period.is-open').is(evt.target) && $('.period.is-open').has(evt.target).length === 0) {
    $('.period').removeClass('is-open');
    document.removeEventListener('click', closePeriod);
	}
}

$(document).on('click', '.js-start-list .period__item', function () {
  var that = $(this);
  $(this).closest('.period__list').find('.period__item').removeClass('is-active');
  $(this).addClass('is-active');

  $(this).closest('.period').find('.js-start').html($(this).text());
  $(this).closest('.period').find('input[name="period_start"]').val($(this).text());

  $(this).closest('.period').find('.js-end-list').find('.period__item').removeClass('is-active').css('display', 'block');

  if($(this).closest('.period').find('input[name="period_start"]').val() < $(this).closest('.period').find('input[name="period_end"]').val()){
    $(this).closest('.period').find('.js-end').html('____');
    $(this).closest('.period').find('input[name="period_end"]').val('');
  }

  $(this).closest('.period').find('.js-end-list').find('.period__item').filter(function(i, elem){
    var text = elem.innerText;
    return parseInt(text) < parseInt(that.text());
	}).css('display', 'none');

  if($(this).closest('.period').find('input[name="period_start"]').val() !== '' && $(this).closest('.period').find('input[name="period_end"]').val() !== '') {
    $(this).closest('.period').addClass('is-filled');
  }else{
    $(this).closest('.period').removeClass('is-filled');
  }

  return false;
});

$(document).on('click', '.js-end-list .period__item', function () {
  $(this).closest('.period__list').find('.period__item').removeClass('is-active');
  $(this).addClass('is-active');

  $(this).closest('.period').find('.js-end').html($(this).text());
  $(this).closest('.period').find('input[name="period_end"]').val($(this).text());

  if($(this).closest('.period').find('input[name="period_start"]').val() !== '' && $(this).closest('.period').find('input[name="period_end"]').val() !== '') {
    $(this).closest('.period').addClass('is-filled');
  }else{
    $(this).closest('.period').removeClass('is-filled');
  }

  return false;
});

//лицензии
$(document).on('mouseenter', '.licenses .download-link', function () {
  $('.licenses__images img').attr('src', $(this).attr('href'));
  $('.licenses__images img').attr('srcset', $(this).attr('data-img'));
});

//аккордеон
$(document).on('click', '.accordion__toggler', function () {
  var _this = $(this);
  if(!_this.hasClass('is-active')){
    _this.addClass('is-active');
    _this.next('.accordion__body').slideDown();
  }else{
    _this.next('.accordion__body').slideUp(function() {
      _this.removeClass('is-active');
    });
  }
  return false;
});
