#!/usr/bin/env python3
"""
Pone un sello de versión a los archivos de diseño y contenido.

El navegador guarda styles.css, cambios.js y main.js en su memoria y, si no
cambia la dirección, sigue enseñando la copia vieja aunque la web ya esté
actualizada. Añadiendo "?v=<fecha>" al final, cada publicación estrena
dirección y el navegador se ve obligado a bajarse la versión nueva.

Ejecútalo antes de subir cambios:   python3 herramientas/sellar-version.py
"""
import re, pathlib, datetime

raiz = pathlib.Path(__file__).resolve().parent.parent
p = raiz / "index.html"
s = p.read_text(encoding="utf-8")

sello = datetime.datetime.now(datetime.timezone.utc).strftime("%Y%m%d%H%M")
archivos = ["assets/css/styles.css", "assets/data/cambios.js", "assets/js/main.js",
            "assets/img/alvaro.jpg", "assets/img/og-f90.jpg"]

for a in archivos:
    s = re.sub(re.escape(a) + r'(\?v=\d+)?', a + "?v=" + sello, s)

# el mismo sello para las fotos, que se cargan desde el JavaScript
s = re.sub(r'window\.F90_V\s*=\s*"\d*"', f'window.F90_V="{sello}"', s)

p.write_text(s, encoding="utf-8")
print(f"Sello de versión: {sello}")
for a in archivos:
    print(f"  {a}?v={sello}")
print("  y las fotos, vía window.F90_V")
