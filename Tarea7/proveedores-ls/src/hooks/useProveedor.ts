import { useState } from "react"
import type { Proveedor } from "../interface/proveedor"

export const useProveedor = () => {

  const [proveedores, setProveedores] = useState<Proveedor[]>(() => {

    const data = localStorage.getItem("proveedores")

    return data ? JSON.parse(data) : []

  })

  const guardarProveedores = (data: Proveedor[]) => {

    localStorage.setItem("proveedores", JSON.stringify(data))
    setProveedores(data)

  }

  const agregarProveedor = (proveedor: Proveedor) => {

    const nuevoProveedor: Proveedor = {
      ...proveedor,
      id: Date.now()
    }

    const listaActualizada = [...proveedores, nuevoProveedor]

    guardarProveedores(listaActualizada)

  }

  const eliminarProveedor = (id: number) => {

    const listaFiltrada = proveedores.filter(p => p.id !== id)

    guardarProveedores(listaFiltrada)

  }

  const actualizarProveedor = (proveedorActualizado: Proveedor) => {

    const listaActualizada = proveedores.map(p =>
      p.id === proveedorActualizado.id ? proveedorActualizado : p
    )

    guardarProveedores(listaActualizada)

  }

  return {
    proveedores,
    agregarProveedor,
    eliminarProveedor,
    actualizarProveedor
  }

}