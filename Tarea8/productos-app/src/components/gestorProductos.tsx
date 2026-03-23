import { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import ProductForm from "./productForm";
import ProductList from "./productList";
import type { Product } from "../interfaces/products";
import Swal from "sweetalert2";

const GestorProductos = () => {
  const { products, addProduct, editProduct, removeProduct } = useProduct();
  const [editing, setEditing] = useState<Product | null>(null);

  const handleSubmit = (product: Product) => {
  if (editing && editing.id) {
    editProduct(editing.id, product);

    Swal.fire({
      icon: "success",
      title: "Producto actualizado",
      timer: 1500,
      showConfirmButton: false,
    });

    setEditing(null);
  } else {
    addProduct(product);

    Swal.fire({
      icon: "success",
      title: "Producto creado",
      timer: 1500,
      showConfirmButton: false,
    });
  }
};

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        Gestión de Productos
      </h1>

      <ProductForm
        onSubmit={handleSubmit}
        initialData={editing || undefined}
      />

      <ProductList
        products={products}
        onDelete={removeProduct}
        onEdit={setEditing}
      />
    </div>
  );
};

export default GestorProductos;