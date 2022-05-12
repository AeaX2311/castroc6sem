<?php
   // echo "User";
    //echo date("i:s");

    $registro['nombre']  ='Alan Castro';
    $registro['correoElectronico'] ='alan.castro@tec.com';
    $registro['contrasenia']       ='1234';
    $registro['apodo'] ='Alansillo';
    $registro['municipio'] ='Nuevo Laredo';
    $registro['estado']     ='Tamaulipas';
    $registro['cp']     ='881000';
    
    $registroJson = json_encode($registro);
    echo $registroJson;
?>