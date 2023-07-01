# API REST de CRUD de e-commerce de livraria. Foi utilizado NodeJS + Express com PostgreSQL e Sequelize.

ENDPOINTS: 
Clientes: /api/clientes => Cadastro, remoção, atualização e listagem de clientes
/api/clientes/login => Autenticação de clientes no sistema de e-commerce.
Nome, email e senha do cliente.

Vendas: /api/vendas => Cadastro, remoção, listagem e atualização de vendas.
ID do Cliente, valor total, forma de pagamento e número de parcelas.

Produtos: /api/produtos => Cadastro, remoção, listagem e atualização de produtos.
Título, descrição, URL da Capa, autor e preço.

ItensVenda: /api/itensvendas => Cadastro, remoção, listagem e atualização dos itens de vendas (com foreign key, relacionamento entre Vendas, Clientes e Produtos).
ID da venda, dos produtos ligados à venda e quantidade de cada produto comprada.
