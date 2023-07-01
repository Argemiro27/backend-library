module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define("produto", {
    titulo: {
      type: Sequelize.STRING
    },
    capa: {
      type: Sequelize.STRING
    },
    autor: {
      type: Sequelize.STRING
    },
    descricao: {
      type: Sequelize.STRING
    },
    preco: {
      type: Sequelize.STRING
    }
  });

  return Produto;
};
