const express = require('express');
const app = express();
const routes = require('../routes/index')
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes());
app.listen(port, ()=>{
    console.log('Server Backend corriendo en puerto ', port)
})

