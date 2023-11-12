import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      unique: [true, "Product already exist!"],
      required: [true, "Product is required!"],
    },
    category: {
      type: String,
      required: [true, "Category is required!"],
    },
    description: {
      type: String,
      required: [true, "Description is required!"],
    },
    price: {
      type: Number,
      required: [true, "Price is required!"],
      min: 0,
    },
    productImagePath: {
      type: String,
    },
    stock: {
      type: Number,
      required: [true, "Stock is required!"],
      min: 0,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
