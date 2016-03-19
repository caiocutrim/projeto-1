'use strict';

var form = $('#form-create-user');

form.submit(function(event) {
  console.log("fui submetido!");
  event.preventDefault();
});
