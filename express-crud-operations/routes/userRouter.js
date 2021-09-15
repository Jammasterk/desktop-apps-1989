const express = require("express");
const userRouter = express();
const User = require("../models/userSchema");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

// POST request

userRouter.post("/user", upload.single("image"), async (req, res, next) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    avatar: result.secure_url,
    cloudinary_id: result.public_id
  });
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400);
    return next(new Error("Error"));
  }
});

// GET ALL request

userRouter.get("/users", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET INDIVIDUAL  request

userRouter.get(`/users/:userId`, async (req, res, next) => {
  const _id = req.params.userId;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send({ message: "User Not found!" });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(new Error("Something went Wrong"));
  }
});

// UPDATE request

userRouter.patch("/users/:userId", upload.single("image"), async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["email", "password", "username", "avatar"];
  const isValid = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValid) {
    return res.status(400).send({ error: "Invalid updates" });
  }
  try {
	await cloudinary.uploader.destroy(info.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      username: req.body.username || info.username,
      avatar: result.secure_url || info.avatar,
      cloudinary_id: result.public_id || info.cloudinary_id,
    };
    const user = await User.findByIdAndUpdate(req.params.userId, data, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res
        .status(404)
        .send(
          new Error("You are not allowed to update this users information")
        );
    }
    res.send(user);
  } catch (error) {
    res.status(400).send();
  }
});

userRouter.delete("/users/:userId", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
	await cloudinary.uploader.destroy(user.cloudinary_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send();
  }
});

module.exports = userRouter;
