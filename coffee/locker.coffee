scroller = ->
  window.scrollTo(0,0)

  #window.addEventListener 'load', ->
  #setTimeout(scroller, 0)

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
  msg = $('#message_input').attr('value')
  unless window.navigator.standalone
    $('body').css('min-height', '480px')
    setTimeout(scroller, 100)

  $('#message_ready').bind 'click', (event) ->
    event.stopPropagation
    msg = $('#message_input').attr('value')
    $message.html(msg)

    $('#interface').hide()
    setTimeout(scroller, 0)
    $('#output').fadeIn('fast')
    fitSize($message)
    
  $('#output').bind 'click', (event) ->
    $('#output').hide()
    $('#interface').fadeIn('fast')

  $('#message_input').bind 'keydown', (event) ->
    if event.keyCode is 13
      $('#message_ready').trigger('click')


