module.exports = app => {
  const itensvendas = require("../controllers/itensvenda.controller.js");
  var router = require("express").Router();

  // Criar relação item venda
  router.post("/", itensvendas.create);

  // Retornar todos itensvendas
  router.get("/", itensvendas.findAll);

  // Retornar um cliente específico pelo ID
  router.get("/:id", itensvendas.findOne);

  // Atualizar cliente
  router.put("/:id", itensvendas.update);

  // Deletar cliente
  router.delete("/:id", itensvendas.delete);

  // Deletar todos os itensvendas
  router.delete("/", itensvendas.deleteAll);

  app.use("/api/itensvendas", router);
};
