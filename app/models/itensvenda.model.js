module.exports = (sequelize, Sequelize) => {
  const ItensVenda = sequelize.define("itensvenda", {
    id_venda: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Venda', // Nome do modelo referenciado (tabela Venda)
        key: 'id' // Nome do campo referenciado (chave primária da tabela Venda)
      }
    },
    id_produto: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    quantidade: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  });

  return ItensVenda;
};
