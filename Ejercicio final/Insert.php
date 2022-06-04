<?php
    include("Conexion.php");

    $usuario = array(
        "nombre" => $_POST['nombre'],
        "correo" => $_POST['correo'],
        "contrasena" => $_POST['contra'],
        "apodo" => $_POST['apodo'],
        "municipio" => $_POST['municipio'],
        "estado" => $_POST['estado'],
        "codigoPostal" => $_POST['cp'],
        "mayorEdad" => $_POST['mayor']
    );

    $conexion = conectarBD();

    $query = 
    "INSERT INTO usuario (
        nombre,
        correo_electronico,
        contrasenia,
        apodo,
        municipio,
        estado,
        codigo_postal,
        mayor_edad
    ) VALUES (
        :nombre,
        :correo,
        :contra,
        :apodo,
        :municipio,
        :estado,
        :cp,
        :mayor
    ); ";

    $stmt = $conexion -> prepare($query);
        $stmt -> bindValue(':nombre', $usuario["nombre"]);
        $stmt -> bindValue(':correo', $usuario["correo"]);
        $stmt -> bindValue(':contra', $usuario["contrasena"]);
        $stmt -> bindValue(':apodo', $usuario["apodo"]);
        $stmt -> bindValue(':municipio', $usuario["municipio"]);
        $stmt -> bindValue(':estado', $usuario["estado"]);
        $stmt -> bindValue(':cp', $usuario["codigoPostal"]);
        $stmt -> bindValue(':mayor', $usuario["mayorEdad"]);
    $stmt -> execute();
?>