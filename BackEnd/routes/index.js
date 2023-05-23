const express=require('express');
const router = express.Router();
const mainController=require('../controllers/mainController');

module.exports = ()=>{
    /*** Pagina principal */
    router.get('/', mainController.home)
    router.post('/', mainController.post)



    return router;
}