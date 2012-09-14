// Generated by CoffeeScript 1.3.3
(function() {
  var scroller;

  scroller = function() {
    return window.scrollTo(0, 0);
  };

  $(document).ready(function() {
    if (!window.navigator.standalone) {
      $('body').css('min-height', '480px');
      setTimeout(scroller, 100);
    }
    $('#message_ready').bind('click', function(event) {
      event.stopPropagation;
      $('#message').html($('#message_input').attr('value'));
      $('#interface').hide();
      setTimeout(scroller, 0);
      return $('#output').fadeIn('fast');
    });
    $('#output').bind('click', function(event) {
      $('#output').hide();
      return $('#interface').fadeIn('fast');
    });
    return $('#message_input').bind('keydown', function(event) {
      if (event.keyCode === 13) {
        return $('#message_ready').trigger('click');
      }
    });
  });

}).call(this);
