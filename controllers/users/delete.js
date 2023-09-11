import User from '../../models/User.js'

export default async(req,res,next)=> {

try {
        let destroyed = await User.deleteOne
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