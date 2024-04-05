$(document).ready(function() {
  $(".js-phone-mask").inputmask("(999) 999-99-99",{"clearIncomplete": true, showMaskOnHover: false});
  $(".js-email-mask").inputmask({ alias: "email", showMaskOnHover: false});
  $(".js-date-mask").inputmask("99.99.9999",{ "clearIncomplete": true, "placeholder": "дд.мм.гггг", showMaskOnHover: false });
  $(".js-date-mask-range").inputmask("99.99.9999 - 99.99.9999",{ "clearIncomplete": true, "placeholder": "дд.мм.гггг - дд.мм.гггг", showMaskOnHover: false });
  $(".js-decimal-mask").inputmask({alias: "decimal", radixPoint: ".", rightAlign: false});
});
