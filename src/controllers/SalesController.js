const {BrandListService}=require('../services/ProductServices')

exports.ProductBrandList=async(req,res)=>{
    let result=await BrandListService();
    return res.status(200).json(result)
}