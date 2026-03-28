# 🚀 CAMBIOS RÁPIDOS - Ejemplos Prácticos

Esta guía te muestra los cambios más comunes paso a paso.

---

## 🎨 CAMBIAR EL COLOR DE TU SITIO

### Paso 1: Abre el archivo `styles.css`

### Paso 2: Busca la línea 9 (cerca del inicio)

### Paso 3: Cambia los valores

**VERDE CORPORATIVO:**
```css
:root {
    --primary-color: #10b981;
    --secondary-color: #059669;
    --accent-color: #34d399;
}
```

**ROJO MODERNO:**
```css
:root {
    --primary-color: #ef4444;
    --secondary-color: #dc2626;
    --accent-color: #f87171;
}
```

**MORADO ELEGANTE:**
```css
:root {
    --primary-color: #8b5cf6;
    --secondary-color: #7c3aed;
    --accent-color: #a78bfa;
}
```

### Paso 4: Guarda el archivo (Ctrl + S)

---

## ✏️ CAMBIAR TU NOMBRE/MARCA

### Paso 1: Abre `index.html`

### Paso 2: Busca la línea 14 (Ctrl + F: "Mi Marca")

### Paso 3: Reemplaza:
```html
<h2>Mi Marca</h2>
```

**POR:**
```html
<h2>Tu Nombre o Empresa</h2>
```

Ejemplo:
```html
<h2>SolucionesWebPro</h2>
```

---

## 📧 CAMBIAR TU EMAIL Y TELÉFONO

### Paso 1: Busca en `index.html` (Ctrl + F: "celusistemas")

### Paso 2: Encontrarás:
```html
<p>celusistemas2723@gmail.com</p>
<p>+3229538931</p>
```

### Paso 3: Reemplaza con tus datos:
```html
<p>tuemailaqui@gmail.com</p>
<p>+573001234567</p>
```

---

## 📱 CAMBIAR NÚMERO DE WHATSAPP

### Paso 1: Busca en `index.html` (Ctrl + F: "wa.me")

### Paso 2: Encontrarás:
```html
<a href="https://wa.me/573229538931?text=...">
```

### Paso 3: Cambia el número:
```html
<a href="https://wa.me/573TUNUMERO?text=Hola,%20quiero%20información">
```

**Formato:** Código país (57 para Colombia) + número sin espacios

**Ejemplos:**
- Colombia: `573001234567`
- México: `525512345678`
- España: `34612345678`

---

## 🔗 AGREGAR TUS REDES SOCIALES

### Paso 1: Busca en `index.html` (Ctrl + F: "social-links")

### Paso 2: Verás:
```html
<a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
<a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
<a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
<a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
```

### Paso 3: Reemplaza `#` con tus enlaces:

**Facebook:**
```html
<a href="https://www.facebook.com/tuperfil" target="_blank">
```

**Instagram:**
```html
<a href="https://www.instagram.com/tuperfil" target="_blank">
```

**LinkedIn:**
```html
<a href="https://www.linkedin.com/in/tuperfil" target="_blank">
```

**Twitter/X:**
```html
<a href="https://twitter.com/tuperfil" target="_blank">
```

---

## 📝 CAMBIAR EL TÍTULO DE LA PÁGINA

### Paso 1: Busca en `index.html` (línea 6)

### Paso 2: Encontrarás:
```html
<title>Mis Servicios Profesionales</title>
```

### Paso 3: Cambia por:
```html
<title>Tu Nombre - Servicios Profesionales</title>
```

Este es el texto que aparece en la pestaña del navegador.

---

## 🖼️ SUBIR TUS PROPIAS IMÁGENES

### 📸 TU IMAGEN PERSONAL YA ESTÁ EN EL SLIDESHOW

He agregado tu foto (técnico con microscopio) al slideshow en la **posición #3**.

**Para que se vea, haz esto:**

