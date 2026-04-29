let miBoton = document.getElementById("theme-toggle");
let elCuerpo = document.body;

miBoton.addEventListener("click", function(){
    elCuerpo.classList.toggle("modo claro");

  if (elCuerpo.classList.contains("modo-claro")){
    miBoton.textContent = " 🌛Modo Oscuro"
  } else {
       miBoton.textContent = " 🌞Modo claro"
  }
});

