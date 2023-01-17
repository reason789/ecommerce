const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://sixPackProgrammer:sixPackProgrammer@cluster0.0jijw.mongodb.net/Ecommerce?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
