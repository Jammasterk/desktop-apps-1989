const express = require("express");
const app = express();
const socket = require("socket.io");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes")

mongoose.connect("mongodb://localhost:27017/node-project", {
	useNewUrlParser: true,
	useUnifiedTopology: true
},
()=> console.log("Database is running")
)

app.use('/user', userRoute)

app.listen(4000, () => {
  console.log("Server is listening");
});
