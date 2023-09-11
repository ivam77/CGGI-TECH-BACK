import { Schema,model,Types } from "mongoose"

let collection = 'products'
let schema = new Schema({
    products_id: { type:Types.ObjectId,ref: 'general',required:true },
    title: { type: String,required:true},
    brand: {type:String,required:true},
    type: {type: String,required:true},
    price:{type:Number,required:true},
    verify_code:{type:String,required:true},
    cover_photo: { type:String,required:true },
    description: { type:String,required:true},
    available:{type:String,required:true},
    
},{
    timestamps:true
})

const Products = model(collection,schema)
export default Products