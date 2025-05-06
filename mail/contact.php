<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Reemplaza estos datos
$to = 'contacto@constructorabucalemu.cl'; // tu correo real de DonWeb

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "info@example.com"; // Change this email to your //
$subject = "$m_subject:  $name";
$body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\n\nEmail: $email\n\nSubject: $m_subject\n\nMessage: $message";
$header = "From: $email";
$header .= "Reply-To: $email";	

if (mail($to, $subject, $body, $headers)) {
    echo "OK";
} else {
    echo "No se pudo enviar el mensaje.";
}
