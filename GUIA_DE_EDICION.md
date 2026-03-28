# 📝 GUÍA DE EDICIÓN - Tu Sitio Web

Esta guía te ayudará a realizar las modificaciones más comunes en tu sitio web.

---

## 🎨 CÓMO CAMBIAR COLORES

**Archivo:** `styles.css` (líneas 9-16)

```css
:root {
    --primary-color: #2563eb;      /* 👈 Color principal (azul) */
    --secondary-color: #1e40af;    /* 👈 Color secundario (azul oscuro) */
    --accent-color: #3b82f6;       /* 👈 Color de acento */
}
```

**Colores sugeridos:**
- Verde: `#10b981`
- Rojo: `#ef4444`
- Naranja: `#f97316`
- Morado: `#8b5cf6`

---

## ✏️ CÓMO CAMBIAR TEXTOS

### Logo de la marca
**Archivo:** `index.html` (línea 15)
```html
<h2>Mi Marca</h2>  <!-- 👈 Cambia "Mi Marca" por tu nombre -->
```

### Título principal (Hero)
**Archivo:** `index.html` (línea 38)
```html
<h1>Bienvenido a Mis Servicios</h1>  <!-- 👈 Tu mensaje principal -->
<p>Soluciones profesionales adaptadas a tus necesidades</p>  <!-- 👈 Subtítulo -->
```

### Servicios
**Archivo:** `index.html` (líneas 47-90)
Busca cada `<div class="servicio-card">` y edita:
- `<h3>` - Título del servicio
- `<p>` - Descripción del servicio
- `<i class="fas fa-XXXX">` - Ícono (busca íconos en fontawesome.com)

### Información de contacto
**Archivo:** `index.html` (líneas 132-151)
```html
<p>celusistemas2723@gmail.com</p>  <!-- 👈 Tu email -->
<p>+3229538931</p>                 <!-- 👈 Tu teléfono -->
<p>Guamo, Colombia</p>              <!-- 👈 Tu ubicación -->
```

---

## 🖼️ CÓMO CAMBIAR IMÁGENES

### Slideshow de fondo (Hero)
**Archivo:** `index.html` (líneas 36-50)

Las imágenes cambian automáticamente cada 5 segundos. Ahora hay **15 imágenes**:
1. 💻 Desarrollo web
2. ⌨️ Programación
3. 🔬 **TU IMAGEN - Reparación con microscopio** ⭐
4. 💻 Reparación de laptop 1
5. 🔧 Reparación de laptop 2 / Mantenimiento
6. 💻 Laptop abierta / Hardware
7. 📱 Reparación de móviles
8. 📷 Cámaras de seguridad
9. 🔧 Reparación técnica
10. 🛠️ Herramientas de reparación
11. 📡 Instalación de sistemas
12. 🛠️ Servicio técnico
13. 🔒 Seguridad y vigilancia
14. 📲 Smartphones
15. 💡 Tecnología moderna

**Para que tu imagen funcione:**
Sube el archivo `mi-trabajo.jpg` a la carpeta `htdocs` del servidor.
Lee: `COMO_SUBIR_TU_IMAGEN.txt` para instrucciones paso a paso.

**Para cambiar las imágenes:**
```html
<div class="slide" style="background-image: url('TU-URL-AQUI');"></div>
```

**Velocidad del cambio:**
**Archivo:** `script.js` (línea 27)
```javascript
setInterval(nextSlide, 5000); // 👈 5000 = 5 segundos
```
Cambia `5000` por:
- `3000` para 3 segundos (más rápido, ideal con muchas imágenes)
- `7000` para 7 segundos
- `10000` para 10 segundos

**Texto de bienvenida:**
El texto "Bienvenido a Mis Servicios" solo aparece en la **primera imagen** del slideshow y se oculta automáticamente en las demás imágenes para que se vean mejor.

**Para mostrar el texto en todas las imágenes:**
- Abre `script.js`
- Busca y elimina las líneas 19-23 (las que dicen "Mostrar texto solo en la primera imagen")

