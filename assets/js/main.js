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
    var alt = (esDespues ? "Después" : "Antes") + " — " + c.nombre + ", Método F90";
    return '<figure class="shot ' + (esDespues ? "shot--after" : "shot--before") + '">' +
             '<img src="' + ruta + '" data-src="' + ruta + '" alt="' + alt + '" ' +
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
      $("#lbTitular").textContent = c.titular;
      $("#lbName").textContent = c.nombre;
      $("#lbMeta").textContent =
        (c.duracion ? c.duracion + " · " : "") +
        (c.esMio ? "Mi propio cambio" : (c.genero === "mujer" ? "Mujer" : "Hombre"));
      $("#lbStory").textContent = c.historia;
      lb.hidden = false;
      document.body.classList.add("lb-open");
      $(".lb__close").focus();
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
    lightbox();
    reveal();
    scrollUI();
    var y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
