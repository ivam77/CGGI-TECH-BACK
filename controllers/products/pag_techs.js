import Products from "../../models/Product.js";

export default async (req, res, next) => {
  try {
    let pagination = { page: 1, limit: 8 };
    if (req.query.page) {
      pagination.page = req.query.page;
    }
    if (req.body.limit) {
      pagination.limit = req.body.limit;
    }
    const totalDocuments = await Products.find({ type: { $in: ["NOTEBOOK", "DESKTOP", "Phones","Tabs"] } }).countDocuments();
    pagination.page = parseInt(pagination.page);
    pagination.limit = parseInt(pagination.limit);

    const read_products = await Products.find({ type: { $in: ["NOTEBOOK", "DESKTOP", "Phones","Tabs"] } })
    .select("brand title cover_photo price")
    .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
    .limit(pagination.limit > 0 ? pagination.limit : 0);

    const nextPageHasDocuments = pagination.page * pagination.limit < totalDocuments;
    const nextPage = nextPageHasDocuments ? pagination.page + 1 : null;
    const currentPage = pagination.page; // Agregar el número de página actual

    return res.status(200).json({
      success: true,
      response: read_products,
      prev: pagination.page > 1 ? pagination.page - 1 : null,
      next: nextPage,
      currentPage: currentPage
    });
  } catch (error) {
    console.log(error);
  }
};
