import type { Proveedor } from "../interface/proveedor"

interface Props {
  proveedores: Proveedor[]
  onEliminar: (id: number) => void
  onEditar: (proveedor: Proveedor) => void
}

const ProveedorTable = ({ proveedores, onEliminar, onEditar }: Props) => {

  return (

    <table className="border w-full text-center">

      <thead className="bg-gray-200">

        <tr>
          <th>Nombre</th>
          <th>Contacto</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th>Dirección</th>
          <th>Acciones</th>
        </tr>

      </thead>

      <tbody>

        {proveedores.map(p => (

          <tr key={p.id} className="border-t">

            <td>{p.nombre}</td>
            <td>{p.contacto}</td>
            <td>{p.telefono}</td>
            <td>{p.correo}</td>
            <td>{p.direccion}</td>

            <td className="space-x-2">

              <button
                onClick={() => onEditar(p)}
                className="bg-yellow-400 px-3 py-1 rounded"
              >
                Editar
              </button>

              <button
                onClick={() => onEliminar(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Eliminar
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  )

}

export default ProveedorTable