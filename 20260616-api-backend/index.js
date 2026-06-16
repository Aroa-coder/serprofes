//1. Importamos la herramienta principal (Express)
const express = require("express");

//2.Creamos nuestra aplicación (nuestro servidor)
const app = express();

//3. MIDDLEWARE (La línea mágica) 
//Esto es un traductor. Le dice a Node: "Si alguien te envía datos desde fuera,tradúcelos al formato Json para que podamos
//leerlos". Si falta esto, el POST falla.
app.use(express.json());
//NUESTRA BASE DE DATOS
//Guardamos información temporalmente en una lista Array dentro de la memoria del servidor
let estudiantes = [
    {id: 1, nombre:"Aroa", curso: "React"},
    {id: 2, nombre: "Jose", curso: "Node"}
];

let profesores = [
    {id: 1, nombre:"Jorge Oscanoav", asignatura: "Desarrollador web"},
    {id: 2, nombre:"Julio Iglesias", asignatura: "Frontend"}
];

//🚩RUTA GET: PARA LEER DATOS
//Cuándo alguien pregunte por "/api/estudiantes", el servidor muestra la lista
app.get("/api/estudiantes", (req,res)=>{
    res.json(estudiantes);
});

app.get("/api/profesores", (req,res)=>{
    res.json(profesores);
});


//🚩RUTA POST: PARA GUARDAR DATOS NUEVOS 
//Cuándo alguien envíe información a "api/estudiantes", hacemos los siguiente
app.post("/api/estudiantes",(req,res) => {
//A. Atrapamos los datos que vienen de fuera (viven dentro de req.body)
const nuevoEstudiante = req.body;
//B. Metemos ese estudiante nuevo en nuestra lista usando .push()
profesores.push(nuesvoEstudiante);
//C. Le respondemos al usuario confirmando que todo ha ido bien 
res.json({
    mensaje:"¡Estudiante añadido con éxito a la base de datos!",
    listaActualizada: estudiantes
});
});


app.post("/api/profesores",(req,res) => {
const nuevosProfesores = req.body;
profesores.push(nuevosProfesores);
res.json({
    mensaje:"¡Profesor añadido con éxito a la base de datos!",
    listaActualizada: profesores
});
});

//5.ENCENDEMOS EL MOTOR 💨
//Le decimos al servidor que se quede vigilando el puerto 3000
app.listen(3000, () =>{
    console.log("🎊¡Servidor funcioanndo! URL:http//localhost:3000");
});