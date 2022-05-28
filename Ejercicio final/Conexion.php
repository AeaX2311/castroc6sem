<?php
    $correo = $_POST['miCorreo'];

    $hostname='localhost';
    $database='19100159alanc';
    $username='root';
    $password='';
    $port='3306';
    
    try {
        $con = new PDO("mysql:host=$hostname; dbname=$database; port=$port", $username, $password);
    } catch(PDOException $e) {
        echo "Error de conexion a la base de datos";
        echo $e->getMessage();
        exit();
    }

    try {
        $consultaSql = 
        "SELECT 
            u.correo_electronico AS correoElectronico,
            u.nombre AS nombre,
            u.contrasenia AS contrasenia,
            u.apodo AS apodo,
            u.mayor_edad AS mayorEdad,
            u.municipio AS municipio,
            u.estado AS estado,
            u.codigo_postal AS cp
        FROM usuario u
        WHERE u.correo_electronico = '" .$correo ."'";
        
        $consulta = $con -> prepare($consultaSql);
        $consulta -> execute();
        $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        $consulta->closeCursor();
        
    } catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();
    }
    
    echo json_encode($resultado);
?>