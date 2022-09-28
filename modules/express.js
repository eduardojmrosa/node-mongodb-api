const { response } = require("express");
const express = require("express");
const UserModel = require("../src/models/user.model");
const CompanyModel = require("../src/models/company.model");
const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "src/views");

//Método next realiza a execução de um trecho de código antes de realizar a requisição de fato, lembrando que pra realizar a requisição é necessário chamar o método no final do trecho de código
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);
  next();
});
//Consulta os usuários totais no banco
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(201).json(users).send(console.log("Consultado  com sucesso"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Busca um usuário no banco pelo ID
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findById(id);
    res
      .status(201)
      .json(users)
      .send(console.log("Consultado com ID com sucesso"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Cria um usuário novo
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user).send(console.log("Criado com sucesso"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Atualizar usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const users = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(users).send(console.log("Atualizado com sucesso"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Deletar usuário pelo ID
app.delete("/users/:id", async (req, res) => {
  try {
    const users = await UserModel.findByIdAndRemove(req.params.id);
    res.status(200).json(users).send(console.log("Deletado com sucesso"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Tela de views
app.get("/views/users", async (req, res) => {
  await res.render("index");
});
//Cria uma nova empresa
app.post("/company", async (req, res) => {
  const company = await CompanyModel.create(req.body);
  try {
    res
      .status(201)
      .json(company)
      .send(console.log("Empresa criada com sucesso"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Ouvindo porta: ${port}`);
});
