document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    // Verifica si ya hay decisión guardada
    if (!localStorage.getItem("cookieConsent")) {
      banner.classList.remove("hidden");
      banner.classList.add("flex"); // se muestra en flex
    }

    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "accepted");
      banner.classList.add("hidden");
      banner.classList.remove("flex");
      // Aquí activas Google Analytics si lo usas
    });

    declineBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "declined");
      banner.classList.add("hidden");
      banner.classList.remove("flex");
      // Aquí NO cargas Google Analytics
    });
  });