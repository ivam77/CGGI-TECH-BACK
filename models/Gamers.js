import { Schema, model } from 'mongoose'

let collection = 'gamers'

let schema = new Schema(
    {
        title: { type: String, required: true },
        description: {
            main: { type: String },
            features: {
                case: String,
                monitor: String,
                processor: String,
                motherboard: String,
                graphics_card: String,
                peripherals: String,
                power_supply: String,
                storage: String,
                ram: String,
                stabilizer: String,
            },
        },
        cover_photo: { type: [String], required: true },
        price: { type: Number, required: true },
        brand: { type: String, required: true },
        category: { type: String, required: true },
        type: { type: String, required: true },
        verified: { type: Boolean },
        verify_code: { type: String },
        available: { type: Number },
        Moreview: { type: Boolean },
    },
    {
        timestamps: true,
    }
);

let Gamers = model(collection, schema)
export default Gamers