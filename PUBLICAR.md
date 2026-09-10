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

## Paso 2 — Ponerle tu subdominio (opcional)

Si la quieres en algo tipo `cambios.alvarocobos.com`:

**a) Crea el archivo CNAME**

En la raíz del repositorio, un archivo llamado `CNAME` (sin extensión) con una
sola línea: el subdominio que hayas elegido. Por ejemplo:

```
cambios.alvarocobos.com
```

**b) Apunta el DNS**

Donde tengas el dominio (el mismo sitio donde configuraste
`bienvenida.alvarocobos.com`), añade un registro:

| Tipo | Nombre | Valor |
|---|---|---|
| CNAME | `cambios` | `alvarocobos.github.io` |

**c) Confírmalo en GitHub**

Vuelve a Settings › Pages, escribe el subdominio en **Custom domain**, guarda
y marca **Enforce HTTPS** cuando te deje (puede tardar un rato en habilitarse
mientras se emite el certificado).

---

## Cómo actualizar la página después

Cualquier cambio que subas a `main` se publica solo en un par de minutos.
Para añadir un cambio nuevo: editas `assets/data/cambios.js`, subes las dos
fotos y ya está.
