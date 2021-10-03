
scroll_bottom = function () {
  if ($('#msg-flow').length > 0) {
    $('#msg-flow').scrollTop($('#msg-flow')[0].scrollHeight);
  }
}



submit_message = function() {
  $('#message_content').on('keydown', function (e){
    if (e.keyCode === 13) {
      e.preventDefault();
      $('button').click();
      e.target.value = "";
    };
  })
}



$(document).on('turbolinks:load', function () {
  // alert('We made it!');
    $('.ui.dropdown').dropdown();
    $('.tiny.modal').modal('show');
    $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
    $("#message_content")[0].reset();
  });
  submit_message();
  scroll_bottom();
})