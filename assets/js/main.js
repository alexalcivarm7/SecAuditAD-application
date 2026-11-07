/* ============================================================
   SecAuditAD Application — main.js (comportamiento compartido)
   Autor: Alex Alcivar M — Guayaquil, Ecuador
   ============================================================ */
(function () {
  "use strict";

  /* ----- enlace activo del menú ----- */
  var page = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll("nav.main a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === page) a.classList.add("active");
  });

  /* ----- aparición suave al hacer scroll ----- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ----- acordeones (.acc) ----- */
  document.querySelectorAll(".acc > button.q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.parentElement.classList.toggle("open");
    });
  });

  /* ----- modal genérico ----- */
  window.openModal = function (html) {
    var ov = document.getElementById("overlay");
    if (!ov) return;
    document.getElementById("modalBody").innerHTML = html;
    ov.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  window.closeModal = function () {
    var ov = document.getElementById("overlay");
    if (!ov) return;
    ov.classList.remove("open");
    document.body.style.overflow = "";
  };
  document.addEventListener("click", function (ev) {
    var ov = document.getElementById("overlay");
    if (ov && ev.target === ov) window.closeModal();
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") window.closeModal();
  });

  /* ----- contacto configurable (assets/js/data.js → SITE.contact) ----- */
  document.querySelectorAll("[data-contact]").forEach(function (el) {
    var slot = el.getAttribute("data-contact");
    var c = (window.SITE && window.SITE.contact) ? window.SITE.contact : {};
    var value = c[slot] || "";
    if (!value) { el.style.display = "none"; return; }
    if (slot === "whatsapp") {
      el.setAttribute("href", "https://wa.me/" + String(value).replace(/[^0-9]/g, ""));
      el.textContent = value;
    } else if (slot === "email") {
      el.setAttribute("href", "mailto:" + value);
      el.textContent = value;
    } else if (slot === "linkedin") {
      el.setAttribute("href", value);
      el.textContent = "LinkedIn";
    }
  });
})();
