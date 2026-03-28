# Página Web de Servicios

## 🚀 Descripción
Página web profesional y moderna para ofrecer servicios. Diseño responsive que se adapta a todos los dispositivos.

## ✨ Características
- ✅ Diseño moderno y profesional
- ✅ 100% Responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves
- ✅ Formulario de contacto
- ✅ Sección de servicios personalizable
- ✅ Iconos de Font Awesome
- ✅ Menú de navegación con efecto hamburguesa en móvil

## 📁 Archivos
- `index.html` - Página principal
- `styles.css` - Estilos y diseño
- `script.js` - Funcionalidades interactivas

## 🎨 Cómo Personalizar

### 1. Cambiar el nombre de tu marca
Edita en `index.html` línea 16:
```html
<h2>Mi Marca</h2>
```

### 2. Modificar los servicios
En `index.html`, busca la sección `servicios-grid` (líneas 45-100) y edita:
- Iconos (usa iconos de https://fontawesome.com/icons)
- Títulos de servicios
- Descripciones

### 3. Actualizar información de contacto
En la sección de contacto (líneas 140-165), actualiza:
- Email
- Teléfono
- Ubicación
- Enlaces de redes sociales

### 4. Cambiar foto de perfil
Reemplaza la URL en línea 118:
```html
<img src="https://via.placeholder.com/400x500" alt="Foto de perfil">
```
Puedes usar una ruta local como: `<img src="mi-foto.jpg" alt="Foto de perfil">`

### 5. Modificar colores
En `styles.css` (líneas 8-16), cambia las variables de color:
```css
--primary-color: #2563eb;    /* Color principal */
--secondary-color: #1e40af;  /* Color secundario */
--accent-color: #3b82f6;     /* Color de acento */
```

### 6. Personalizar estadísticas
En `index.html` (líneas 125-137), modifica los números y textos según tus datos reales.

## 🌐 Cómo Ver la Página

### Opción 1: XAMPP
1. Asegúrate de que XAMPP esté ejecutándose
2. Abre tu navegador
3. Ve a: `http://localhost/pagina/`

### Opción 2: Abrir directamente
Haz doble clic en `index.html` para abrirlo en tu navegador

## 📧 Configurar el Formulario de Contacto

El formulario actualmente muestra una alerta. Para que funcione de verdad, necesitas:

### Opción 1: PHP (recomendado con XAMPP)
Crea un archivo `enviar.php`:
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    
    $to = "tu-email@ejemplo.com";
    $subject = "Nuevo mensaje de contacto: " . $asunto;
    $body = "Nombre: $nombre\nEmail: $email\n\nMensaje:\n$mensaje";
    
    mail($to, $subject, $body);
    echo "Mensaje enviado correctamente";
}
?>
```

Luego modifica el formulario en `index.html`:
```html
<form class="contacto-form" action="enviar.php" method="POST">
```

### Opción 2: EmailJS (sin servidor)
1. Regístrate en https://www.emailjs.com/
2. Sigue sus instrucciones para integrar el formulario

## 🎯 Próximos Pasos
1. Personaliza todos los textos e imágenes
2. Agrega tu propio logo
3. Configura el formulario de contacto
4. Optimiza las imágenes para web
5. Agrega más contenido según tus necesidades

## 💡 Sugerencias
- Toma fotos profesionales de tus trabajos para agregarlas
- Agrega testimonios de clientes satisfechos
- Crea una galería de proyectos/portfolio
- Considera agregar un blog para mejorar SEO

## 📱 Compatibilidad
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

¡Éxito con tu página web! 🎉
