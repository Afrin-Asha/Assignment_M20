const SaleModel = require("../models/SaleModel");
const mongoose = require("mongoose");
const ObjectID=mongoose.Types.ObjectId


const SalesService = async () => {
    try {
        let data= await SaleModel.aggregate([
            {
                $group: {
                  
                  totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } }
                }
              }

        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
   
}



module.exports={
    SalesService
}