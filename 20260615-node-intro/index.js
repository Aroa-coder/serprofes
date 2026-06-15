//Mostramos información del sistema 
// console.log("Inicializando el cuarto de máquinas");
// console.log("Versión Node:");
// console.log(process.version);

//Importamos Express
const express = require("express");

//Creamos la aplicación
const app = express();
//Ruta principal
//Cuando alguien visite ejecuta esta función
app.get("/", (req, res) => {
    //enviar respuesta
    res.send("Servidor funcionando");
});
app.get("/saludo", (req, res) => {
    res.send("Hola alumnos");
});

app.get("/Aroa", (req, res) => {
    res.send("Hola Amigos");
});

app.get("/api", (req, res) => {
    res.json({
        estado: "ok"
    });
});


app.get("/curso", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Asignaturas</title>
            <style>
                table {
                    border-collapse: collapse;
                    width: 50%;
                    margin: 20px auto;
                }

                th, td {
                    border: 1px solid black;
                    padding: 10px;
                    text-align: center;
                }

                th {
                    background-color: #4CAF50;
                    color: white;
                }
            </style>
        </head>
        <body>

            <h2 style="text-align:center;">Lista de Asignaturas</h2>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Asignatura</th>
                </tr>

                <tr><td>1</td><td>HTML5</td></tr>
                <tr><td>2</td><td>JavaScript</td></tr>
                <tr><td>3</td><td>CSS</td></tr>
                <tr><td>4</td><td>Node.js</td></tr>
                <tr><td>5</td><td>Bases de Datos</td></tr>
            </table>

        </body>
        </html>
    `);
});
app.get("/alumno", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Lista de Estudiantes</title>

<style>

body{
    margin:0;
    font-family:Arial, sans-serif;
    background:linear-gradient(135deg,#4f46e5,#9333ea);
    padding:40px;
}

.contenedor{
    max-width:1200px;
    margin:auto;
    background:white;
    border-radius:20px;
    padding:30px;
    box-shadow:0 15px 40px rgba(0,0,0,.25);
}

h1{
    text-align:center;
    color:#4f46e5;
    margin-bottom:30px;
}

table{
    width:100%;
    border-collapse:collapse;
    overflow:hidden;
    border-radius:15px;
}

thead{
    background:linear-gradient(90deg,#4f46e5,#7c3aed);
    color:white;
}

th{
    padding:18px;
    font-size:17px;
}

td{
    padding:16px;
    text-align:center;
}

tbody tr{
    transition:.3s;
}

tbody tr:nth-child(even){
    background:#f8fafc;
}

tbody tr:hover{
    background:#ede9fe;
    transform:scale(1.01);
}

.sexo-f{
    color:#e11d48;
    font-weight:bold;
}

.sexo-m{
    color:#2563eb;
    font-weight:bold;
}

</style>

</head>

<body>

<div class="contenedor">

<h1>🎓 Lista de Estudiantes</h1>

<table>

<thead>
<tr>
<th>#</th>
<th>Nombre</th>
<th>Apellido</th>
<th>Edad</th>
<th>Sexo</th>
</tr>
</thead>

<tbody>

<tr><td>1</td><td>Aroa</td><td>Martín</td><td>19</td><td class="sexo-f">Femenino</td></tr>
<tr><td>2</td><td>Iván</td><td>Martín</td><td>20</td><td class="sexo-m">Masculino</td></tr>
<tr><td>3</td><td>Lucía</td><td>Gómez</td><td>18</td><td class="sexo-f">Femenino</td></tr>
<tr><td>4</td><td>Carlos</td><td>Ruiz</td><td>21</td><td class="sexo-m">Masculino</td></tr>
<tr><td>5</td><td>Paula</td><td>Fernández</td><td>19</td><td class="sexo-f">Femenino</td></tr>
<tr><td>6</td><td>David</td><td>López</td><td>22</td><td class="sexo-m">Masculino</td></tr>
<tr><td>7</td><td>Marta</td><td>Sánchez</td><td>20</td><td class="sexo-f">Femenino</td></tr>
<tr><td>8</td><td>Alejandro</td><td>Pérez</td><td>18</td><td class="sexo-m">Masculino</td></tr>
<tr><td>9</td><td>Elena</td><td>Morales</td><td>21</td><td class="sexo-f">Femenino</td></tr>
<tr><td>10</td><td>Sergio</td><td>Navarro</td><td>20</td><td class="sexo-m">Masculino</td></tr>
<tr><td>11</td><td>Claudia</td><td>Gil</td><td>19</td><td class="sexo-f">Femenino</td></tr>
<tr><td>12</td><td>Daniel</td><td>Torres</td><td>22</td><td class="sexo-m">Masculino</td></tr>
<tr><td>13</td><td>Laura</td><td>Vega</td><td>18</td><td class="sexo-f">Femenino</td></tr>
<tr><td>14</td><td>Mario</td><td>Castro</td><td>21</td><td class="sexo-m">Masculino</td></tr>
<tr><td>15</td><td>Sara</td><td>Ortega</td><td>20</td><td class="sexo-f">Femenino</td></tr>
<tr><td>16</td><td>Adrián</td><td>Ramos</td><td>19</td><td class="sexo-m">Masculino</td></tr>
<tr><td>17</td><td>Andrea</td><td>León</td><td>22</td><td class="sexo-f">Femenino</td></tr>
<tr><td>18</td><td>Pablo</td><td>Romero</td><td>18</td><td class="sexo-m">Masculino</td></tr>
<tr><td>19</td><td>Natalia</td><td>Molina</td><td>20</td><td class="sexo-f">Femenino</td></tr>
<tr><td>20</td><td>Hugo</td><td>Herrera</td><td>21</td><td class="sexo-m">Masculino</td></tr>

</tbody>

</table>

</div>

</body>
</html>
`);
});
app.get("/profesores", (req, res) => {
res.send(`

<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Profesores</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, sans-serif;
}

body{

background:
radial-gradient(
circle at center,
#8b5cf6 0%,
#5b21b6 40%,
#1e1b4b 100%
);

min-height:100vh;

display:flex;
justify-content:center;
align-items:center;

padding:40px;
}

.holder{

width:100%;
max-width:1100px;

background:rgba(255,255,255,.12);

backdrop-filter:blur(15px);

border-radius:30px;

padding:40px;

box-shadow:

0 20px 80px rgba(0,0,0,.40),
inset 0 0 60px rgba(255,255,255,.15);

border:1px solid rgba(255,255,255,.20);

}

h1{

text-align:center;

color:white;

font-size:42px;

margin-bottom:35px;

text-shadow:
0 0 25px rgba(255,255,255,.7);

}

table{

width:100%;

border-collapse:collapse;

overflow:hidden;

border-radius:20px;

background:
rgba(255,255,255,.10);

}

thead{

background:
linear-gradient(
90deg,
#ec4899,
#8b5cf6
);

}

th{

color:white;

padding:18px;

font-size:18px;

}

td{

padding:18px;

text-align:center;

color:white;

}

tbody tr{

transition:.4s;

}

tbody tr:nth-child(even){

background:
rgba(255,255,255,.05);

}

tbody tr:hover{

transform:scale(1.02);

background:
rgba(255,255,255,.18);

box-shadow:
0 0 40px rgba(255,255,255,.25);

}

.badge{

padding:8px 14px;

border-radius:20px;

font-weight:bold;

display:inline-block;

}

.m{

background:
linear-gradient(
45deg,
#2563eb,
#60a5fa
);

box-shadow:
0 0 15px rgba(59,130,246,.6);

}

.f{

background:
linear-gradient(
45deg,
#ec4899,
#fb7185
);

box-shadow:
0 0 15px rgba(236,72,153,.6);

}

</style>

</head>

<body>

<div class="holder">

<h1>👨‍🏫 Profesores</h1>

<table>

<thead>
<tr>
<th>#</th>
<th>Nombre</th>
<th>Apellido</th>
<th>Edad</th>
<th>Sexo</th>
</tr>
</thead>

<tbody>

<tr>
<td>1</td>
<td>Jorge</td>
<td>Oscano</td>
<td>45</td>
<td><span class="badge m">Masculino</span></td>
</tr>

<tr>
<td>2</td>
<td>Victoria</td>
<td>Fernández</td>
<td>38</td>
<td><span class="badge f">Femenino</span></td>
</tr>

<tr>
<td>3</td>
<td>Ana</td>
<td>García</td>
<td>41</td>
<td><span class="badge f">Femenino</span></td>
</tr>

<tr>
<td>4</td>
<td>Miguel</td>
<td>Santos</td>
<td>50</td>
<td><span class="badge m">Masculino</span></td>
</tr>

<tr>
<td>5</td>
<td>Beatriz</td>
<td>Luna</td>
<td>36</td>
<td><span class="badge f">Femenino</span></td>
</tr>

</tbody>

</table>

</div>

</body>

</html>

`);
});

//Arrancamos servidor
//Escucha el puerto 3000
app.listen(3000, () => {
    console.log("Servidor iniciado");
});