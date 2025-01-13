const mongoose = require("mongoose");

const dbtesteSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  completado: Boolean,
  prioridade: String,
});

const Dbteste = mongoose.model("Dbteste", dbtesteSchema);

module.exports = Dbteste;
