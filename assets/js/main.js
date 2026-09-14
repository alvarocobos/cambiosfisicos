/* ============================================================================
   MÉTODO F90 — Lógica de la página de cambios
   No hace falta tocar este archivo para actualizar contenido.
   Todo el contenido vive en assets/data/cambios.js
   ========================================================================== */
(function () {
  "use strict";

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ── Enlace de contacto (WhatsApp o formulario) ────────────────────────── */
  function enlaceContacto() {
    if (CONFIG.urlAplicar) return CONFIG.urlAplicar;
    var tel = String(CONFIG.whatsapp || "").replace(/\D/g, "");
    return "https://wa.me/" + tel + "?text=" + encodeURIComponent(CONFIG.mensajeWhatsapp || "");
  }

  function aplicarCTAs() {
    var url = enlaceContacto();
    $$(".js-cta").forEach(function (a) {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
    });
    var ig = $("#footIg");
    if (ig) ig.href = "https://instagram.com/" + String(CONFIG.instagram || "").replace(/^@/, "");
  }

  /* ── Barra de datos ────────────────────────────────────────────────────── */
  function pintarStats() {
    var ul = $("#stats");
    if (!ul || !CONFIG.stats) return;
    ul.innerHTML = CONFIG.stats.map(function (s) {
      return '<li><span class="stats__v">' + s.valor + '</span>' +
             '<span class="stats__l">' + s.etiqueta + "</span></li>";
    }).join("");
  }

  /* ── Foto (con placeholder si todavía no existe el archivo) ────────────── */
  var ICONO_FOTO =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
    '<circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';

  // Se llama desde el atributo onerror de cada <img>
  window.F90 = {
    // Añade el sello de versión a una ruta, para que al reemplazar una foto
    // el navegador no siga enseñando la copia guardada.
    url: function (ruta) {
      return ruta + (window.F90_V ? "?v=" + window.F90_V : "");
    },

    ph: function (img) {
      var cont = img.parentNode;
      var ruta = img.getAttribute("data-src") || img.getAttribute("src");
      var ancho = cont.offsetWidth || 0;
      img.remove();
      var d = document.createElement("div");
      d.className = "ph";
      d.innerHTML = ancho < 150
        ? ICONO_FOTO
        : ICONO_FOTO + "<b>Falta la foto</b><code>" + ruta + "</code>";
      cont.insertBefore(d, cont.firstChild);
    }
  };

  function foto(c, momento) {
    var esDespues = momento === "despues";
    var ruta = "assets/img/cambios/" + c.slug + "-" + momento + ".jpg";
    var src = F90.url(ruta);
    var alt = (esDespues ? "Después" : "Antes") + " — " + c.nombre + ", Método F90";
    return '<figure class="shot ' + (esDespues ? "shot--after" : "shot--before") + '">' +
             '<img src="' + src + '" data-src="' + ruta + '" alt="' + alt + '" ' +
                  'loading="lazy" decoding="async" ' +
                  'onerror="this.dataset.err=1; if(window.F90) F90.ph(this);">' +
             '<figcaption class="shot__tag">' + (esDespues ? "Después" : "Antes") + "</figcaption>" +
           "</figure>";
  }

  /* ── Chapa central sobre las fotos: "99 KG | 73 KG" o el titular ───────── */
  function medida(c) {
    if (c.pesoAntes && c.pesoDespues) {
      return '<div class="medida">' +
               '<span class="m-a">' + c.pesoAntes + "</span>" +
               '<span class="m-b">' + c.pesoDespues + "</span>" +
             "</div>";
    }
    return '<div class="medida medida--solo"><span>' + c.titular + "</span></div>";
  }

  /* ── Tarjetas ──────────────────────────────────────────────────────────── */
  function tarjeta(c, i) {
    var genero = c.esMio ? "Mi propio cambio" : (c.genero === "mujer" ? "Mujer" : "Hombre");
    var tags = (c.tags || []).map(function (t) {
      return '<span class="tag">' + t + "</span>";
    }).join("");

    return '<article class="card" role="button" tabindex="0" ' +
             'data-genero="' + c.genero + '" data-tipo="' + c.tipo + '" data-i="' + i + '" ' +
             'style="animation-delay:' + (i * 55) + 'ms" ' +
             'aria-label="Ver el cambio de ' + c.nombre + '">' +
             '<div class="pair">' + foto(c, "antes") + foto(c, "despues") + medida(c) + "</div>" +
             '<div class="card__body">' +
               '<h3 class="card__name">' + c.nombre + "</h3>" +
               '<p class="card__meta">' +
                 (c.duracion ? c.duracion + ' <i>&middot;</i> ' : "") + genero + "</p>" +
               '<p class="card__sum">' + c.resumen + "</p>" +
               '<div class="tags">' + tags + "</div>" +
               '<span class="card__more">Ver el cambio <span>&rarr;</span></span>' +
             "</div>" +
           "</article>";
  }

  /* Cierra el bloque invitando a quien lo está mirando. Va detrás de los
     testimonios: primero las pruebas, después la invitación. */
  function pintarCierre() {
    var cont = $("#cierre");
    if (!cont) return;
    cont.innerHTML =
           '<article class="cierre reveal">' +
             '<p class="cierre__mas">Y muchos más</p>' +
             '<p class="cierre__sub">Estos son solo algunos. Al resto los vas a ' +
               'conocer dentro del programa.</p>' +
             '<h3 class="cierre__preg">¿Quieres ser <span class="accent">el ' +
               'próximo</span> en aparecer aquí?</h3>' +
             '<a class="btn btn--primary js-cta" href="#contacto">' +
               'Empezar mi cambio <svg class="ico ico--arrow"><use href="#i-arrow"/></svg>' +
             "</a>" +
           "</article>";
  }

  function pintarGrid() {
    var grid = $("#grid");
    if (!grid) return;
    grid.innerHTML = CAMBIOS.map(tarjeta).join("");
  }

  /* ── Filtros ───────────────────────────────────────────────────────────── */
  function filtros() {
    var botones = $$(".filter");
    var vacio = $("#gridEmpty");

    botones.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.dataset.filter;

        botones.forEach(function (b) {
          var activo = b === btn;
          b.classList.toggle("is-active", activo);
          b.setAttribute("aria-selected", activo ? "true" : "false");
        });

        var visibles = 0;
        $$(".card").forEach(function (card, n) {
          var ok = f === "todos" ||
                   card.dataset.genero === f ||
                   card.dataset.tipo === f;
          card.hidden = !ok;
          if (ok) {
            visibles++;
            // reinicia la animación de entrada
            card.style.animation = "none";
            void card.offsetWidth;
            card.style.animation = "";
            card.style.animationDelay = (n * 45) + "ms";
            // y la chapa se vuelve a anunciar
            rearmar(card);
            (function (c, ms) {
              setTimeout(function () { anunciar(c); }, ms);
            })(card, 120 + n * 45);
          }
        });
        if (vacio) vacio.hidden = visibles > 0;
      });
    });
  }

  /* ── Lightbox ──────────────────────────────────────────────────────────── */
  function lightbox() {
    var lb = $("#lb");
    if (!lb) return;
    var ultimoFoco = null;

    function abrir(c) {
      $("#lbMedia").innerHTML = '<div class="pair">' + foto(c, "antes") + foto(c, "despues") + medida(c) + "</div>";
      $("#lbName").textContent = c.nombre;
      $("#lbMeta").textContent =
        (c.duracion ? c.duracion + " · " : "") +
        (c.esMio ? "Mi propio cambio" : (c.genero === "mujer" ? "Mujer" : "Hombre"));
      $("#lbStory").textContent = c.historia;
      var media = $("#lbMedia");
      media.classList.remove("is-vista", "chapa-fuera");
      lb.hidden = false;
      document.body.classList.add("lb-open");
      $(".lb__close").focus();
      // se deja ver la medida y enseguida se aparta, para no tapar la foto
      requestAnimationFrame(function () { anunciar(media, 1800); });
    }

    function cerrar() {
      lb.hidden = true;
      document.body.classList.remove("lb-open");
      if (ultimoFoco) ultimoFoco.focus();
    }

    document.addEventListener("click", function (e) {
      var t = e.target;
      if (!t || !t.closest) return;
      var card = t.closest(".card");
      if (card) {
        ultimoFoco = card;
        abrir(CAMBIOS[+card.dataset.i]);
        return;
      }
      if (t.closest("[data-close]")) cerrar();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lb.hidden) { cerrar(); return; }

      // Abrir tarjeta con Enter o Espacio
      if (e.key !== "Enter" && e.key !== " ") return;
      var t = e.target;
      if (!t || !t.closest) return;
      var card = t.closest(".card");
      if (!card) return;
      e.preventDefault();
      ultimoFoco = card;
      abrir(CAMBIOS[+card.dataset.i]);
    });
  }

  /* ── Testimonios en vídeo ──────────────────────────────────────────────── */
  /* Se pinta la miniatura y el botón de reproducir; el vídeo de YouTube solo
     se carga al pulsarlo. Si se incrustaran todos de golpe, cada uno se
     traería más de un megabyte antes de que nadie los vea. */
  function pintarTestimonios() {
    var cont = $("#testis");
    if (!cont || typeof TESTIMONIOS === "undefined" || !TESTIMONIOS.length) return;

    cont.innerHTML = TESTIMONIOS.map(function (t, i) {
      var mini = "https://i.ytimg.com/vi/" + t.youtube + "/";
      return '<figure class="testi reveal">' +
               '<button class="testi__marco" data-yt="' + t.youtube + '" ' +
                 'aria-label="Ver el testimonio de ' + t.nombre + '">' +
                 // fondo difuminado, para rellenar los lados del marco ancho:
                 // hqdefault viene en 16:9, justo lo que mide el marco
                 '<img class="testi__fondo" aria-hidden="true" ' +
                   'src="' + mini + 'hqdefault.jpg" ' +
                   'alt="" loading="lazy" decoding="async" ' +
                   'onerror="this.style.display=\'none\'">' +
                 // el vídeo, centrado y en vertical: oardefault viene con la
                 // proporción original (vertical en los Shorts). Si YouTube no
                 // la tiene, escondemos la franja y queda solo el fondo.
                 '<span class="testi__centro">' +
                   '<img src="' + mini + 'oardefault.jpg" ' +
                     'alt="" loading="lazy" decoding="async" ' +
                     'onerror="this.parentNode.style.display=\'none\'">' +
                 "</span>" +
                 '<span class="testi__play" aria-hidden="true">' +
                   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>' +
                 "</span>" +
               "</button>" +
               '<figcaption class="testi__pie">' +
                 '<span class="testi__nombre">' + t.nombre + "</span>" +
                 '<span class="testi__dato">' + t.dato + "</span>" +
               "</figcaption>" +
             "</figure>";
    }).join("");

    cont.addEventListener("click", function (e) {
      var boton = e.target.closest(".testi__marco");
      if (!boton || boton.dataset.puesto) return;
      boton.dataset.puesto = "1";
      boton.innerHTML =
        '<iframe src="https://www.youtube-nocookie.com/embed/' + boton.dataset.yt +
          '?autoplay=1&rel=0" title="Testimonio" allowfullscreen ' +
          'allow="autoplay; encrypted-media; picture-in-picture"></iframe>';
    });
  }

  /* ── Rejilla o lista ───────────────────────────────────────────────────── */
  /* Se recuerda la elección para la próxima visita. */
  var CLAVE_VISTA = "f90-vista";

  function vistas() {
    var grid = $("#grid");
    var botones = $$(".vista");
    if (!grid || !botones.length) return;

    function aplicar(v) {
      grid.classList.toggle("grid--lista", v === "lista");
      botones.forEach(function (b) {
        var activo = b.dataset.vista === v;
        b.classList.toggle("is-active", activo);
        b.setAttribute("aria-pressed", activo ? "true" : "false");
      });
      try { localStorage.setItem(CLAVE_VISTA, v); } catch (e) {}
    }

    var guardada;
    try { guardada = localStorage.getItem(CLAVE_VISTA); } catch (e) {}
    aplicar(guardada === "lista" ? "lista" : "rejilla");

    botones.forEach(function (b) {
      b.addEventListener("click", function () { aplicar(b.dataset.vista); });
    });
  }

  /* ── La chapa de la medida ─────────────────────────────────────────────── */
  /* Aparece cuando la tarjeta entra en pantalla, se deja leer un momento y
     después se aparta para no tapar la foto. Vuelve al pasar el ratón. */
  var ESPERA_CHAPA = 2200;

  // En móvil no hay ratón, así que la chapa no puede "volver al pasar por
  // encima": se rearma para anunciarse cada vez que la tarjeta entra en pantalla.
  var HAY_RATON = !window.matchMedia || window.matchMedia("(hover: hover)").matches;

  function anunciar(el, espera) {
    clearTimeout(el._chapa);
    el.classList.remove("chapa-fuera");
    el.classList.add("is-vista");
    el._chapa = setTimeout(function () {
      el.classList.add("chapa-fuera");
    }, espera || ESPERA_CHAPA);
  }

  function rearmar(el) {
    clearTimeout(el._chapa);
    el.classList.remove("is-vista", "chapa-fuera");
  }

  function chapas() {
    var tarjetas = $$(".card");
    if (!("IntersectionObserver" in window)) {
      tarjetas.forEach(function (c) { c.classList.add("is-vista"); });
      return;
    }
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        var card = en.target;
        if (en.isIntersecting) {
          if (HAY_RATON) io.unobserve(card);   // con ratón basta una vez
          anunciar(card);
        } else if (!HAY_RATON) {
          rearmar(card);                       // sin ratón, se prepara para volver
        }
      });
    }, { threshold: 0.35 });
    tarjetas.forEach(function (c) { io.observe(c); });
  }

  /* ── Aparición al hacer scroll ─────────────────────────────────────────── */
  function reveal() {
    var items = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ── Cabecera fija ─────────────────────────────────────────────────────── */
  /* El botón de WhatsApp está siempre visible, no depende del scroll. */
  function scrollUI() {
    var cab = $("#siteHeader");
    if (!cab) return;
    var tick = function () { cab.classList.toggle("is-stuck", window.scrollY > 8); };
    tick();
    window.addEventListener("scroll", tick, { passive: true });
  }

  /* ── Arranque ──────────────────────────────────────────────────────────── */
  // Imágenes que fallaron antes de que se cargara este script
  function repasarFallidas() {
    $$("img[data-err]").forEach(function (img) {
      if (img.parentNode) window.F90.ph(img);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    repasarFallidas();
    pintarStats();
    pintarGrid();
    aplicarCTAs();
    filtros();
    vistas();
    pintarTestimonios();
    pintarCierre();
    chapas();
    lightbox();
    reveal();
    scrollUI();
    var y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
