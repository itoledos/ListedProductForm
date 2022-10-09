const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')

// Requerir configuración
require('./config/mongoose.config')

// COMANDO NECESARIO PARA GET
app.use(cors());

// COMANDOS NECESARIOS PARA POST
// Se usan para análisis de request body
app.use(express.json());
app.use(express.urlencoded({extend: true}));


const AllProductsRoutes = require('./routes/product.routes');
AllProductsRoutes(app);






// //  Requerir rutas
// // require('./server/routes/user.routes')(app);

// // DEFINIR RUTAS //
// // --> Obtener datos desde Array
// app.get("/api", (req,res) => {
//     res.json({message: "Ruta de GET"})
// });

// // --> Obtener datos desde Array
// // app.get("/api/arrayX/:id", (req, res) => {
// //     // Obtener id desde params
// //     console.log(req.params.id);

// //    // Ejemplo: id=indice 
// //     res.json(arrayX[req.params.id] = req.body )
// // })

// // -->Escribir datos
// app.post("api/arrayX", (req,res) => {
//     // ver datos desde Postman o React
//     console.log(req.body);

//     // Agregar dato a arreglo/base de datos
//     arrayX.push(req.body);

//     // Respuesta necesaria
//     res.json({ status: "ok"})

// })

// // --> Editar datos
// app.put("api/arrayX/:id", (req,res) => {
//     // obtener id desde params
//     const id = req.params.id;
//     // Ejemplo: id=indice 
//     arrayX[id] = req.body;
//     // Respuesta necesaria
//     res.json({status: "ok"});
// })

// // --> Eliminar datos
// app.delete("/api/arrayX/:id", (req,res) => {
//     // obtener id desde params
//     const id = req.params.id;
    
//     // Respuesta necesaria
//     res.json({status: "ok"});
// })



// ESCUCHAR PUERTO //
app.listen(port, () => console.log(`Port: ${port}`));
