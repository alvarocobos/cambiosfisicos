# Cómo poner esta página en internet

Se publica igual que `bienvenida-programa`: GitHub Pages sirviendo la rama
`main` directamente, sin workflows ni nada raro.

---

## Antes de publicar (importante)

Repasa esto, porque en cuanto le des al botón la página es pública:

- [ ] **Tu WhatsApp** en `assets/data/cambios.js` → `whatsapp`.
      Ahora hay un número de ejemplo (`34600000000`) que no funciona.
- [ ] **Tu Instagram** en el mismo archivo → `instagram`.
- [ ] **Tu foto de perfil** en `assets/img/alvaro.jpg`.
- [ ] **Las fotos antes/después** en `assets/img/cambios/`.
      Mientras falten, salen recuadros de "falta la foto" a la vista de todos.
- [ ] **La miniatura** para compartir en `assets/img/og-f90.jpg` (1200×630 px).
      Puedes copiar la misma que usas en la web de bienvenida.

---

## Paso 1 — Activar GitHub Pages

1. Entra en https://github.com/alvarocobos/cambiosfisicos/settings/pages
2. En **Source**, elige **Deploy from a branch**.
3. En **Branch**, elige `main` y la carpeta `/ (root)`.
4. Dale a **Save**.

En un par de minutos la web estará en:

```
https://alvarocobos.github.io/cambiosfisicos/
```

Con esto ya funciona. Si te vale esa dirección, has terminado.

---

## Paso 2 — El subdominio: ya está hecho

La web va a responder en **https://transformaciones.alvarocobos.com**

Las dos piezas ya están puestas:

- **El DNS**, en Hostinger: un registro `CNAME` con nombre `transformaciones`
  apuntando a `alvarocobos.github.io`. Comprobado y propagado.
- **El archivo `CNAME`** en la raíz de este repositorio, que es lo que le dice
  a GitHub en qué dominio tiene que responder.

Solo queda confirmarlo en GitHub: en Settings › Pages, el campo
**Custom domain** debería rellenarse solo con `transformaciones.alvarocobos.com`
al activar Pages (lo lee del archivo CNAME). Si no, lo escribes y guardas.

Después marca **Enforce HTTPS**. Puede tardar un rato en habilitarse mientras
GitHub emite el certificado; es normal que durante unos minutos dé aviso de
sitio no seguro.

**Ojo:** no toques la sección "Subdominios" del hosting de Hostinger. Eso crea
una carpeta en su servidor con un registro A propio y pisaría esta
configuración. Lo que usamos es el registro CNAME de la zona DNS.

---

## Cómo actualizar la página después

Cualquier cambio que subas a `main` se publica solo en un par de minutos.
Para añadir un cambio nuevo: editas `assets/data/cambios.js`, subes las dos
fotos y ya está.

### Si has cambiado algo y no lo ves

El navegador guarda una copia de los archivos de diseño y contenido, y
sigue enseñándola aunque la web ya esté actualizada. Por eso los enlaces
del `index.html` llevan un sello de versión al final:

```html
<link rel="stylesheet" href="assets/css/styles.css?v=202609110501">
<script src="assets/data/cambios.js?v=202609110501"></script>
```

Cada vez que toques el CSS, `cambios.js` o `main.js`, actualiza ese sello
antes de subirlo:

```bash
python3 herramientas/sellar-version.py
```

Al cambiar la dirección, el navegador se ve obligado a bajarse la versión
nueva y nadie tiene que recargar forzando.

**Las fotos también lo llevan.** Una foto *nueva* estrena nombre y por
tanto dirección, pero si *reemplazas* una existente el nombre no cambia y
el navegador seguiría enseñando la vieja. El script pone el mismo sello a
las fotos, así que con ejecutarlo vale para todo.
