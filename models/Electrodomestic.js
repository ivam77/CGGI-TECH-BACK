import { Schema,model } from 'mongoose'

let collection = 'Electrodomestics'            
let schema = new Schema({
    title: { type: String, required: true },
    brand: { type: String, required: true },
    type: { type: String, required: true },
    description: {type: Object, required: true},
    cover_photo: {type: Array, required: true},
    price: { type: Number, required: true },
    Moreview: { type: String, required: true },
    available: { type: Number, required: true }
  },{
    timestamps:true
})

let Electrodomestic = model(collection, schema)
export default Electrodomestic