import Product from '../../models/Product.js'

export default async (req, res, next) => {
  try {
    const ProductId = req.params.id;
    const updatedData = req.body;
    
    const updated = await Product.findOneAndUpdate(
      { _id: ProductId },
      updatedData,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
        response: updated,
        success: true,
        message: "Product updated",
        });
  } catch (error) {
    console.log(error);
  }
};
