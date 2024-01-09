const express=require('express');
const Salescontroller=require('../controllers/SalesController')


const router=express.Router();



// Product
router.get('/api/sales/total-revenue',Salescontroller.SalesList)


//GET /api/sales/total-revenue


// User






module.exports=router;