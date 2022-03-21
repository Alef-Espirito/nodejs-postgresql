/**
 * Descrição: arquivo responsável por toda a configuração e execução da aplicação.
 * Author: Alef Espirito
 */

 const app = require('./src/app');

 const port = process.env.PORT || 5000;
 
 app.listen(port, () => {
   console.log('Aplicação executando na porta ', port);
 });