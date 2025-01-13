const mongoose = require("mongoose");
const dbteste = require("./schemas/toDoSchema");

const Task = mongoose.model("Teste", dbteste);
module.exports = Task;
