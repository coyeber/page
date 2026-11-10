// COYEBER® — progressive enhancement, without dependencies
(function () {
  "use strict";

  var nav = document.getElementById("primary-nav");
  var toggle = document.querySelector(".menu-toggle");

  function closeMenu() {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 850) closeMenu();
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      var data = new FormData(form);
      var nome = String(data.get("nome") || "").trim();
      var servico = String(data.get("servico") || "").trim();
      var mensagem = String(data.get("mensagem") || "").trim();
      if (!nome || !servico || !mensagem) return;

      var texto = [
        "Olá, Coyeber! Quero conversar sobre um projeto.",
        "",
        "Nome: " + nome,
        "Serviço: " + servico,
        "Ideia: " + mensagem
      ].join("\n");
      var link = "https://wa.me/5581991485100?text=" + encodeURIComponent(texto);
      window.location.href = link;
    });
  }

  // Keep a designed fallback when third-party portfolio image hosts are unavailable.
  document.querySelectorAll(".archive-grid img, .cover-gallery img, .partner-gallery img, .work-image img").forEach(function (img) {
    function fallback() {
      if (!img.parentElement || img.dataset.failed === "true") return;
      img.dataset.failed = "true";
      img.hidden = true;
      var panel = document.createElement("div");
      panel.className = "image-fallback";
      panel.setAttribute("role", "img");
      panel.setAttribute("aria-label", img.alt || "Imagem indisponível");
      panel.style.cssText = "height:100%;min-height:230px;display:grid;place-items:center;background:#d3d3ce;color:#111;font:900 clamp(30px,5vw,60px)/1 'Inter Tight',Arial,sans-serif;letter-spacing:-.07em;";
      panel.textContent = "COYEBER®";
      img.parentElement.insertBefore(panel, img);
    }
    img.addEventListener("error", fallback);
    if (img.complete && img.naturalWidth === 0) fallback();
  });
})();