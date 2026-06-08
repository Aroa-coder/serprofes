// 1. NUESTRO SÚPER ARRAY (Array lleno de objetos)
const carrito = [
    {nombre: "🥖pan de masa madre", precio:1.20 },
    {nombre: "🥛Leche entera", precio: 0.90},
    {nombre: "🥚 Huevos camperos", precio: 2.50},
    {nombre: "🥑 Aguacate ", precio:1.00},
    {nombre: "🫑 Pimiento", precio: 1.15},
    {nombre: "🍅Tomate", precio: 2.00},
    {nombre: "🥦 Brócoli", precio: 0.99},
];
//CÓDIGO DE APOYO VISUAL
let lista_HTML = document.getElementById("lista-producto"); //I -> Indice, indica la popsición del elemento (el primer elemento comienza SIEMPRE en 0)
for (let i = 0; i < carrito.length;i++){ // carrito.lenght -> te dice el n. de elementos que tienes en la lista array (en mi caso 7 en la lista

    // Usamos carrito[i].nombre para sacar el dato en cada vuelta
lista_HTML.innerHTML += `
<li><span>${carrito[i].nombre}</span>
<span>${carrito[i].precio.toFixed(2)}€</span> 
`

}
function cobrar(){
    // 1. Calculamos el subtotal
    let subtotal = 0; // <--- Cambiado de sumaTotal a subtotal
    for (let i = 0; i < carrito.length; i++){
        subtotal = subtotal + carrito[i].precio;
    }

    // 2. Calculamos el IVA (21%) y el Total
    const tasaIVA = 0.21;
    let totalIVA = subtotal * tasaIVA; // <--- Ahora sí encuentra "subtotal"
    let totalFinal = subtotal + totalIVA;

    // 3. Mostramos los resultados en el HTML
    document.getElementById('resultado-total').innerHTML = `
    <span class="detalle">Subtotal: ${subtotal.toFixed(2)} €</span>
    <span class="detalle">IVA (21%): ${totalIVA.toFixed(2)} €</span>
    <span class="monto-final">Total: ${totalFinal.toFixed(2)} €</span>
    `;
}