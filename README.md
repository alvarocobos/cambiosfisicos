# Cambios físicos — Método F90

Página de transformaciones físicas de **Álvaro Cobos / Método F90**.
HTML, CSS y JavaScript puro: sin frameworks, sin dependencias y sin compilar nada.
Se sube tal cual a cualquier hosting.

Usa **el mismo sistema de marca que `bienvenida.alvarocobos.com`**: mismos
colores, misma tipografía (Inter + Instrument Serif), mismos botones, mismos
radios y el mismo logo. Las dos páginas se ven como la misma web.

Incluye hombres y mujeres, con filtro para que cada visita vea los cambios
que le interesan. La sección de testimonios en vídeo está maquetada pero
comentada, lista para activarla cuando tengas los vídeos.

---

## 1. Poner tus datos (2 minutos)

Abre **`assets/data/cambios.js`** y edita el bloque `CONFIG` de arriba:

```js
whatsapp: "34600000000",   // tu número con prefijo, sin + ni espacios
instagram: "alvarocobos",  // tu usuario, sin la @
email: "tu@correo.com",    // el botón del correo; vacío ("") y desaparece
asuntoEmail: "...",        // el asunto con el que se abre el correo
urlCalculadora: "...",     // tu calculadora de calorías; vacío y desaparece
urlAplicar: "",            // opcional: Typeform / Calendly / formulario
```

Todos los botones de la página (cabecera, portada, fichas, CTA final y el botón
flotante) apuntan solos a WhatsApp con un mensaje ya escrito. Si rellenas
`urlAplicar`, todos apuntarán ahí en vez de a WhatsApp.

Abajo a la derecha hay dos botones siempre a mano: el de WhatsApp, en naranja,
y al lado el del correo, más discreto. El correo también sale en el pie. Si
dejas `email` vacío, los dos enlaces del correo se quitan solos.

La calculadora de calorías tiene tres accesos: el menú de arriba, una tarjeta
dentro de la página (después de «La báscula miente») y el pie. Se abre en otra
pestaña, porque vive en su propia web. Si dejas `urlCalculadora` vacío, los tres
desaparecen, la tarjeta incluida.

---

## 2. Subir las fotos

| Archivo | Qué es | Medidas |
|---|---|---|
| `assets/img/alvaro.jpg` | Tu foto de perfil (la redonda de arriba) | Cuadrada, ~300×300 px |
| `assets/img/og-f90.jpg` | Miniatura al compartir el enlace | 1200×630 px |
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
  tags: ["Pérdida de grasa", "Cero rebote"],
  esMio: false                // true solo para tus propios cambios
}
```

Sube sus dos fotos como `maria-antes.jpg` y `maria-despues.jpg`. Ya está.

**Sobre la chapa que sale encima de las fotos:**
si rellenas `pesoAntes` y `pesoDespues`, se ve el formato `88 KG | 70 KG`.
Si no los pones, se ve el `titular` (útil para recomposiciones, donde el peso
no cuenta la historia).

---

## 4. La marca

Los colores y medidas están al principio de `assets/css/styles.css`, copiados
tal cual de la web de bienvenida:

```css
--bg:#0A0908;       --surface:#121110;
--text:#F6F3F0;     --text-2:#B4ADA5;
--accent:#FF5A00;   --accent-2:#FF8A3D;
```

Si algún día cambias la marca en la web de bienvenida, actualiza estas
variables aquí y el resto se adapta solo.

Los logos (`assets/img/logo-f90*.png/webp`) son los mismos archivos de la
web de bienvenida.

---

## 5. Testimonios en vídeo

Se editan en `assets/data/cambios.js`, en el bloque `TESTIMONIOS` del final.
Salen en el mismo orden en que estén ahí, así que **el primero de la lista
es el primero que se ve**.

```js
{
  nombre: "José Luis",
  dato: "12 meses",       // el tiempo, los kilos... lo que destaque
  youtube: "tjiqwkqtA9M"  // SOLO el identificador, no el enlace entero
}
```

Para sacar el identificador, quédate con lo que va detrás de la última barra:

```
https://youtube.com/shorts/tjiqwkqtA9M?is=XyUE...  →  tjiqwkqtA9M
https://youtu.be/ABC123                            →  ABC123
https://youtube.com/watch?v=ABC123                 →  ABC123
```

Los vídeos **no se cargan hasta que alguien los pulsa**. Se muestra la
miniatura y el botón de reproducir; el reproductor de YouTube solo entra al
hacer clic. Si se incrustaran todos de golpe, cada uno se traería más de un
megabyte antes de que nadie los viera y la página tardaría un mundo.

---

## 6. Rejilla o lista

Encima de los cambios hay un selector para verlos **en rejilla** (de dos en
dos) o **en lista** (uno debajo de otro, con la foto al lado del texto). La
elección se guarda en el navegador de cada visitante, así que si vuelve lo
encuentra como lo dejó. No hay que configurar nada.

---

## 7. Ver la página

No necesita servidor: haz doble clic en `index.html`.
Si prefieres servirla en local:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

---

## 8. Publicarla

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
assets/img/                 ← tu foto, la miniatura y los logos
assets/img/cambios/         ← las fotos antes/después
```
