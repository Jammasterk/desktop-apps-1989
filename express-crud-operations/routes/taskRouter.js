const express = require("express");
const taskRouter = express.Router();
const Task = require("../models/taskSchema");


// CREATE NEW TASK

taskRouter.post("/task", async (req, res, next) => {
  const newTask = new Task(req.body);
  try {
    await newTask.save();
    res.status(201).send(newTask);
  } catch (error) {
    res.status(500).send(new Error("Failed to add new task"));
  }
});

// READ TASKS

taskRouter.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(new Error("Failed to get tasks"));
  }
});

// READ USER TASKS

taskRouter.get("/tasks/:taskId", async (req, res, next) => {
  const _id = req.params.taskId;
  try {
    const task = await Task.findById(_id);
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(new Error("Failed to get task"));
  }
});

// UPDATE USER TASKS

taskRouter.patch("/tasks/:taskId", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(400);
    }
	res.send(task)
  } catch (error) {
	  res.status(new Error("Unable to update. Please try again"))
  }
});

// DELETE USER TASKS

taskRouter.delete("/tasks/:taskId", async (req, res, next) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.taskId)
		if(!task){
			res.status(404)
			return next(new Error("Task with that ID does not exist"))
		}
		res.send(task)
	} catch (error) {
		res.status(500).send(new Error("Something went wrong"))
	}
})

module.exports = taskRouter;
