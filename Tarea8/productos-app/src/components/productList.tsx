import type { Product } from "../interfaces/products";
import Swal from "sweetalert2";

interface Props {
  products: Product[];
  onDelete: (id: number) => void;
  onEdit: (product: Product) => void;
}

const ProductList = ({ products, onDelete, onEdit }: Props) => {
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-200">
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.nombre}</td>
            <td>{p.precio}</td>
            <td>
              <button
                onClick={() => onEdit(p)}
                className="bg-yellow-500 px-2 py-1 mr-2"
              >
                Editar
              </button>

              <button
                onClick={() => {
  Swal.fire({
    title: "¿Eliminar producto?",
    text: "No podrás revertir esto",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed && p.id) {
      onDelete(p.id);

      Swal.fire({
        icon: "success",
        title: "Eliminado",
        showConfirmButton: false,
        timer: 1200,
      });
    }
  });
}}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;