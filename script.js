const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const nav = document.querySelector(".nav");
let lastY = 0;
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y > 40 && y > lastY) nav.style.transform = "translateY(-100%)";
  else nav.style.transform = "translateY(0)";
  lastY = y;
}, { passive: true });
