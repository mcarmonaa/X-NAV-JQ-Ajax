$(document).ready(function() {
  'use strict';

  $('#myInput').click(function(event) {
    $.ajax({
        url: 'https://mcarmonaa.github.io/X-NAV-JQ-Ajax/embedded.html',
        // url: '/embedded.html',
      })
      .done(function(data) {
        $('#myDiv').html(data);
      })
      .fail(function() {
        console.log('error');
      });

    event.preventDefault(event);
  });
});
