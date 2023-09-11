import Product from '../../models/Product.js'

export default async(req,res,next)=> {

try {
        let destroyed = await Product.deleteOne
        ({ _id: req.params.id });
        if (destroyed.deletedCount){
        return res.status(200).json({
        response: destroyed,
        success:true,
        message:"Document destroyed"
     })
        } 
    } catch(error) {
    console.log(error);
    }
}