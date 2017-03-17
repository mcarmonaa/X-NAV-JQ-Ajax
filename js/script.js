$(document).ready(function() {
  'use strict';

  $.ajax({
      url: '/embedded.html',
    })
    .done(function(data) {
      $('#myDiv').html(data);
    })
    .fail(function() {
      console.log('error');
    });

});
