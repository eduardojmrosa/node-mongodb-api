const mongoose = require("mongoose");

async function connectToDatabase() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.5dfdnji.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Ocorreu um erro", error);
      }
      return console.log("Conexão realizada com sucesso!");
    }
  );
}

module.exports = connectToDatabase;
