/* ===========================
   SKILL BAR + MOVING PERCENT
=========================== */

const fills = document.querySelectorAll(".fill");

function animateOnScroll() {
  fills.forEach((fill) => {
    // ✅ Do not animate again
    if (fill.classList.contains("filled")) return;

    let mark = fill.querySelector(".skill-mark");

    if (!mark) {
      mark = document.createElement("span");
      mark.classList.add("skill-mark");
      fill.appendChild(mark);
    }

    const rect = fill.getBoundingClientRect();
    const width = parseInt(fill.dataset.width || "0");

    if (rect.top < window.innerHeight - 100) {
      fill.classList.add("filled");
      fill.style.width = width + "%";
      mark.textContent = width + "%";
      mark.style.left = width + "%";
    }
  });
}

/* ===========================
   REVEAL ANIMATIONS
=========================== */

const reveals = document.querySelectorAll(
  ".reveal-up,.reveal-left,.reveal-right,.reveal-down"
);

function reveal() {
  reveals.forEach((el) => {
    // ✅ Reveal only once
    if (el.classList.contains("reveal-active")) return;

    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add("reveal-active");
    }
  });
}

/* ===========================
   CARD TILT
=========================== */

document.querySelectorAll(".project-card,.card").forEach((c) => {
  c.classList.add("tilt-card");

  c.addEventListener("mousemove", (e) => {
    const r = c.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;

    c.style.transform =
      `perspective(800px) rotateX(${(-y / 15)}deg)
       rotateY(${(x / 15)}deg) scale(1.03)`;
  });

  c.addEventListener("mouseleave", () => {
    c.style.transform = "perspective(800px) scale(1)";
  });
});

/* ===========================
   DARK MODE TOGGLE + TEXT
=========================== */

const toggle = document.getElementById("theme-toggle");
const toggleText = toggle.querySelector("p");
const toggleIcon = toggle.querySelector("i");

function updateToggleText() {
  if (document.body.classList.contains("dark-mode")) {
    toggleText.textContent = "Light Mode";
    toggleIcon.className = "fas fa-sun";
  } else {
    toggleText.textContent = "Dark Mode";
    toggleIcon.className = "fas fa-moon";
  }
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );

  updateToggleText();
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

updateToggleText();

/* ===========================
   CURSOR GLOW
=========================== */

const glow = document.querySelector(".cursor-glow");

window.addEventListener("pointermove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* ===========================
   PAGE LOADER
=========================== */

window.addEventListener("load", () => {
  document.getElementById("loader-overlay").style.display = "none";
});

/* ===========================
   TYPEWRITER EFFECT
=========================== */

const roleText = "Full Stack Developer";
const roleEl = document.querySelector(".section__text__p2");

let i = 0;

function typeWriter() {
  if (!roleEl) return;

  if (i <= roleText.length) {
    roleEl.textContent = roleText.slice(0, i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

typeWriter();

/* ===========================
   MAGNETIC BUTTON EFFECT
=========================== */

document.querySelectorAll(".btn,.view-button").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;

    btn.style.transform =
      `translate(${x * 0.15}px,${y * 0.15}px) scale(1.05)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0) scale(1)";
  });
});

/* ===========================
   PARALLAX HERO IMAGE
=========================== */

const heroImg = document.querySelector(".section__pic-container img");

window.addEventListener("scroll", () => {
  if (heroImg) {
    heroImg.style.transform = `translateY(${window.scrollY * 0.08}px)`;
  }
});

/* ===========================
   SCROLL PROGRESS BAR
=========================== */

window.addEventListener("scroll", () => {
  const scrolled =
    (window.scrollY /
      (document.body.scrollHeight - window.innerHeight)) * 100;

  document.getElementById("scroll-progress").style.width = scrolled + "%";
});

/* ===========================
   RIPPLE EFFECT
=========================== */

document.querySelectorAll(".btn,.view-button").forEach((el) => {
  el.addEventListener("click", (e) => {
    const span = document.createElement("span");

    span.className = "ripple";
    span.style.left = e.offsetX + "px";
    span.style.top = e.offsetY + "px";

    el.appendChild(span);

    setTimeout(() => span.remove(), 600);
  });
});

/* ===========================
   WHOOSH SECTION REVEALS
=========================== */

document.querySelectorAll("section").forEach((el) => {
  el.classList.add("section-whoosh");
});

function sectionReveal() {
  document.querySelectorAll(".section-whoosh").forEach((el) => {
    // ✅ Only reveal once
    if (el.classList.contains("show")) return;

    if (el.getBoundingClientRect().top < window.innerHeight - 200) {
      el.classList.add("show");
    }
  });
}

sectionReveal();

/* ===========================
   MASTER SCROLL HOOK
=========================== */

function masterScroll() {
  animateOnScroll();
  reveal();
  sectionReveal();
}

window.addEventListener("scroll", masterScroll);
window.addEventListener("DOMContentLoaded", masterScroll);



