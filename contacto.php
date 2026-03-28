<?php
// Configuración
$destino = "celusistemas2723@gmail.com";
$nombre = isset($_POST['nombre']) ? strip_tags($_POST['nombre']) : '';
$email = isset($_POST['email']) ? strip_tags($_POST['email']) : '';
$asunto = isset($_POST['asunto']) ? strip_tags($_POST['asunto']) : '';
$mensaje = isset($_POST['mensaje']) ? strip_tags($_POST['mensaje']) : '';

// Validación básica
if ($nombre && $email && $asunto && $mensaje) {
    $cabeceras = "From: $nombre <$email>\r\n" .
                 "Reply-To: $email\r\n" .
                 "Content-Type: text/plain; charset=UTF-8\r\n";
    $cuerpo = "Nombre: $nombre\nEmail: $email\nAsunto: $asunto\nMensaje:\n$mensaje";
    
    if (mail($destino, "Contacto desde la web: $asunto", $cuerpo, $cabeceras)) {
        echo "<script>alert('¡Mensaje enviado correctamente!');window.location.href='index.html#contacto';</script>";
    } else {
        echo "<script>alert('Hubo un error al enviar el mensaje. Intenta de nuevo.');window.history.back();</script>";
    }
} else {
    echo "<script>alert('Por favor completa todos los campos.');window.history.back();</script>";
}
?>
