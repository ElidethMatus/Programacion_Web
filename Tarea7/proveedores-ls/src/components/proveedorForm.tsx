import { useState, useEffect } from "react"
import type { Proveedor } from "../interface/proveedor"

interface Props {
  onGuardar: (proveedor: Proveedor) => void
  proveedorEditando: Proveedor | null
}

const ProveedorForm = ({ onGuardar, proveedorEditando }: Props) => {

  const [form, setForm] = useState<Proveedor>({
    id: 0,
    nombre: "",
    contacto: "",
    telefono: "",
    correo: "",
    direccion: ""
  })

  useEffect(() => {
  if (proveedorEditando) {
    setForm(proveedorEditando)
  }
}, [proveedorEditando])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    onGuardar(form)

    setForm({
      id: 0,
      nombre: "",
      contacto: "",
      telefono: "",
      correo: "",
      direccion: ""
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" className="border p-2 rounded"/>
      <input name="contacto" value={form.contacto} onChange={handleChange} placeholder="Contacto" className="border p-2 rounded"/>
      <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" className="border p-2 rounded"/>
      <input name="correo" value={form.correo} onChange={handleChange} placeholder="Correo" className="border p-2 rounded"/>
      <input name="direccion" value={form.direccion} onChange={handleChange} placeholder="Dirección" className="border p-2 rounded"/>

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        {proveedorEditando ? "Actualizar" : "Guardar"}
      </button>
    </form>
  )
}

export default ProveedorForm