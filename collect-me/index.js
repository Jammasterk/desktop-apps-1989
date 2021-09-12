const express = require('express')
const cors = require('cors')
const Data = require("./config")
const app = express()
app.use(express.json())
app.use(cors())

app.post("/create", async(req, res) => {
	const data = req.body
	console.log("Data of users", data)
	await Data.add(data)
	res.send({msg: "User Added"})
})

app.listen(4000, () => console.log("Server is running"))
