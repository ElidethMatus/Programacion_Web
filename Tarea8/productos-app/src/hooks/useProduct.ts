import { useEffect, useState } from "react";
import type { Product } from "../interfaces/products";

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const data: Product[] = [
  { id: 1, nombre: "Laptop", precio: 1000 },
  { id: 2, nombre: "Mouse", precio: 20 },
  { id: 3, nombre: "Teclado", precio: 50 },
  { id: 4, nombre: "Monitor", precio: 300 },
  { id: 5, nombre: "Audífonos", precio: 80 },
  { id: 6, nombre: "Webcam", precio: 120 },
];

    setProducts(data);
  };

  useEffect(() => {
  const load = async () => {
    await fetchProducts();
  };

  load();
}, []);

  const addProduct = (product: Product) => {
    setProducts((prev) => [
      ...prev,
      { ...product, id: Date.now() },
    ]);
  };

  const editProduct = (id: number, product: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...product } : p))
    );
  };

  const removeProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return {
    products,
    addProduct,
    editProduct,
    removeProduct,
  };
};