
function showSec(id, event) {

  document.querySelectorAll(".sub-section")
    .forEach(s => s.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".sub-btn")
    .forEach(b => b.classList.remove("active"));

  if (event) event.target.classList.add("active");
}
/* ===== SOUS-ONGLETS ===== */

/* ===== MENU ACTIF AUTOMATIQUE ===== */
document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll(".menu-btn");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

});

/* ===== RECHERCHE ===== */
function searchChapters() {

  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(filter) ? "" : "none";
  });

}
