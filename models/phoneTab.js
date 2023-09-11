import { Schema,model } from 'mongoose'

let collection = 'PhoneTabs'            //nombre de la coleccion donde se van a guardar todos los documentos
let schema = new Schema({           //molde de los datos que se van a guardar en esa coleccion
    title: { type: String, required: true },
    brand: { type: String, required: true },
    type: { type: String, required: true },
    description: {
      Text: [{ type: String }],
      Screen: { type: String },
      Processor: { type: String },
      OperatingSystem: { type: String },
      Storage: { type: String },
      Camera: { type: String },
      Conectivity: { type: String },
      NFC: { type: String },
      Battery: { type: String },
      Color: { type: String }
    },
    cover_photo: [{ type: String, required: true }],
    price: { type: Number, required: true },
    Moreview: { type: Boolean },
    available: { type: Number, required: true }
  },{
    timestamps:true
})

let PhoneTabs = model(collection,schema)
export default PhoneTabs