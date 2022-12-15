import { createCategory, getCategorys, getCategoryId, deleteCategoryId, updateCategoryId } from "./controllerCategory.js";
import { createProducts, getProducts, getProductsId, updateProductsId, deleteProductsId , cargarArchivoImg  } from "./controllerProducts.js";

export {
  createProducts,
  getProducts,
  getProductsId,
  deleteProductsId,
  updateProductsId,
  createCategory,
  getCategoryId,
  getCategorys,
  deleteCategoryId,
  updateCategoryId,
  cargarArchivoImg
};