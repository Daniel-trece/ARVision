<?php

ini_set('display_erros', 1);
error_reporting(E_ALL);

include('db.php');

$nombre=$_POST['nombre'];
$email=$_POST['email'];
$mensaje=$_POST['comentario'];

$consulta="INSERT INTO `mensajes` (`nombre`, `email`, `comentario`) 
VALUES ('$nombre', '$email', '$mensaje')";

$resultado=mysqli_query($conexion, $consulta) or die("error de registro");

mysqli_close($conexion);

?>