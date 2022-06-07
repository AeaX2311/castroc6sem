$(document).ready(function() {

    $('#btnLimpiar').click(function() {
        $('#parNombre').val('');
        $('#parEmail').val('');
        $('#parContra').val('');
        $('#parApodo').val('');
        $('#parMunicipio').val('');
        $('#parEstado').val('');
        $('#parCP').val('');     
        document.getElementById("parMayorEdad").checked = false;
    }) 

    $('#btnRegistrar').click( function() {
      var val = $.post('Insert.php', { 
        nombre    : $('#parNombre').val(), 
        correo    : $('#parEmail').val(),
        contra    : $('#parContra').val(),
        apodo     : $('#parApodo').val(),
        municipio : $('#parMunicipio').val(),
        estado    : $('#parEstado').val(),
        cp        : $('#parCP').val(),
        mayor     : document.getElementById("parMayorEdad").checked ? 1 : 0
      }, null, 'json');

      console.log(val)
    });

  (function () {
    'use strict';
    window.addEventListener('load', function () {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
});