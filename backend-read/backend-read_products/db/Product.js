import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  currency: { type: String },
});
