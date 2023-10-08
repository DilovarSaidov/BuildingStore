import { Request, Response } from "express";
import { ProductModel } from "../models/ProductModel";

export default class ProductController {
  static getAllProducts() {
    return async (req: Request, res: Response) => {
      try {
        const products = await ProductModel.getProducts();
        return res.json(products);
      } catch (error) {
        return res.status(401).json(error);
      }
    };
  }

  static getPaintingSupplies() {
    return async (req: Request, res: Response) => {
      try {
        const products = await ProductModel.GetPaintingSupplies();
        if (products.length === 0) {
          return res.status(404).json({ error: "Not found" });
        }
        return res.send(products);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    };
  }

  static getElectrical() {
    return async (req: Request, res: Response) => {
      try {
        const products = await ProductModel.GetElectrical();

        if (products.length === 0) {
          return res.status(404).json({ error: "Not found" });
        }

        return res.send(products);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error " });
      }
    };
  }

  static getOveralls() {
    return async (req: Request, res: Response) => {
      try {
        const products = await ProductModel.GetOveralls();

        if (products.length === 0) {
          return res.status(404).json({ error: "Not found" });
        }

        return res.send(products);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error " });
      }
    };
  }

  static getForHomeAndCottage() {
    return async (req: Request, res: Response) => {
      try {
        const products = await ProductModel.GetForHomeAndCottage();

        if (products.length === 0) {
          return res.status(404).json({ error: "Not found" });
        }

        return res.send(products);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error " });
      }
    };
  }

  static async getProductById(res: any, req: Request) {
    const { id } = req.params;
    try {
      const product = await ProductModel.GetProductById(id);

      if (product === undefined || null) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.send(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failde to get product" });
    }
  }

  static getStocksProducts() {
    return async (req: Request, res: Response) => {
      try {
        const products = await ProductModel.GetStocksProducts();
        if (products.length === 0) {
          return res.status(404).json({ error: "Not found" });
        }
        return res.send(products);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error " });
      }
    };
  }

  static getNewProducts() {
    return async (req: Request, res: Response) => {
      try {
        const products = await ProductModel.GetNewProducts();
        if (products.length === 0) {
          return res.status(404).json({ error: "Not found" });
        }
        return res.send(products);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error " });
      }
    };
  }

  static onCreateProduct() {
    return async (req: any, res: Response) => {
      try {
        if (!req.body) {
          throw new Error("No product Information");
        } else {
          const result = await ProductModel.createProduct(req);
          return res.send(result);
        }
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    };
  }
  static onEditProduct() {
    return async (req: any, res: Response) => {
      try {
        const result = ProductModel.editProduct(req);
        return res.json(result);
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
      }
    };
  }
  static async deleteProduct(req: any, res: Response) {
    const { id } = req.query;
    try {
      const RowCount = await ProductModel.DeleteProduct(id);

      if (RowCount === 0) {
        return res.status(404).json("Committee not found");
      }

      return res.status(200).json("Committee deleted successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).json("Failed to delete committee");
    }
  }
}
