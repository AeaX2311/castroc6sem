<?php
    function conectarBD() {
        $hostname='localhost';
        $database='19100159alanc';
        $username='root';
        $password='';
        $port='3306';
        
        try {
            return new PDO("mysql:host=$hostname; dbname=$database; port=$port", $username, $password);
        } catch(PDOException $e) {
            echo "Error de conexion a la base de datos";
            echo $e -> getMessage();
            exit();
        }
    }
?>  