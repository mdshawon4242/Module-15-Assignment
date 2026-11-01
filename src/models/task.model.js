const mongoose = require('mongoose');
const TASK_SCHEMA = new mongoose.Schema({
  title: String,
  description: String,
  completed: String,
});

const TASK_MODEL = mongoose.model('task', TASK_SCHEMA);

module.exports = TASK_MODEL;
