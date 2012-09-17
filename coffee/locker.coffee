# function to hide address bar when not in webapp mode
scroller = ->
  window.scrollTo(0,0)

# dynamically resizes the output to maximize space
fitSize = ($message) ->
  $message.css('font-size', 223)
  width = $message.width()
  height = $message.height()
  size = parseInt($message.css('font-size'), 10)

  while (width > 304 or height > 250)
    size = parseInt($message.css('font-size'), 10)
    break if size < 12
    $message.css('font-size', size - 1)
    width = $message.width()
    height = $message.height()

$(document).ready ->
  $message = $('#message')
  $message_input = $('#message_input')
  $message_show = $('#message_show')
  $interface = $('#interface')
  $output = $('#output')
  $colors = $('#colors')
  $color_links = $colors.find('a')
  $selected_color_link = null
  default_color = $message.css('color')

  # prevent address bar compensation for mobile app
  unless window.navigator.standalone
    $('body').css('min-height', '480px')
    setTimeout(scroller, 100)

  $message_show.bind 'click', (event) ->
    event.stopPropagation()
    msg = $message_input.attr('value')
    $message.html(msg)
    if $selected_color_link
      color = $selected_color_link.css('background-color')
      $message.css('color', color)
    else
      $message.css('color', default_color)

    $interface.hide()
    setTimeout(scroller, 0)
    $output.fadeIn('fast')
    $output.css('display', 'table')
    fitSize($message)
    
  $output.bind 'click', (event) ->
    $output.hide()
    $interface.fadeIn('fast')
    $message_input.focus()

  $message_input.bind 'keyup', (event) ->
    msg = $message_input.attr('value')
    if event.keyCode is 13 and msg != ''
      $message_show.trigger('click')
    else if msg != ''
      $message_show.fadeIn('medium')
    else
      $message_show.fadeOut('fast')

  $('#color_toggle').bind 'click', (event) ->
    event.preventDefault()
    $colors.toggle()

  $color_links.bind 'click', (event) ->
    $target = $(event.target)
    if $target.hasClass('selected')
      $target.removeClass('selected')
      $selected_color_link = null
    else
      $selected_color_link.removeClass('selected') if $selected_color_link
      $target.addClass('selected')
      $selected_color_link = $target
