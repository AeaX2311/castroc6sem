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

    $('#btnRegistrar').click(function() {
       
//$('#msjExito').modal('show');                          
    }) 

    function refrescar(objeto) {
        if(objeto.correoElectronico == null) {
            $('#msjNoEncontrado').modal('show');                          
            return;
        }
        $('#parNombre').val(objeto.nombre);
        $('#parEmail').val(objeto.correoElectronico);
        $('#parContra').val(objeto.contrasenia);
        $('#parApodo').val(objeto.apodo);
        $('#parMunicipio').val(objeto.municipio);
        $('#parEstado').val(objeto.estado);
        $('#parCP').val(objeto.cp);
        document.getElementById("parMayorEdad").checked = objeto.mayorEdad == 1;
    };
    
    $('#btnPorDefecto').click( function() {
        let parBusqueda = $('#parBusqueda').val();

        $.post('Conexion.php',{ miCorreo:parBusqueda }, function(data) {
            refrescar(data);
          },'json');
    });


    (function() {
        'use strict';
        window.addEventListener('load', function() {
          var forms = document.getElementsByClassName('needs-validation');
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
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