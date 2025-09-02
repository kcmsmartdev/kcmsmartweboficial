(function() {
    emailjs.init("jQohD2dqit00tQN1G");
  })();

  const btn = document.getElementById('button');
  const form = document.getElementById('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    btn.innerText = "Enviando...";

    const serviceID = "default_service"; // si usas Gmail en EmailJS
    const templateID = "template_ivewh7d"; // este es tu template (lo ajustamos abajo)

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.innerText = "Enviar";
        alert("✅ Mensaje enviado correctamente");
        form.reset();
      }, (err) => {
        btn.innerText = "Enviar";
        alert("❌ Error: " + JSON.stringify(err));
      });
  });