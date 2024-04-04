$(document).ready(function() {
  $(".js-phone-mask").inputmask("(999) 999-99-99",{"clearIncomplete": true, showMaskOnHover: false});
  $(".js-email-mask").inputmask({ alias: "email", showMaskOnHover: false});
  $(".js-date-mask").inputmask("99.99.9999",{ "clearIncomplete": true, "placeholder": "ДД.ММ.ГГГГ", showMaskOnHover: false });
  $(".js-decimal-mask").inputmask({alias: "decimal", radixPoint: ".", rightAlign: false});
});
