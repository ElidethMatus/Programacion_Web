import { useState, useEffect } from "react";
import type { Product } from "../interfaces/products";
import Swal from "sweetalert2";

interface Props {
  onSubmit: (product: Product) => void;
  initialData?: Product;
}

const ProductForm = ({ onSubmit, initialData }: Props) => {
  const [form, setForm] = useState<Product>({
    nombre: "",
    precio: 0,
  });

  useEffect(() => {
  if (initialData) {
    setForm({
      nombre: initialData.nombre,
      precio: initialData.precio,
    });
  }
}, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "precio"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.nombre || form.precio <= 0) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Todos los campos son obligatorios",
    });
    return;
  }

  onSubmit(form);

  Swal.fire({
    icon: "success",
    title: "Producto guardado",
    showConfirmButton: false,
    timer: 1500,
  });

  setForm({
    nombre: "",
    precio: 0,
  });
};

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del producto"
        value={form.nombre}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={form.precio}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Guardar
      </button>
    </form>
  );
};

export default ProductForm;