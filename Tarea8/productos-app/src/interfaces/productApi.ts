import axios from "axios";
import type { Product } from "./products";

const API_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  return await axios.get(API_URL);
};

export const createProduct = async (product: Product) => {
  return await axios.post(API_URL, product);
};

export const updateProduct = async (id: number, product: Product) => {
  return await axios.put(`${API_URL}/${id}`, product);
};

export const deleteProduct = async (id: number) => {
  return await axios.delete(`${API_URL}/${id}`);
};