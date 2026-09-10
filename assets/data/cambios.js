/* ============================================================================
   MÉTODO F90 — DATOS DE LA PÁGINA DE CAMBIOS
   ----------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas tocar para actualizar la página.
   1) Rellena CONFIG con tus datos de contacto.
   2) Añade / edita casos en CAMBIOS.
   3) Sube las fotos a assets/img/cambios/ con el nombre que indica cada caso.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1) CONFIGURACIÓN  ←←← CAMBIA ESTO
   ------------------------------------------------------------------------ */
const CONFIG = {
  marca: "Álvaro Cobos",
  metodo: "Método F90",

  // Tu número de WhatsApp con prefijo de país y SIN espacios, + ni guiones.
  // Ejemplo España: 34600112233
  whatsapp: "34600000000",

  // Mensaje con el que se abre el chat de WhatsApp al pulsar el botón.
  mensajeWhatsapp:
    "Hola Álvaro, vengo de tu página de cambios y quiero información sobre el Método F90",

  // Tu usuario de Instagram, sin la @
  instagram: "alvarocobos",

  // OPCIONAL: si tienes formulario de aplicación o calendario (Typeform,
  // Calendly, Tally...), pon aquí la URL y los botones apuntarán ahí en vez
  // de a WhatsApp. Déjalo vacío ("") para seguir usando WhatsApp.
  urlAplicar: "",

  // Números que salen en la barra de credibilidad (3 columnas)
  stats: [
    { valor: "+400", etiqueta: "personas transformadas" },
    { valor: "8",    etiqueta: "años de resultados" },
    { valor: "15",   etiqueta: "años entrenando" }
  ]
};

/* ---------------------------------------------------------------------------
   2) LOS CAMBIOS
   ------------------------------------------------------------------------
   Campos de cada caso:

   slug      → identificador. Determina el nombre de las fotos:
               assets/img/cambios/<slug>-antes.jpg
               assets/img/cambios/<slug>-despues.jpg
   nombre    → nombre que se muestra
   genero    → "hombre" | "mujer"   (alimenta el filtro)
   tipo      → "perdida" | "recomposicion" | "musculo"
   titular   → el dato potente, se ve en grande (ej: "-40 kg")
   duracion  → tiempo del proceso (ej: "10 meses"). Opcional: si lo dejas
                vacío (""), la ficha simplemente no lo muestra.
   resumen   → una línea corta, la que se lee de un vistazo
   historia  → el texto largo, se ve al abrir la ficha
   tags      → 2 o 3 etiquetas cortas
   esMio     → OPCIONAL. true si el cambio es tuyo, no de un cliente.
               En vez de "Hombre" / "Mujer" pone "Mi propio cambio".

   Para AÑADIR un cambio nuevo: copia un bloque { ... }, pégalo con una coma
   delante y cambia los datos. Nada más.
   ------------------------------------------------------------------------ */
