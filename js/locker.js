// Generated by CoffeeScript 1.3.3
(function() {
  var fitSize, scroller;

  scroller = function() {
    return window.scrollTo(0, 0);
  };

  fitSize = function($message) {
    var height, size, width, _results;
    $message.css('font-size', 223);
    width = $message.width();
    height = $message.height();
    size = parseInt($message.css('font-size'), 10);
    _results = [];
    while (width > 304 || height > 250) {
      size = parseInt($message.css('font-size'), 10);
      if (size < 12) {
        break;
      }
      $message.css('font-size', size - 1);
      width = $message.width();
      _results.push(height = $message.height());
    }
    return _results;
  };

  $(document).ready(function() {
    var $color_links, $colors, $interface, $message, $message_input, $message_show, $output, $selected_color_link, default_color;
    $message = $('#message');
    $message_input = $('#message_input');
    $message_show = $('#message_show');
    $interface = $('#interface');
    $output = $('#output');
    $colors = $('#colors');
    $color_links = $colors.find('a');
    $selected_color_link = null;
    default_color = $message.css('color');
    if (!window.navigator.standalone) {
      $('body').css('min-height', '480px');
      setTimeout(scroller, 100);
    }
    $message_show.bind('click', function(event) {
      var color, msg;
      event.stopPropagation();
      msg = $message_input.attr('value');
      $message.html(msg);
      if ($selected_color_link) {
        color = $selected_color_link.css('background-color');
        $message.css('color', color);
      } else {
        $message.css('color', default_color);
      }
      $interface.hide();
      setTimeout(scroller, 0);
      $output.fadeIn('fast');
      $output.css('display', 'table');
      return fitSize($message);
    });
    $output.bind('click', function(event) {
      $output.hide();
      $interface.fadeIn('fast');
      return $message_input.focus();
    });
    $message_input.bind('keyup', function(event) {
      var msg;
      msg = $message_input.attr('value');
      if (event.keyCode === 13 && msg !== '') {
        return $message_show.trigger('click');
      } else if (msg !== '') {
        return $message_show.fadeIn('medium');
      } else {
        return $message_show.fadeOut('fast');
      }
    });
    $('#color_toggle').bind('click', function(event) {
      event.preventDefault();
      return $colors.toggle();
    });
    return $color_links.bind('click', function(event) {
      var $target;
      $target = $(event.target);
      if ($target.hasClass('selected')) {
        $target.removeClass('selected');
        return $selected_color_link = null;
      } else {
        if ($selected_color_link) {
          $selected_color_link.removeClass('selected');
        }
        $target.addClass('selected');
        return $selected_color_link = $target;
      }
    });
  });

}).call(this);
