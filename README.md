# Cambios físicos — Método F90

Página de transformaciones físicas de **Álvaro Cobos / Método F90**.
HTML, CSS y JavaScript puro: sin frameworks, sin dependencias y sin compilar nada.
Se sube tal cual a cualquier hosting.

Incluye hombres y mujeres, con filtro para que cada visita vea los cambios
que le interesan. La sección de testimonios en vídeo está maquetada pero
comentada, lista para activarla cuando tengas los vídeos.

---

## 1. Poner tus datos (2 minutos)

Abre **`assets/data/cambios.js`** y edita el bloque `CONFIG` de arriba:

```js
whatsapp: "34600000000",   // tu número con prefijo, sin + ni espacios
instagram: "alvarocobos",  // tu usuario, sin la @
urlAplicar: "",            // opcional: Typeform / Calendly / formulario
```

Todos los botones de la página (cabecera, portada, fichas, CTA final y el botón
flotante) apuntan solos a WhatsApp con un mensaje ya escrito. Si rellenas
`urlAplicar`, todos apuntarán ahí en vez de a WhatsApp.

---

## 2. Subir las fotos

| Archivo | Qué es | Medidas |
|---|---|---|
| `assets/img/alvaro.jpg` | Tu foto de perfil (la redonda de arriba) | Cuadrada, ~300×300 px |
| `assets/img/og.jpg` | Miniatura al compartir el enlace | 1200×630 px |
| `assets/img/cambios/<slug>-antes.jpg` | El "antes" de cada caso | Vertical 3:4, ~900×1200 px |
| `assets/img/cambios/<slug>-despues.jpg` | El "después" de cada caso | Vertical 3:4, ~900×1200 px |

Los `slug` actuales son: `jose-luis`, `monica`, `luciana`, `alvaro`, `juanjo`.
Por ejemplo, para José Luis:

```
assets/img/cambios/jose-luis-antes.jpg
assets/img/cambios/jose-luis-despues.jpg
```

Mientras falte una foto, la web muestra en su hueco un recuadro con el nombre
exacto del archivo que tienes que subir. Así no hay forma de equivocarse.

**Recomendaciones de foto**
- Mismo encuadre, misma distancia y luz parecida en el antes y el después.
- Comprime antes de subir (con [Squoosh](https://squoosh.app) o similar):
  por debajo de 300 KB por foto para que la página vuele.
- Sube solo fotos con el permiso del cliente.

---

## 3. Añadir un cambio nuevo

En `assets/data/cambios.js`, dentro de `CAMBIOS`, copia un bloque y cambia
los datos (al final del array tienes una plantilla comentada lista para usar):

```js
{
  slug: "maria",              // define el nombre de las fotos
  nombre: "María",
  genero: "mujer",            // "hombre" | "mujer"  → alimenta el filtro
  tipo: "perdida",            // "perdida" | "recomposicion" | "musculo"
  titular: "−18 kg",          // el dato potente
  pesoAntes: "88 KG",         // opcional
  pesoDespues: "70 KG",       // opcional
  duracion: "7 meses",
  resumen: "Una línea corta y potente.",
  historia: "El texto largo que se ve al abrir la ficha.",
  tags: ["Pérdida de grasa", "Cero rebote"]
}
```

Sube sus dos fotos como `maria-antes.jpg` y `maria-despues.jpg`. Ya está.

**Sobre la chapa que sale encima de las fotos:**
si rellenas `pesoAntes` y `pesoDespues`, se ve el formato `88 KG | 70 KG`.
Si no los pones, se ve el `titular` (útil para recomposiciones, donde el peso
no cuenta la historia).

---

## 4. Cambiar el color de marca

En `assets/css/styles.css`, las tres primeras variables:

```css
--accent:      #E85D04;   /* botones, titulares y detalles */
--accent-ink:  #B24400;   /* variante oscura, para texto pequeño */
--accent-soft: #FFF1E6;   /* fondos suaves */
```

Cambia esas tres y toda la web se adapta.

---

## 5. Testimonios en vídeo (cuando los tengas)

En `index.html` hay una sección de vídeos ya maquetada y comentada
(busca `TESTIMONIOS EN VÍDEO`). Borra las dos líneas del comentario HTML,
pega los ID de YouTube y funciona. El CSS ya está hecho.

---

## 6. Ver la página

No necesita servidor: haz doble clic en `index.html`.
Si prefieres servirla en local:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

---

## 7. Publicarla

- **GitHub Pages** → Settings › Pages › Branch: `main` / carpeta `/ (root)`.
- **Netlify / Vercel** → arrastra la carpeta, sin configuración.
- **WordPress u otra web** → súbela por FTP a una carpeta `/cambios/`
  y quedará en `tudominio.com/cambios/`.

---

## Estructura

```
index.html                  la página
assets/css/styles.css       diseño (y el color de marca)
assets/js/main.js           lógica (no hace falta tocarlo)
assets/data/cambios.js      ← CONTENIDO: config + casos
assets/img/                 ← tu foto y la miniatura
assets/img/cambios/         ← las fotos antes/después
```
