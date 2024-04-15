export default (req, res) => {
    if (req.method === "GET") {
        res.status(200).json({ nome: "Pedro" })    
    } else {
        res.status(200).json({ nome: "Maria" })
    }

    res.status(200).json({
        metodo: req.method //testa o tipo de motodo, podendo ser get, post e etc.
    })    
}