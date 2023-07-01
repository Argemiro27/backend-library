module.exports = app => {
  const vendas = require("../controllers/venda.controller.js");
  var router = require("express").Router();

  // Criar venda
  router.post("/", vendas.create);

  // Retornar todas vendas
  router.get("/", vendas.findAll);

  // Retornar uma venda específica pelo ID
  router.get("/:id", vendas.findOne);

  // Atualizar venda
  router.put("/:id", vendas.update);

  // Deletar venda
  router.delete("/:id", vendas.delete);

  // Deletar todas as vendas
  router.delete("/", vendas.deleteAll);

  app.use("/api/vendas", router);
};
