// colocando três pontos no nome do arquivo, ira receber todos os dados da URL
// http://localhost:3000/api/params/sim/1
/*
{
    "params": {
        "dados": [
            "sim",
            "1"
        ]
    }
}
*/

// colocando duplo colchetes, os parametros vão ser opcionais
// http://localhost:3000/api/params

export default function params(req, res) {
    res.status(200).json({
        params: req.query
    })
}