### Foto de perfil
**Archivo:** `index.html` (línea 101)
```html
<img src="https://picsum.photos/400/500" alt="Foto de perfil">
```
Reemplaza la URL por:
- Tu propia imagen subida al servidor
- Ejemplo: `<img src="mi-foto.jpg" alt="Foto de perfil">`

### Imágenes del portafolio
**Archivo:** `index.html` (líneas 117, 130, 143, etc.)
```html
<img src="https://picsum.photos/400/300?random=1" alt="Proyecto 1">
```
Cambia por tus propias imágenes de proyectos.

---

## 📱 CÓMO CAMBIAR EL NÚMERO DE WHATSAPP

**Archivo:** `index.html` (línea 187)
```html
<a href="https://wa.me/573229538931?text=Hola...">
              👆 Cambia este número
```

**Formato:** `573229538931` (Código de país + número sin espacios)

---

## 🎯 CÓMO EDITAR TESTIMONIOS

**Archivo:** `index.html` (líneas 226-254)

Para cada testimonio, edita:
```html
<p class="testimonio-texto">"Tu testimonio aquí"</p>
<h4 class="testimonio-nombre">Nombre del Cliente</h4>
<p class="testimonio-cargo">Cargo, Empresa</p>
```

---

## 📋 CÓMO AGREGAR O QUITAR SERVICIOS

### Para agregar un servicio:

1. Copia este bloque completo:
```html
<div class="servicio-card">
    <div class="icon-box">
        <i class="fas fa-CODE-DEL-ICONO"></i>
    </div>
    <h3>Nombre del Servicio</h3>
    <p>Descripción del servicio.</p>
</div>
```

2. Pégalo dentro de `<div class="servicios-grid">` (línea 49)

3. Busca íconos en: https://fontawesome.com/icons

### Para quitar un servicio:
Elimina todo el bloque `<div class="servicio-card">...</div>`

---

## 🔗 CÓMO CAMBIAR ENLACES DE REDES SOCIALES

**Archivo:** `index.html` (líneas 153-156)
```html
<a href="https://www.facebook.com/tu-perfil" target="_blank">
<a href="https://twitter.com/tu-perfil" target="_blank">
<a href="https://linkedin.com/in/tu-perfil" target="_blank">
<a href="https://instagram.com/tu-perfil" target="_blank">
```

---

## 💾 CÓMO APLICAR LOS CAMBIOS

### Si editas en tu PC:
1. Guarda los archivos (Ctrl + S)
2. Abre el File Manager de InfinityFree
3. Ve a la carpeta `htdocs`
4. Sube los archivos modificados (reemplaza los anteriores)

### Si editas en el servidor:
1. Ve al File Manager de InfinityFree
2. Entra a `htdocs`
3. Click derecho en el archivo → "Edit" o "Editar"
4. Haz tus cambios
5. Guarda

---

## 🎨 COLORES PREDEFINIDOS POPULARES

### Azul profesional (actual):
```css
--primary-color: #2563eb;
--secondary-color: #1e40af;
```

### Verde corporativo:
```css
--primary-color: #10b981;
--secondary-color: #059669;
```

### Rojo moderno:
```css
--primary-color: #ef4444;
--secondary-color: #dc2626;
```

### Morado elegante:
```css
--primary-color: #8b5cf6;
--secondary-color: #7c3aed;
```

### Naranja energético:
```css
--primary-color: #f97316;
--secondary-color: #ea580c;
```

---

## ⚠️ IMPORTANTE

- Siempre haz una copia de seguridad antes de modificar
- Guarda los cambios con Ctrl + S
- Prueba tu sitio localmente antes de subir (abre index.html en el navegador)
- Si algo sale mal, puedes restaurar los archivos originales

---

## 📞 ¿NECESITAS AYUDA?

Si necesitas hacer cambios más complejos o tienes dudas, ¡pregúntame!

---

**Última actualización:** Marzo 23, 2026
