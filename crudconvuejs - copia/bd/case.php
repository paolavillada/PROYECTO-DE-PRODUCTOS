<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$description = (isset($_POST['description'])) ? $_POST['description'] : '';
$reference = (isset($_POST['reference'])) ? $_POST['reference'] : '';
$stock = (isset($_POST['stock'])) ? $_POST['stock'] : '';
$currency = (isset($_POST['currency'])) ? $_POST['currency'] : '';
$price = (isset($_POST['price'])) ? $_POST['price'] : '';
$imagen = (isset($_POST['imagen'])) ? $_POST['imagen'] : '';



switch($opcion){
    case 1:
        $consulta = "INSERT INTO datos (description, reference, stock,currency,price,imagen) VALUES('$description', '$reference', '$stock', '$currency','$price','$imagen') ";	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                
        break;
    case 2:
        $consulta = "UPDATE datos SET description='$description', reference='$reference', stock='$stock', currency='$currency',price='$price' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;        
    case 3:
        $consulta = "DELETE FROM datos WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;         
    case 4:
        $consulta = "SELECT id, description, reference, stock,currency,price,imagen FROM datos";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    
}
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = NULL;