1. **Guarda tu imagen** con el nombre: `mi-trabajo.jpg`
2. **Súbela a:**
   - Local: `C:\xampp\htdocs\pagina\` (para probar)
   - Servidor: File Manager → htdocs (cuando esté lista)
3. **¡Listo!** Aparecerá en el slideshow automáticamente

**Lee el archivo:** `COMO_SUBIR_TU_IMAGEN.txt` para instrucciones detalladas.

### Cambiar imágenes del slideshow de fondo

El slideshow ahora tiene **15 imágenes** que cambian automáticamente:
- 💻 Desarrollo web
- ⌨️ Programación
- 🔬 **TU IMAGEN - Reparación con microscopio** ⭐ NUEVA
- 💻 Reparación de laptop 1
- 🔧 Reparación de laptop 2 / Mantenimiento
- 💻 Laptop abierta / Hardware interno
- 📱 Reparación de móviles
- 📷 Cámaras de seguridad
- 🔧 Reparación técnica
- 🛠️ Herramientas de reparación
- 📡 Instalación de sistemas
- 🛠️ Servicio técnico
- 🔒 Seguridad y vigilancia
- 📲 Smartphones
- 💡 Tecnología moderna

**Paso 1:** Busca en `index.html` (Ctrl + F: "hero-slideshow")

**Paso 2:** Verás 15 líneas como esta:
```html
<div class="slide active" style="background-image: url('https://images.unsplash.com/...');"></div>
```

**Paso 3:** Puedes:
- **Usar tus propias imágenes:** Sube imágenes al servidor y cambia la URL por `mi-imagen.jpg`
- **Usar otras imágenes de Unsplash:** Busca en unsplash.com y copia la URL
- **Cambiar la velocidad:** En `script.js` línea 27, cambia `5000` (5 segundos) por otro valor
- **Agregar más imágenes:** Copia una línea completa y pégala con una nueva URL

**📝 TEXTO DE BIENVENIDA:**

El texto "Bienvenido a Mis Servicios" solo aparece en la **primera imagen** y se oculta automáticamente cuando cambian las demás imágenes del slideshow.

**Para que aparezca en todas las imágenes:**
1. Abre `script.js`
2. Busca las líneas 19-23 (las que dicen "Mostrar texto solo en la primera imagen")
3. Elimina o comenta esas 5 líneas

**💡 AJUSTAR BRILLO DE LAS IMÁGENES:**

Si las imágenes se ven muy oscuras o muy claras:

**Archivo:** `styles.css` (busca "hero-overlay")

```css
background: rgba(37, 99, 235, 0.3); /* 👈 Ajusta este número */
```

**Valores recomendados:**
- `0.1` = Imágenes muy visibles, overlay casi invisible
- `0.3` = Suave (actual, recomendado)
- `0.5` = Medio, imágenes un poco oscuras
- `0.7` = Oscuro, imágenes poco visibles
- `0` = Sin overlay, imágenes completamente visibles

### Para proyectos del portafolio

### Paso 1: Sube tus imágenes al servidor

1. Entra al File Manager de InfinityFree
2. Ve a la carpeta `htdocs`
3. Sube tus imágenes (por ejemplo: `mi-foto.jpg`, `proyecto1.jpg`)

### Paso 2: Cambia las referencias en `index.html`

**Busca:**
```html
<img src="https://picsum.photos/400/500" alt="Foto de perfil">
```

**Reemplaza por:**
```html
<img src="mi-foto.jpg" alt="Foto de perfil">
```

**Para proyectos del portafolio:**
```html
<img src="proyecto1.jpg" alt="Proyecto 1">
<img src="proyecto2.jpg" alt="Proyecto 2">
```

---

## 🎯 CAMBIAR TEXTOS DE SERVICIOS

### Paso 1: Busca en `index.html` (Ctrl + F: "Desarrollo Web")

### Paso 2: Verás bloques como:
```html
<div class="servicio-card">
    <div class="icon-box">
        <i class="fas fa-laptop-code"></i>
    </div>
    <h3>Desarrollo Web</h3>
    <p>Creación de sitios web modernos...</p>
</div>
```

### Paso 3: Edita según tu servicio:

**Ejemplo - Diseño Gráfico:**
```html
<div class="servicio-card">
    <div class="icon-box">
        <i class="fas fa-paint-brush"></i>
    </div>
    <h3>Diseño Gráfico</h3>
    <p>Creación de logotipos, branding y material publicitario.</p>
</div>
```

**Ejemplo - Fotografía:**
```html
<div class="servicio-card">
    <div class="icon-box">
        <i class="fas fa-camera"></i>
    </div>
    <h3>Fotografía Profesional</h3>
    <p>Sesiones fotográficas para eventos sociales y corporativos.</p>
</div>
```

---

## 🔍 BUSCAR ÍCONOS

Para cambiar los íconos de servicios:

1. Ve a: **https://fontawesome.com/icons**
2. Busca el ícono que necesitas (ejemplo: "camera", "phone", "code")
3. Copia el código (ejemplo: `fa-camera`)
4. Reemplaza en tu código:

```html
<i class="fas fa-TU-ICONO-AQUI"></i>
```

**Íconos comunes:**
- Cámara: `fa-camera`
- Teléfono: `fa-phone`
- Computadora: `fa-laptop`
- Pincel: `fa-paint-brush`
- Engranaje: `fa-cog`
- Gráfica: `fa-chart-line`
- Mail: `fa-envelope`
- Ubicación: `fa-map-marker-alt`

---

## ⚡ RESUMEN DE ARCHIVOS

**Solo necesitas editar 2 archivos:**

1. **index.html** → Textos, imágenes, enlaces
2. **styles.css** → Colores (solo las primeras líneas)

**NO toques:**
- `script.js` (a menos que quieras cambiar funcionalidades)
- `.htaccess`
- Otros archivos del sistema

---

## 💾 GUARDAR Y SUBIR CAMBIOS

### Si editas en tu PC:
1. Ctrl + S (guardar)
2. Ve al File Manager de InfinityFree
3. Entra a `htdocs`
4. Sube los archivos modificados

### Si editas en el servidor:
1. File Manager → htdocs
2. Click derecho en archivo → Edit
3. Haz cambios
4. Save (guardar)
5. ¡Los cambios se ven inmediatamente!

---

## 🆘 SI ALGO SALE MAL

1. No te preocupes, siempre puedes restaurar
2. Descarga una copia de los archivos originales desde el servidor
3. O pídeme ayuda para recuperar la versión anterior

---

¡Ya estás listo para personalizar tu sitio web! 🎉
