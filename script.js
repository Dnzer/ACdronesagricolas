const WA = "5551995176268";

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.querySelectorAll("[data-service]").forEach(a => {
  a.addEventListener("click", () => {
    const select = document.querySelector('select[name="servico"]');
    if (select) select.value = a.dataset.service;
  });
});

document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const text = [
    "Olá, AC Drone Agrícola! Vim pelo site e gostaria de solicitar um orçamento.",
    "",
    `*Nome:* ${data.get("nome")}`,
    `*WhatsApp:* ${data.get("telefone")}`,
    `*Serviço:* ${data.get("servico")}`,
    `*Local da lavoura:* ${data.get("local")}`,
    `*Detalhes:* ${data.get("mensagem") || "Não informado"}`
  ].join("\n");
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
