import AudioVideo from "../../models/AudioVideo.js"

export default async (req, res, next) => {
    
  const productId = req.params.id

  try {
    const product = await AudioVideo.findById(productId)
    
    res.status(200).json({ 
        success: true,
        message: 'Product found',
        product: product
     })
  } 
  catch (error) {
     next(error)
  }
}
