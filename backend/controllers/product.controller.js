import Product from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined,
    );

    let imagesUrl = await Promise.all(
      images.map(async (image) => {
        const result = await cloudinary.uploader.upload(image.path, {
          resource_type: "image",
        });
        return result.secure_url;
      }),
    );
    const product = new Product({
      name,
      description,
      price: Number(price),
      category: category.toLowerCase(),
      subCategory:subCategory.toLowerCase(),
      sizes: JSON.parse(sizes).map(s => s.toLowerCase()),
      bestSeller: bestSeller === "true" ? true : false,
      image: imagesUrl,
      date: Date.now(),
    });
    await product.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Product created successfully",
        data: product,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
    });
  }
};

export const listProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ date: -1 });
    res.json({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to list products",
      error: error.message,
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Product removed successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to remove product",
      error: error.message,
    });
  }
};

export const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.json({
      success: true,
      message: "Product fetched successfully",
      product,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};
