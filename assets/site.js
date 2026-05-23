/* Minimal site JS: mobile nav toggle + footer year. No dependencies. */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".nav");
    var scrim = document.querySelector(".nav-scrim");

    function closeNav() {
      if (!nav) return;
      nav.classList.remove("open");
      if (toggle) toggle.classList.remove("open");
      if (scrim) scrim.classList.remove("open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }
    function openNav() {
      nav.classList.add("open");
      toggle.classList.add("open");
      if (scrim) scrim.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    }

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        if (nav.classList.contains("open")) closeNav();
        else openNav();
      });
    }
    if (scrim) scrim.addEventListener("click", closeNav);
    // close menu when a nav link is tapped
    if (nav) {
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", closeNav);
      });
    }

    // current year in footer
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
