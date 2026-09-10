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
  whatsapp: "34633164871",

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
    slug: "alvaro",
    nombre: "Álvaro",
    genero: "hombre",
    tipo: "musculo",
    titular: "De flaco a grande",
    duracion: "De mis inicios a hoy",
    resumen: "Mi propio cambio: empecé siendo un chico extremadamente delgado.",
    historia:
      "Mi historia no empieza donde empieza la mayoría en este sector: yo no partía de sobrepeso, partía de estar extremadamente delgado. La falta de confianza que me daba mi físico fue justo lo que me metió de lleno en el entrenamiento y la alimentación. Y a medida que fui construyendo el cuerpo que ves en la segunda foto, cambió todo lo demás: la autoestima, la seguridad, cómo me relacionaba y cómo me veía a mí mismo. Entre esas dos fotos hay años haciendo exactamente lo que te propongo a ti.",
    tags: ["+ Músculo", "+ Volumen", "Constancia"],
    esMio: true
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
    slug: "antonio",
    nombre: "Antonio",
    genero: "hombre",
    tipo: "recomposicion",
    titular: "−10 kg",
    duracion: "",
    resumen: "Se vio los abdominales por primera vez.",
    historia:
      "Perdió 10 kilos y, por primera vez en su vida, se vio los abdominales. Y no fue solo bajar de peso: mientras se quitaba la grasa de encima siguió construyendo músculo. Por eso el resultado no es un cuerpo más delgado, es un cuerpo con forma.",
    tags: ["Recomposición", "−10 kg", "Abdominales"]
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
    slug: "pepito",
    nombre: "Pepito",
    genero: "hombre",
    tipo: "recomposicion",
    titular: "−5 kg",
    duracion: "",
    resumen: "Recomposición de libro.",
    historia:
      "Bajó 5 kilos, pero lo que ve en el espejo no tiene nada que ver con ese número. Perdió la grasa que le tapaba todo el trabajo del gimnasio y ganó forma a la vez. Es el mejor ejemplo de por qué la báscula, ella sola, no cuenta la historia completa.",
    tags: ["Recomposición", "−5 kg", "+ Definición"]
  },
  {
    slug: "nacho",
    nombre: "Nacho",
    genero: "hombre",
    tipo: "recomposicion",
    titular: "−2 kg, otro cuerpo",
    duracion: "",
    resumen: "Prácticamente el mismo peso y un cuerpo distinto.",
    historia:
      "Otra prueba de que la báscula miente. Bajó un par de kilos, prácticamente nada, y sin embargo se ve muchísimo mejor: perdió grasa y ganó músculo a la vez. Cuando el objetivo no es adelgazar sino cambiar de cuerpo, esto es exactamente lo que buscamos.",
    tags: ["Recomposición", "Mismo peso", "+ Músculo"]
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
