<?php
    include("Conexion.php");

    $usuario = array (
        "correo" => $_POST['correo'],
        "nombre" => $_POST['nombre'],
        "apodo" => $_POST['apodo'],
        "municipio" => $_POST['municipio'],
        "estado" => $_POST['estado'],
        "codigoPostal" => $_POST['cp'],
        "mayorEdad" => $_POST['mayor']
    );

    // echo $usuario["correo"];
    $conexion = conectarBD();

    $query = 
    "UPDATE usuario SET
        nombre = :nombre,
        apodo = :apodo,
        municipio = :municipio,
        estado = :estado,
        codigo_postal = :cp,
        mayor_edad = :mayor
    WHERE correo_electronico = :correo;";

    $stmt = $conexion -> prepare($query);
        $stmt -> bindValue(':correo', $usuario["correo"]);
        $stmt -> bindValue(':nombre', $usuario["nombre"]);
        $stmt -> bindValue(':apodo', $usuario["apodo"]);
        $stmt -> bindValue(':municipio', $usuario["municipio"]);
        $stmt -> bindValue(':estado', $usuario["estado"]);
        $stmt -> bindValue(':cp', $usuario["codigoPostal"]);
        $stmt -> bindValue(':mayor', $usuario["mayorEdad"]);

    try {
        $stmt -> execute();
    } catch (PDOException $e) {
        echo json_encode(-1);
    }

    echo json_encode(1);
?>