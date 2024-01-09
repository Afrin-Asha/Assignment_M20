const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
        productID:{type:mongoose.Schema.Types.ObjectId,required:true},
        product:{type:String,required:true},
        quantity:{type:Number,required:true},
        price:{type:Number,required:true},
    },
    {timestamps:true,versionKey:false}
)
const SaleModel=mongoose.model('sales',DataSchema)
module.exports=SaleModel