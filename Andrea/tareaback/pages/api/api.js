// API DE EXPRESS
const express = require('express'); // Importar express
const api = express(); // Crear la instancia
const port = 8001;

let respuesta = {
  "tipoRespuesta": "JSON",
  "MejorVideojuego": "NierAutomata"
};

// CORS: Permite acceder a la API
api.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

api.use(express.json()); // Middleware para parsear JSON

api.get('/api', (req, res) => { // Mandar JSON
  res.json(respuesta); // Cambiado a res.json()
});

api.listen(port, () => {
  console.log(`Se inició el puerto ${port}`);
});