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

        console.log("entre1");

        scriptPhp.onreadystatechange = function () {
            if(scriptPhp.readyState == 4){
                console.log("entre2");
                document.getElementById('#btnApodo').value = scriptPhp.responseText;
              //  document.miForm.btnApodo.value = scriptPhp.responseText;
            }
        };

        console.log("entre3");
        scriptPhp.open("GET", "Componentes.php", true);
        scriptPhp.send();
    })
});