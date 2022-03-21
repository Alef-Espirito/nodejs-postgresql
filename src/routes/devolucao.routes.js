/**
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'devolucao'.
 * Author: Alef Espirito
 */

 const router = require('express-promise-router')();
 const devolucaoController = require('../controllers/devolucao.controller');
 
 // ==> Definindo as rotas do CRUD - 'devolucao':
 
 // ==> Rota responsável por criar um novo 'devolucao': (POST): localhost:5000/api/devolucao
 router.post('/devolucao', devolucaoController.createDevolucao);

 // ==> Rota responsável por selecionar 'devolucao' pelo 'Id': (GET): localhost:5000/api/devolucao/:id
 router.get('/devolucao/:id', devolucaoController.findDevolucaoById);

 // ==> Rota responsável por listar todos os 'devolucao': (GET): localhost:5000/api/devolucao
 router.get('/devolucao', devolucaoController.listarTodasDevolucoes);

 // ==> Rota responsável por atualizar 'devolucao' pelo 'Id': (PUT): localhost: 5000/api/devolucao/:id
 router.put('/devolucao/:id', devolucaoController.updatedevolucaoById);

 
// ==> Rota responsável por excluir 'devolucao' pelo 'Id': (DELETE): localhost:5000/api/devolucao/:id
 router.delete('/devolucao/:id', devolucaoController.deleteDevolucaoById);
 
 module.exports = router;