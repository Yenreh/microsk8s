const express = require('express');
const app = express();
const port = 3002;

app.get('/servicio-b', (req, res) => {
    console.log("Petición recibida en servicio B");
  res.json({ mensaje: "Respuesta desde Servicio B" });
});

app.listen(port, () => {
  console.log(`Servicio B escuchando en http://localhost:${port}`);
});