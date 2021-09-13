const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3500
const morgan = require("morgan")
require('dotenv').config
const cloudinary = require('cloudinary')
const multer = require('multer')

console.log(multer)

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/task-manager", {
	useNewUrlParser: true,
	useUnifiedTopology: true
},
()=> console.log("Connected to DB")
)

app.use("/", require("./routes/userRouter.js"))
app.use("/", require("./routes/taskRouter"))

app.listen(PORT, ()=> {
	console.log("server is up on port " + PORT)
})


