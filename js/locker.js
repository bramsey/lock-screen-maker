// Generated by CoffeeScript 1.3.3
(function() {
  var fitSize, greyScaler, isIphone5, removeGrey, scroller;

  scroller = function() {
    return window.scrollTo(0, 0);
  };

  isIphone5 = function() {
    return window.screen.height === 568;
  };

  greyScaler = function(mini, i) {
    return $(mini).addClass('grey' + i);
  };

  removeGrey = function(mini, i) {
    return $(mini).removeClass('grey' + i);
  };

  fitSize = function($message) {
    var height, initial_font, max_height, size, width, _results;
    if (isIphone5()) {
      initial_font = 298;
      max_height = 334;
    } else {
      initial_font = 223;
      max_height = 250;
    }
    $message.css('font-size', initial_font);
    width = $message.width();
    height = $message.height();
    size = parseInt($message.css('font-size'), 10);
    _results = [];
    while (width > 304 || height > max_height) {
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
    var $actions, $color_links, $color_minis, $color_toggle, $colors, $interface, $message, $message_input, $message_show, $output, $selected_color_link, default_color;
    $message = $('#message');
    $message_input = $('#message_input');
    $message_show = $('#message_show');
    $actions = $('#actions');
    $interface = $('#interface');
    $output = $('#output');
    $colors = $('#colors');
    $color_links = $colors.find('a');
    $selected_color_link = null;
    $color_minis = $('.mini');
    $color_toggle = $('#color_toggle');
    default_color = $message.css('color');
    if (!window.navigator.standalone) {
      $('body').addClass('exact_height');
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
        return $actions.fadeIn('medium');
      } else {
        return $actions.fadeOut('fast');
      }
    });
    $color_toggle.bind('click', function(event) {
      var i, mini, _i, _j, _len, _len1, _results, _results1;
      event.preventDefault();
      if ($colors.css('display') === 'none') {
        $colors.fadeIn('fast');
        _results = [];
        for (i = _i = 0, _len = $color_minis.length; _i < _len; i = ++_i) {
          mini = $color_minis[i];
          _results.push(greyScaler(mini, i));
        }
        return _results;
      } else {
        $colors.fadeOut('fast');
        $color_toggle.removeClass('grey_scale');
        _results1 = [];
        for (i = _j = 0, _len1 = $color_minis.length; _j < _len1; i = ++_j) {
          mini = $color_minis[i];
          _results1.push(removeGrey(mini, i));
        }
        return _results1;
      }
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
