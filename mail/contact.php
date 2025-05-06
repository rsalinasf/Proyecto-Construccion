<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Reemplaza estos datos
$to = 'contacto@constructorabucalemu.cl'; // tu correo 

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$body = "Nombre: $name\n";
$body = "Asunto: $subject\n";
$body .= "Email: $email\n\n";
$body .= "Mensaje:\n$message";

$headers = "From: contacto@constructorabucalemu.cl\r\n"; // correo válido
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo "OK";
} else {
    echo "No se pudo enviar el mensaje.";
}
