$(document).ready(function() {
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
        var scriptPhp = new XMLHttpRequest();

        scriptPhp.onreadystatechange = function () {
            if(scriptPhp.readyState == 4){
                document.getElementById('#parApodo').value = scriptPhp.responseText;
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

});