import { Router } from "express";
import ProductController from "../controller/ProductController";

const productRoutes = Router();

productRoutes.get(
  "/painting-supplies",
  ProductController.getPaintingSupplies()
);
productRoutes.get("/overalls", ProductController.getOveralls());
productRoutes.get("/electrical", ProductController.getElectrical());
productRoutes.get(
  "/for-home-and-cottage",
  ProductController.getForHomeAndCottage()
);
productRoutes.get("/products", ProductController.getAllProducts());
productRoutes.get("/products/:id", ProductController.getProductById);
productRoutes.get("/stocks-products", ProductController.getStocksProducts());
productRoutes.get("/new-products", ProductController.getNewProducts());
productRoutes.post("/create-product", ProductController.onCreateProduct());
productRoutes.put("/edit-product/:id", ProductController.onEditProduct());
productRoutes.delete("/delete-product/:id", ProductController.deleteProduct);

export default productRoutes;
