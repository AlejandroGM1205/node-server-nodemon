const http = require('http');
const port = 3000;
const host = 'localhost';

const tasks = [
  { id: 1, description: 'Hacer compras', completed: false },
  { id: 2, description: 'Lavar el auto', completed: true },
  { id: 3, description: 'Estudiar para el examen', completed: false }
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(tasks));
});


server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`);
});
