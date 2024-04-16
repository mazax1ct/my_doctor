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

$(document).ready(function () {
  //кастомный селект
  $('.js-select').each(function() {
    var $p = $(this).closest('.select-wrapper');
    $(this).select2({
      minimumResultsForSearch: 1,
      dropdownPosition: 'below',
      dropdownParent: $p,
    });
	}).on("select2:open", function (e) {
    var $p = $(this).closest('.select-wrapper');
    $p.addClass('open');
    $p.find('.select2-search__field');
	}).on("select2:close", function (e) {
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
$(document).on('click', '.popup__closer', function () {
  $.fancybox.close();
  return false;
});
