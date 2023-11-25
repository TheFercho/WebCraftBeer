<?php
$destinatario="info@lombardbrewery.com";
$nombre= $_POST["Nombre"];
$correo= $_POST["email"];
$telefono= $_POST["telefono"];
$mensaje= $_POST["mensaje"];

$content="Nombre: " . $nombre ."\nemail: ". $correo ."\ntelefono: " . $telefono . "\nmensaje: " . $mensaje;
mail($destinatario,"contact", $content);
header("Location:gracias.html");
?>