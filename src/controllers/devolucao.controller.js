const db = require("../config/database");

// ==> Método responsável por criar uma nava 'devolucao':

exports.createDevolucao = async (req, res) => {
  const { 
    devolucaoNumeroCompra,
    devolucaoConta, 
    devolucaoCliente,  
    devolucaoQtd, 
    devolucaoVolta, 
    devolucaoProduto,
    devolucaoProcedimento,
    devolucaoMarca,
    devolucaoCor,
    devolucaoObs 
  } = req.body;
  const { rows } = await db.query(

    "INSERT INTO devolucao (devolucaoNumeroCompra, devolucaoConta, devolucaoCliente, devolucaoQtd, devolucaoVolta, devolucaoProduto,devolucaoProcedimento,devolucaoMarca,devolucaoCor,devolucaoObs) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    
    [ devolucaoNumeroCompra,
      devolucaoConta, 
      devolucaoCliente,  
      devolucaoQtd, 
      devolucaoVolta, 
      devolucaoProduto,
      devolucaoProcedimento,
      devolucaoMarca,
      devolucaoCor,
      devolucaoObs]
  );

  res.status(201).send({
    message: "Devolucao adicionado com sucesso!",
    body: {
      devolucao: { 
          devolucaoNumeroCompra,
          devolucaoConta, 
          devolucaoCliente,  
          devolucaoQtd, 
          devolucaoVolta, 
          devolucaoProduto,
          devolucaoProcedimento,
          devolucaoMarca,
          devolucaoCor,
          devolucaoObs
        }
    },
  });
};

// ==> Método responsável por listar todas as 'devoluções':
exports.listarTodasDevolucoes = async (req, res) => {
    const response = await db.query('SELECT * FROM devolucao ORDER BY devolucaoCliente ASC');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'devolucao' pela 'devolucaoNumeroCompra':
exports.findDevolucaoById = async (req, res) => {
    const devolucaoNumeroCompra = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM devolucao WHERE devolucaoNumeroCompra = $1', [devolucaoNumeroCompra]);
    res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar uma 'devolucao' pelo 'devolucaoNumeroCompra':
exports.updatedevolucaoById = async (req, res) => {
    const devolucaoNumeroCompra = parseInt(req.params.id);
    const { 
      devolucaoConta, 
      devolucaoCliente,  
      devolucaoQtd, 
      devolucaoVolta, 
      devolucaoProduto,
      devolucaoProcedimento,
      devolucaoMarca,
      devolucaoCor,
      devolucaoObs } = req.body;
  
    const response = await db.query(
      "UPDATE devolucao SET devolucaoConta = $1, devolucaoCliente = $2, devolucaoQtd = $3, devolucaoVolta = $4, devolucaoProduto =$5, devolucaoProcedimento = $6, devolucaoMarca = $7, devolucaoCor = $8, devolucaoObs = $9  WHERE devolucaoNumeroCompra = $10",
      [ 
        devolucaoConta, 
        devolucaoCliente,  
        devolucaoQtd, 
        devolucaoVolta, 
        devolucaoProduto,
        devolucaoProcedimento,
        devolucaoMarca,
        devolucaoCor,
        devolucaoObs,
        devolucaoNumeroCompra]
    );
  
    res.status(200).send({ message: "devolucao Editada com sucesso!" });
};

  // ==> Método responsável por excluir uma 'devolucao' pelo 'Id':
exports.deleteDevolucaoById = async (req, res) => {
    const devolucaoId = parseInt(req.params.id);
    await db.query('DELETE FROM devolucao WHERE devolucaoId = $1', [
      devolucaoId
    ]);
  
    res.status(200).send({ message: 'devolucao excluido com sucesso!', devolucaoId });
};