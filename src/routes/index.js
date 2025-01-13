const express = require("express");
const Dbteste = require("../Schemas/toDoSchema");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("API de tarefas funcionando");
});

router.post("/tarefas", async (req, res) => {
  const novaTarefa = new Dbteste({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    completado: req.body.completado,
    prioridade: req.body.prioridade,
  });

  try {
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar tarefa", error });
  }
});

router.delete("/tarefas/:id", async (req, res) => {
  try {
    const tarefaId = req.params.id;
    if (!tarefaId) {
      return res.status(400).json({
        error: "ID é obrigatorio",
      });
    }
    const deletetarefa = await Dbteste.findByIdAndDelete(tarefaId);
    return res.json(deletetarefa);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.put("/tarefas");

module.exports = router;
