// 1. SELECCIÓN DE ELEMENTOS: Guardamos en variables los elementos del HTML
const inputEquipo = document.getElementById('nombreCompleto');
const inputProblema = document.getElementById('Profesión');
const btnAbrirTicket = document.getElementById('btnRegistrarEntrada');
const listaTickets = document.getElementById('listaTickets');
const txtContador = document.getElementById('contador');

// Variable para llevar la cuenta de los tickets abiertos
let totalTickets = 2;

// Escuchamos el evento 'click' en el botón
btnAbrirTicket.addEventListener('click', () => {
    
    // Guardamos los textos que ha escrito el usuario (.trim() elimina espacios vacíos al inicio/final)
    const equipo = inputEquipo.value.trim();
    const problema = inputProblema.value.trim();

    // 4. VALIDACIÓN: Si alguno de los dos campos está vacío...
    if (equipo === "" || problema === "") {
        alert("Faltan datos por rellenar."); // Salta el aviso en pantalla
        return;                              // Ponemos 'return' para que el código se pare aquí y no sume nada
    }

    // 2. LA LÓGICA: Creamos un nuevo elemento de lista (li)
    const nuevoLi = document.createElement('li');
    
    // Le metemos un div por dentro con los datos del formulario (para poder darle el diseño con la barra roja)
    nuevoLi.innerHTML = `<div class="ticket-item"><strong>${equipo}</strong> : ${problema}</div>`;
    
    // Inyectamos el nuevo li dentro de la lista (ul) de nuestro HTML
    listaTickets.appendChild(nuevoLi);

    // 3. EL CEREBRO (Contador): Sumamos +1 a la variable y actualizamos el texto en la pantalla
    totalTickets++;
    txtContador.textContent = totalTickets;

    // 5. LIMPIEZA: Vaciamos los inputs para que queden listos para la siguiente incidencia
    inputEquipo.value = "";
    inputProblema.value = "";
});