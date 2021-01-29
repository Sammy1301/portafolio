<?php
$nombre = htmlentities($_POST['nombre']);
$email = htmlentities($_POST['email']);
$mensaje = htmlentities($_POST['mensaje']);

mail('samtrabajo13@gmail.com', $nombre, $mensaje );

?>