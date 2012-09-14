scroller = ->
  window.scrollTo(0,0)

window.addEventListener 'load', ->
  setTimeout(scroller, 0)

$(document).ready ->
  $('#message_ready').bind 'click', (event) ->
    event.stopPropagation
    $('#message').html($('#message_input').attr('value'))
    
    $('#interface').hide()
    $('#output').fadeIn('fast')
    
  $('#output').bind 'click', (event) ->
    $('#output').hide()
    $('#interface').fadeIn('fast')

  $('#message_input').bind 'keydown', (event) ->
    if event.keyCode is 13
      $('#message_ready').trigger('click')


