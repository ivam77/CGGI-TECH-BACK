import Products from "../../models/Product.js"

export default async (req, res, next) => {

   const productId = req.params.id

   try {
      const product = await Products.findById(productId)

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
