/**
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
 * Author: Alef Espirito
 */

 const express = require('express');

 const router = express.Router();
 
 router.get('/api', (req, res) => {
   res.status(200).send({
     success: 'true',
     message: 'Conxão completa',
     version: '1.0.0',
   });
 });
 
 module.exports = router;
 