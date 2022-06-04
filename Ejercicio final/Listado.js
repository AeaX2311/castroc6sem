$(document).ready(function() {

    window.onload = function() {
        $("#listaUsuarios").dataTable({
            ajax: {
                "url" :"Select.php",
                "dataSrc" : "data"
            },
            columns: [
                { data: "correoElectronico" },
                { data: "nombre" },
            ],
            scroller: true,
            deferRender: true,
            rowId: "correoElectronico",
        });

        ocultar("gpEditar");
        mostrar("gpLista");
    };
    
    $('#listaUsuarios tbody').on('dblclick', 'tr', function  ()  {
        //Escuchar doble click en tabla
        const table = $('#listaUsuarios').DataTable();        
        var selected = table.row(this).data();
        // var selectedFull;

        //Buscar registro por PK en la BD
        $.post('SelectWhere.php',{ miCorreo : selected.correoElectronico }, function(data) {
            refrescar(data); //Setear valores
        },'json');

        ocultar("gpLista");
        mostrar("gpEditar");
    });

    $('#btnActualizar').click( function() {
        $.post('Update.php', { 
          correo    : $('#parEmailE').val(), 
          nombre    : $('#parNombreE').val(), 
          apodo     : $('#parApodoE').val(),
          municipio : $('#parMunicipioE').val(),
          estado    : $('#parEstadoE').val(),
          cp        : $('#parCPE').val(),
          mayor     : document.getElementById("parMayorEdadE").checked ? 1 : 0
        }, null, 'json');
    });

    function refrescar(objeto) {
        if(objeto.correoElectronico == null) {
            $('#msjNoEncontrado').modal('show');                          
            return;
        }

        $('#parNombreE').val(objeto.nombre);
        $('#parEmailE').val(objeto.correoElectronico);
        $('#parApodoE').val(objeto.apodo);
        $('#parMunicipioE').val(objeto.municipio);
        $('#parEstadoE').val(objeto.estado);
        $('#parCPE').val(objeto.cp);
        document.getElementById("parMayorEdadE").checked = objeto.mayorEdad == 1;
    };

    function ocultar(id) {
        var elemento = document.getElementById(id);
        elemento.style.display = "none";
    };

    function mostrar(id) {
        var elemento = document.getElementById(id);
        elemento.style.display = "block";
    };
});

