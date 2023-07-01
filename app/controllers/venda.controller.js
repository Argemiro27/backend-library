const db = require("../models");
const Venda = db.vendas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Criando vendas
    const venda = {
      id_cliente: req.body.id_cliente,
      valortotal: req.body.valortotal,
      formapagamento: req.body.formapagamento,
      numparcelas: req.body.numparcelas,
    };
  
    // Salvando no BD
    Venda.create(venda)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Houve um erro ao criar a venda!"
        });
      });
  };

  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    Venda.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro ao procurar as vendas cadastradas!"
        });
      });
  };
  

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Venda.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao procurar venda de ID=" + id
        });
      });
  };
  
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Venda.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Venda atualizada com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possível atualizar a venda de id=${id}! Venda não encontrada`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao atualizar venda de ID=" + id
        });
      });
  };
  
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Venda.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Venda deletada com sucesso!"
          });
        } else {
          res.send({
            message: `Não foi possível deletar o venda de ID=${id}. Venda não encontrada!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Não foi possível deletar a venda de ID=" + id
        });
      });
  };
  
  exports.deleteAll = (req, res) => {
    Venda.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Vendas deletadas com sucesso!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao tentar excluir as vendas."
        });
      });
  };