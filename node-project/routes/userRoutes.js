const express = require("express");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const url = "mongodb://localhost:27017/node-project";
const userRoutes = express.Router();
const User = require("../models/userSchema");

const storage = new GridFsStorage({ url });

const upload = multer({ storage });

userRoutes.post("/", upload.single("avatar"), async (req, res, next) => {
	let result;
  try {
    let user = new User({
		username: req.body.username,
		password: req.body.password,
		avatar: req.body.avatar                                                                   

	})
	await user.save()
	res.json(user)
  } catch (error) {
	  console.log(error)
  }
});

userRoutes.get("/", async (req, res) => {
	try {
		let user = await User.find()
		res.json(user)
	} catch (error) {
		console.log(error)
	}
})

userRoutes.put("/:userId", upload.single("avatar"), async (req, res) => {
	try {
		let user = await User.findById(req.params.userId) 
		let result;
		const data = {
			username: req.body.username || user.username,
			password: req.body.password || user.password,
			avatar: result?.files_id || user.avatar,
		}
		user = await User.findByIdAndUpdate(req.params.userId, data, {new: true})	
		res.json(user)
	} catch (error) {
		console.log(error)
	}
})

userRoutes.delete('/:userId', async (req, res, next) => {
	try {
		let user = await User.findById(req.params.userId)
		await user.remove()
		res.json(user)
	} catch (error) {
		console.log(error)
	}
})

module.exports = userRoutes