<?php
    include("Conexion.php");

    $correo = $_POST['correo'];
    $conexion = conectarBD();

    $query = 
    "DELETE FROM 
         usuario
     WHERE correo_electronico = :correo;";

    $stmt = $conexion -> prepare($query);
    $stmt -> bindValue(':correo', $correo);

    try {
        $stmt -> execute();
    } catch (PDOException $e) {
        echo json_encode(-1);
    }

    echo json_encode(1);
?>