const CAMBIOS = [
  {
    slug: "jose-luis",
    nombre: "José Luis",
    genero: "hombre",
    tipo: "perdida",
    titular: "−40 kg",
    duracion: "10 meses",
    resumen: "Se quitó a una persona de encima.",
    historia:
      "Un cambio de vida radical. Pasó de sentirse pesado, cansado y sin energía a perder 40 kilos en menos de un año. Y lo mejor de todo: cero efecto rebote. Aprendió a comer de verdad y hoy tiene un físico y una energía de toro.",
    tags: ["Pérdida de grasa", "Cero rebote", "Más energía"]
  },
  {
    slug: "monica",
    nombre: "Mónica",
    genero: "mujer",
    tipo: "recomposicion",
    titular: "Mismo peso, otro cuerpo",
    duracion: "Recomposición",
    resumen: "El ejemplo perfecto de que la báscula miente.",
    historia:
      "Pesa prácticamente lo mismo que cuando empezó, pero su cuerpo es completamente distinto. Perdió la grasa blanda, tonificó al máximo y ganó músculo firme. Pasó de fijarse en un número absurdo en la báscula a verse apretada, fuerte y espectacular frente al espejo.",
    tags: ["Recomposición", "Tonificación", "+ Músculo"]
  },
  {
    /* ⚠️ ÁLVARO: revisa el titular y añade la duración cuando la tengas */
    slug: "antonio",
    nombre: "Antonio",
    genero: "hombre",
    tipo: "recomposicion",
    titular: "Recomposición corporal",
    duracion: "",
    resumen: "Perdió grasa y ganó músculo a la vez.",
    historia:
      "Recomposición de manual: quemó la grasa que le tapaba el trabajo del gimnasio mientras seguía construyendo músculo. El resultado es un cuerpo con forma y definición, no simplemente un cuerpo más delgado.",
    tags: ["Recomposición", "− Grasa", "+ Definición"]
  },
  {
    slug: "luciana",
    nombre: "Luciana",
    genero: "mujer",
    tipo: "perdida",
    titular: "−10 cm de cintura",
    duracion: "30 días",
    resumen: "Un arranque de los que te dejan con la boca abierta.",
    historia:
      "En solo su primer mes se quitó 10 cm de cintura de encima. Los pantalones le empezaron a bailar de golpe y vio desde el día uno que este sistema sí funcionaba para ella.",
    tags: ["Primer mes", "−10 cm cintura", "Adherencia"]
  },
  {
    /* ⚠️ ÁLVARO: revisa el titular y añade la duración cuando la tengas */
    slug: "pepito",
    nombre: "Pepito",
    genero: "hombre",
    tipo: "perdida",
    titular: "De blando a definido",
    duracion: "",
    resumen: "Se quitó la grasa de encima y sacó forma.",
    historia:
      "Dejó atrás el cuerpo blando y sin forma para verse fuerte y definido. Perdió la grasa que le sobraba sin renunciar a su vida, y ahora el trabajo del gimnasio por fin se le nota.",
    tags: ["Pérdida de grasa", "+ Definición"]
  },
  {
    slug: "juanjo",
    nombre: "Juanjo",
    genero: "hombre",
    tipo: "recomposicion",
    titular: "−5 cm de barriga",
    duracion: "Mismo peso",
    resumen: "Recomposición corporal de libro.",
    historia:
      "Quemó la grasa rebelde de la cintura (5 cm menos) a la vez que metía músculo limpio. Se mira al espejo y ve a un tío fuerte y compacto pesando exactamente lo mismo, demostrando el poder de entrenar y comer con cabeza.",
    tags: ["Recomposición", "− Cintura", "+ Fuerza"]
  },
  {
    slug: "alvaro",
    nombre: "Álvaro",
    genero: "hombre",
    tipo: "musculo",
    titular: "De blando a atlético",
    duracion: "Recomposición",
    resumen: "Mi propio cambio: de blando a atlético.",
    historia:
      "Mi propio cambio. Dejé atrás el aspecto tapado y sin forma para construir masa muscular de verdad: volumen en hombros, espalda y pecho, bajando el porcentaje de grasa y logrando esa estética fuerte y definida que llevaba años buscando. Lo que te propongo es exactamente lo que hice yo.",
    tags: ["+ Músculo", "− Grasa", "Estética atlética"],
    esMio: true
  }

  /* ── PLANTILLA PARA UN CAMBIO NUEVO ──────────────────────────────────────
  ,{
    slug: "nombre-cliente",
    nombre: "Nombre",
    genero: "mujer",
    tipo: "perdida",
    titular: "−15 kg",
    pesoAntes: "88 KG",      // opcional
    pesoDespues: "73 KG",    // opcional
    duracion: "6 meses",     // opcional: si lo dejas vacío, no se muestra
    resumen: "Una línea corta y potente.",
    historia: "El texto largo que se lee al abrir la ficha.",
    tags: ["Etiqueta 1", "Etiqueta 2"]
  }
  ───────────────────────────────────────────────────────────────────────── */
];
