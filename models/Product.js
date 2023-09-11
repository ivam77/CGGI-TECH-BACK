import { Schema, model } from 'mongoose'

let collection = 'Products'            
let schema = new Schema({
    title: { type: String, required: true },
    brand: { type: String, required: true },
    category: {type: String, required: true},
    type: { type: String, required: true },
    description: {type: Object, required: true},
    cover_photo: {type: Array, required: true},
    price: { type: Number, required: true },
    Moreview: { type: Boolean },
    available: { type: Number, required: true }
  },{
    timestamps:true
})

let Products = model(collection, schema)
export default Products