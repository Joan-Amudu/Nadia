

$(document).ready(function(){
    $('.toast').toast('show');
 

  });
/*
30 Seconds Time out function for flash messages
*/
  setTimeout(function() {
    $('#flashmessage').fadeOut('fast');
}, 30000);