require("dotenv").config();
const express = require('express');
const TASK_MODEL = require('./models/task.model.js');
const app = express();

app.use(express.json());

app.post('/todos', async (req, res) => {
  const data = req.body;
  const task = await TASK_MODEL.create({
    title: data.title,
    description: data.description,
    completed: data.completed,
  });

  res.status(200).json({
    message: 'Task created Successfully',
    task,
  });
});

app.get('/todos', async (req, res) => {
  const tasks = await TASK_MODEL.find();
  res.status(200).json({
    message: 'All task are fetch Successfully',
    tasks,
  });
});

app.get('/todos/:id', async (req, res) => {
  const id = req.params.id;
  const todo = await TASK_MODEL.findOne({ _id: id });
  res.status(200).json({
    message: 'Todo retrieved successfully',
    todo,
  });
});

app.put('/todos/:id', async (req, res) => {
  const id = req.params.id;
  const todo = await TASK_MODEL.findOneAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
    },
  );
  if (!todo) {
    return res.status(404).json({
      message: 'Todo not found',
    });
  }

  res.status(200).json({
    message: 'Todo updated successfully',
    todo,
  });
});

app.delete('/todos/:id', async (req, res) => {
  const id = req.params.id;
  const todo = await TASK_MODEL.findOneAndDelete({ _id: id });
  res.status(200).json({
    message: 'Task deleted successfully',
  });
});
module.exports = app;
