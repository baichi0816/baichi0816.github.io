document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.createElement("div");
  overlay.className = "page-transition";
  overlay.innerHTML = `
    <div class="scan-line"></div>
    <div class="wave-text">SYSTEM LINKING...</div>
  `;
  document.body.appendChild(overlay);

  document.querySelectorAll("a[href$='.html']").forEach(link => {
    link.addEventListener("click", event => {
      const target = link.getAttribute("href");

      if (!target || target === window.location.pathname.split("/").pop()) return;

      event.preventDefault();
      overlay.classList.add("active");

      setTimeout(() => {
        window.location.href = target;
      }, 650);
    });
  });
});
