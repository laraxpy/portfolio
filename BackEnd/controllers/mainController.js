
exports.home = (req, res)=>{
    res.send('Bienvenido al Home Page')
    
}
exports.post = (req, res)=>{
    const datos = req.body;
    console.log(datos)
    res.json(datos)
}