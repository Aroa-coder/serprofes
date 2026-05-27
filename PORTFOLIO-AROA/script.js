emailjs.init("uA83WYmKq9aLIBZT1");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  emailjs.sendForm(
    "service_pib4zxs",
    "template_ky3566r",
    this
  )
  .then(function () {

    const msg = document.createElement("p");

    msg.textContent = "✅ Mensaje enviado correctamente";
    msg.style.color = "#C084FC";
    msg.style.marginTop = "20px";
    msg.style.fontWeight = "500";

    form.appendChild(msg);

    form.reset();

    setTimeout(() => {
      msg.remove();
    }, 3000);

  })
  .catch(function (error) {

    console.log("ERROR EMAILJS:", error);

    const msg = document.createElement("p");

    msg.textContent = "❌ Error al enviar el mensaje";
    msg.style.color = "red";
    msg.style.marginTop = "20px";

    form.appendChild(msg);

    setTimeout(() => {
      msg.remove();
    }, 3000);

  });

});