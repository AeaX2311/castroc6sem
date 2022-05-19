$(document).ready(function() {

    $('#btnLimpiar').click(function() {
        $('#parNombre').val('');
        $('#parEmail').val('');
        $('#parContra').val('');
        $('#parApodo').val('');
        $('#parMunicipio').val('');
        $('#parEstado').val('');
        $('#parCP').val('');     
    }) 

    $('#btnRegistrar').click(function() {
        if($.trim($('#parNombre').val()) == "") {
            console.log("A")
            $('#miAlerta').show();                            
        } else {
            console.log("B")
            $('#miModal').modal('show')                           
        }
    }) 

    $('#btnApodo').click(function(){
        console.log('entre')
        var scriptPhp = new XMLHttpRequest();

        scriptPhp.onreadystatechange = function () {
            if(scriptPhp.readyState == 4){
                $('#parApodo').val(scriptPhp.responseText); 
            }
        };

        scriptPhp.open("GET", "Componentes.php", true);
        scriptPhp.send();
    })
    
    $('#btnPromesa').click(function(){

        new Promise(function(resolve, reject){
            var scriptPhp = new XMLHttpRequest();
    
            scriptPhp.onreadystatechange = function () {
                if(scriptPhp.readyState == 4 && scriptPhp.status == 200){
                    resolve(scriptPhp.responseText)
                }
            };
    
            scriptPhp.open("GET", "header.txt", true);
            scriptPhp.send();
        }).then(value => document.getElementById("heade").innerHTML = value);
    })
    
    $('#btnFetch').click(function(){
        fetch('Fetch.php')
        .then(response => response.json())
        .then(data => {
                $('#parNombre').val(data.nombre);
                $('#parEmail').val(data.correoElectronico);
                $('#parContra').val(data.contrasenia);
                $('#parApodo').val(data.apodo);
                $('#parMunicipio').val(data.municipio);
                $('#parEstado').val(data.estado);
                $('#parCP').val(data.cp);      
            }        
        );
    })
});