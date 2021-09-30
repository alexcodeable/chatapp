
$(document).on('turbolinks:load', function () {
  // alert('We made it!');
    $('.ui.dropdown').dropdown();
    $('.tiny.modal').modal('show');
    $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
})