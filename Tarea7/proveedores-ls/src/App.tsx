import { useState } from "react"
import ProveedorForm from "./components/proveedorForm"
import ProveedorTable from "./components/proveedorTable"
import { useProveedor } from "./hooks/useProveedor"
import type { Proveedor } from "./interface/proveedor"

function App() {

  const { proveedores, agregarProveedor, eliminarProveedor, actualizarProveedor } = useProveedor()

  const [proveedorEditando, setProveedorEditando] = useState<Proveedor | null>(null)

  const guardarProveedor = (proveedor: Proveedor) => {

    if (proveedorEditando) {

      actualizarProveedor(proveedor)
      setProveedorEditando(null)

    } else {

      agregarProveedor(proveedor)

    }

  }

  return (

    <div className="p-10 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-6 text-center">
        Gestión de Proveedores
      </h1>

      <ProveedorForm
        onGuardar={guardarProveedor}
        proveedorEditando={proveedorEditando}
      />

      <ProveedorTable
        proveedores={proveedores}
        onEliminar={eliminarProveedor}
        onEditar={setProveedorEditando}
      />

    </div>

  )

}

export default App