
    document.getElementById('json').addEventListener('click', (e) => {
        $.post('Componentes.php',{},function(data){

            console.log(data)

            $('#parNombre').val(data.nombre);
            $('#parEmail').val(data.correoElectronico);
            $('#parContra').val(data.contrasenia);
            $('#parApodo').val(data.apodo);
            $('#parMunicipio').val(data.municipio);
            $('#parEstado').val(data.estado);
            $('#parCP').val(data.cp);

        },'json');
    })