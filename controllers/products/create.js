import Product from '../../models/Product.js'
export default async (req, res) =>{
    try {
        const one =await Product.create(req.body);
        return res.status(201).json({
            response: one,
            success:true,
            message:"Product created"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            response: null,
            success: false,
            message:error.message
        })
    }
}