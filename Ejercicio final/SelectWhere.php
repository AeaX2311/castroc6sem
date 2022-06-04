<?php
    include("Conexion.php");
    $correo = $_POST['miCorreo'];

    try {
        $conexion = conectarBD();
        $query = 
        "SELECT 
            u.correo_electronico AS correoElectronico,
            u.nombre AS nombre,
            u.apodo AS apodo,
            u.mayor_edad AS mayorEdad,
            u.municipio AS municipio,
            u.estado AS estado,
            u.codigo_postal AS cp
        FROM usuario u
        WHERE u.correo_electronico = '" .$correo ."'";
        
        $consulta = $conexion -> prepare($query);
        $consulta -> execute();
        $resultado = $consulta -> fetch(PDO::FETCH_ASSOC);
        $consulta -> closeCursor();
    } catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e -> getMessage();
    }

    echo json_encode($resultado);
?>