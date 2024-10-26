const express = require('express');
const app = express();
const port = 3001;

app.get('/servicio-a', (req, res) => {
  console.log("Petición recibida en servicio A");
  res.json({ mensaje: "Respuesta desde Servicio A" });
});

app.listen(port, () => {
  console.log(`Servicio A escuchando en http://localhost:${port}`);
});