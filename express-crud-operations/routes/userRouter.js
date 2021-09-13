const express = require("express");
const userRouter = express();
const User = require("../models/userSchema");

// POST request

userRouter.post("/user", async (req, res, next) => {

  const user = new User(req.body);
  try {
	await user.save()
	res.status(201).send(user)
  } catch (error) {
	 res.status(400)
	 return next(new Error("Error")) 
  }

})

// GET ALL request

userRouter.get("/users", async (req, res, next) => {

	try {
		const users = await User.find({}) 
		res.send(users)
	} catch (error) {
		res.status(500).send(error)
	}
});

// GET INDIVIDUAL  request

userRouter.get(`/users/:userId`, async (req, res, next) => {
	const _id = req.params.userId;
	try {
		const user = await User.findById(_id)
		if(!user){
			return res.status(404).send({message: "User Not found!"})
		}
		res.send(user)
	} catch (error) {
		res.status(500).send(new Error("Something went Wrong"))
	}
});

userRouter.patch('/users/:userId', async (req, res) => {
	const updates = Object.keys(req.body)
	const allowedUpdates = ["email", "password", "username"]
	const isValid = updates.every((update) => {
		return allowedUpdates.includes(update)
	})

	if(!isValid){
		return res.status(400).send({error: "Invalid updates"})
	}
	try {
		const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
			new: true,
			runValidators: true,
			
		})
		if(!user){
			return res.status(404).send()
		}
		res.send(user)
	} catch (error) {
		res.status(400).send(new Error("You are not allowed to update this users information"))
	}
})
userRouter.delete('/users/:userId', async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.userId)
		if(!user){
			return res.status(404).send()
		}
		res.send(user)
	} catch (error) {
		res.status(400).send()
	}
})



module.exports = userRouter;
