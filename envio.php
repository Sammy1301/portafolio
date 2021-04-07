<?php
//datos del form
$nombre = htmlentities($_POST['nombre']);
$email = htmlentities($_POST['email']);
$mensaje = htmlentities($_POST['mensaje']);
//datos fijos
$destinatario = "samtrabajo13@gmail.com";
$asunto = "Mensaje desde mi portafolio";

$message = "De: $nombre \r\n";
$message .= "Correo: $email \r\n";
$message .= "Mensaje: $mensaje";

$enviado = mail($destinatario, $asunto, $message);

if($enviado == true){
    echo "success";
    header("location:index.html");
}else{
    echo "fail";
}
    
    
?>