module.exports = (sequelize, Sequelize) => {
  const Venda = sequelize.define("venda", {
    id_cliente: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Cliente', // Nome do modelo referenciado (tabela Cliente)
        key: 'id' // Nome do campo referenciado (chave primária da tabela Cliente)
      }
    },
    valortotal: {
      type: Sequelize.STRING
    },
    formapagamento: {
      type: Sequelize.STRING
    },
    numparcelas: {
      type: Sequelize.STRING
    }
  });


  return Venda;
};
