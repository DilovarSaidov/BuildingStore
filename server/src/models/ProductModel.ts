import { IProduct } from "../../../client/src/types/Model";

const db = require("../db");

export class ProductModel {
  static async getProducts(): Promise<IProduct[]> {
    const result = await db.query("SELECT * FROM products");
    return result.rows;
  }

  static async GetPaintingSupplies(): Promise<IProduct[]> {
    const result = await db.query(
      "SELECT * FROM products WHERE categories = 'Малярные товары'"
    );
    return result.rows;
  }

  static async GetOveralls(): Promise<IProduct[]> {
    const result = await db.query(
      "SELECT * FROM products WHERE catigories = 'Спецодежда'"
    );
    return result.rows;
  }

  static async GetElectrical(): Promise<IProduct[]> {
    const result = await db.query(
      "SELECT * FROM products WHERE catigories = 'Электрооборудование'"
    );
    return result.rows;
  }

  static async GetForHomeAndCottage(): Promise<IProduct[]> {
    const result = await db.query(
      "SELECT * FROM products WHERE catigories = 'Для дома и дачи'"
    );
    return result.rows;
  }

  static async GetProductById(id: string): Promise<IProduct> {
    const result = await db.query("SELECT * FROM products WHERE id = $1", [id]);
    return result.rows;
  }

  static async GetStocksProducts() {
    const result = await db.query(
      "SELECT * FROM products WHERE isNew = 'false"
    );
    return result.rows;
  }

  static async GetNewProducts() {
    const result = await db.query("SELECT * FROM products WHERE isNew = 'true");
    return result.rows;
  }

  static async createProduct(req: any): Promise<any> {
    const {
      id,
      name,
      img,
      price,
      inStock,
      detailed,
      isNew,
      total,
      quantity,
      categories,
    } = req.body;
    const result = await db.query(
      'INSERT INTO products (id, name, img, price, "inStock", detailed, "isNew", total, quantity, categories) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [
        id,
        name,
        img,
        price,
        inStock,
        detailed,
        isNew,
        total,
        quantity,
        categories,
      ]
    );
    return result.rows;
  }
  static async DeleteProduct(id: number) {
    const result = await db.query("DELETE FROM product WHERE id = $1", [id]);
    return result.rowCount;
  }

  static async editProduct(req: any) {
    const { id } = req.params;
    const { name, img, price, inStock, detailed, isNew, categories } = req.body;

    const result = await db.query(
      "UPDATE products SET name=$1, img=$2, price=$3, inStock=$4, detailed=$5, isNew=$6, categories=$7 WHERE id=$8 RETURNING *",
      [name, img, price, inStock, detailed, isNew, categories, id]
    );
    return result.rows[0];
  }
}
