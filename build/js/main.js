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
$(document).on('focus', '.search-form__input', function() {
  $('.search-form__form').addClass('is-open');
});

$(document).on('blur', '.search-form__input', function() {
  $('.search-form__form').removeClass('is-open');
});
/*****************************позже удалить*****************************/
