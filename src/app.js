const express = require('express');
const TASK_MODEL = require('./models/task.model.js');
const app = express();

app.use(express.json());

module.exports = app;
