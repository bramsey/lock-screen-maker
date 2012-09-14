scroller = ->
  window.scrollTo(0,0)

  #window.addEventListener 'load', ->
  #setTimeout(scroller, 0)

$(document).ready ->
  unless window.navigator.standalone
    $('body').css('min-height', '480px')
    setTimeout(scroller, 100)

  $('#message_ready').bind 'click', (event) ->
    event.stopPropagation
    $('#message').html($('#message_input').attr('value'))
    
    $('#interface').hide()
    setTimeout(scroller, 0)
    $('#output').fadeIn('fast')
    
  $('#output').bind 'click', (event) ->
    $('#output').hide()
    $('#interface').fadeIn('fast')

  $('#message_input').bind 'keydown', (event) ->
    if event.keyCode is 13
      $('#message_ready').trigger('click')


