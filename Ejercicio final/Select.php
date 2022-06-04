<?php
    include("Conexion.php");
    try {
        $conexion = conectarBD();
        $query = 
        "SELECT 
            u.correo_electronico AS correoElectronico,
            u.nombre AS nombre,
            u.contrasenia AS contrasenia,
            u.apodo AS apodo,
            u.mayor_edad AS mayorEdad,
            u.municipio AS municipio,
            u.estado AS estado,
            u.codigo_postal AS cp
        FROM usuario u";
        
        $consulta = $conexion -> prepare($query);
        $consulta->execute();
    
        $usuariosResponse = array();

        if($consulta->rowCount() > 0){
            while($row = $consulta->fetch()){
                $usuario['correoElectronico'] = $row['correoElectronico'];
                $usuario['nombre'] = $row['nombre'];
                
                array_push($usuariosResponse, $usuario);
            }
           
            echo json_encode(array("data" => $usuariosResponse));
        }

    } catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();
    }
?>