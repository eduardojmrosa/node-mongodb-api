//Usando módulo http nativo

const http = require("http");

const port = 8080;
const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    const users = [
      {
        name: "John Doe",
        email: "john.doe@email.com",
      },
      {
        name: "Ane Doe",
        email: "ane.doe@email.com",
      },
      { name: "Jude Doe", email: "jude.doe@email.com" },
      { name: "Mary Doe", email: "mary.doe@email.com" },
      { name: "Stacy Doe", email: "stacy.doe@email.com" },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});
server.listen(port, () => console.log(`Rodando na porta:${port}`));
