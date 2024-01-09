const {SalesService}=require('../services/SalesServices')

exports.SalesList=async(req,res)=>{
    let result=await SalesServices();
    return res.status(200).json(result)
}