const db = require("../models");
const ItensVenda = db.itensvendas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Criando itensvendas
  const itensvenda = {
    id_venda: req.body.id_venda,
    id_produto: req.body.id_produto,
    quantidade: req.body.quantidade,
  };

  console.log('Dados recebidos do frontend:', itensvenda);

  // Salvando no BD
  ItensVenda.create(itensvenda)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error('Erro ao criar o itensvenda:', err);
      res.status(500).send({
        message: err.message || "Houve um erro ao criar o itensvenda!",
        error: err, // Retorna o objeto de erro completo para depuração
      });
    });
};



  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    ItensVenda.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro ao procurar os itens de venda cadastrados!"
        });
      });
  };
  

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    ItensVenda.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao procurar itensvenda de ID=" + id
        });
      });
  };
  
  exports.update = (req, res) => {
    const id = req.params.id;
  
    ItensVenda.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ItensVenda atualizado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possível atualizar o itensvenda de id=${id}! ItensVenda não encontrado`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao atualizar itensvenda de ID=" + id
        });
      });
  };
  
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    ItensVenda.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ItensVenda deletado com sucesso!"
          });
        } else {
          res.send({
            message: `Não foi possível deletar o itensvenda de ID=${id}. ItensVenda não encontrado!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Não foi possível deletar o itensvenda de ID=" + id
        });
      });
  };
  
  exports.deleteAll = (req, res) => {
    ItensVenda.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} ItensVendas deletados com sucesso!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao tentar excluir os itens das vendas."
        });
      });
  };