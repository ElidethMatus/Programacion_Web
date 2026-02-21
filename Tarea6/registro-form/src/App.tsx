import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const usuarioValido = usuario.trim().length >= 3;
  const correoValido = correo.includes("@") && correo.includes(".");
  const contrasenaValida = contrasena.trim().length >= 6;

  const formularioValido = usuarioValido && correoValido && contrasenaValida;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formularioValido) {
      setEnviado(false);
      setError("Completa todos los campos correctamente.");
      return;
    }

    setError("");
    setEnviado(true);

    setUsuario("");
    setCorreo("");
    setContrasena("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Formulario de Registro</h1>
        <p className="text-center text-gray-300 mt-1 text-sm">
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Usuario</label>
            <input
              type="text"className="w-full rounded-lg bg-gray-700 text-white px-3 py-2 border border-gray-600 outline-none focus:ring-0 focus:border-gray-500"placeholder="Tu usuario aquí"value={usuario}
              onChange={(e) => {
                setUsuario(e.target.value);
                setEnviado(false);
                setError("");
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Correo</label>
            <input
              type="text"className="w-full rounded-lg bg-gray-700 text-white px-3 py-2 border border-gray-600 outline-none focus:ring-0 focus:border-gray-500"placeholder="ejemplo@gmail.com"value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
                setEnviado(false);
                setError("");
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Contraseña
            </label>
            <input
              type="password"className="w-full rounded-lg bg-gray-700 text-white px-3 py-2 border border-gray-600 outline-none focus:ring-0 focus:border-gray-500"placeholder="Mínimo 6 caracteres"value={contrasena}
              onChange={(e) => {
                setContrasena(e.target.value);
                setEnviado(false);
                setError("");
              }}
            />
          </div>

          {error && (
            <div className="bg-red-600/80 p-2 rounded text-sm">{error}</div>
          )}
          {enviado && (
            <div className="bg-green-600/80 p-2 rounded text-sm">
              ¡Registro exitoso! ¡Bienvenido, {usuario.trim() || "usuario"}!
            </div>
          )}

          <button
            type="submit"
            disabled={!formularioValido}
            className={`w-full py-2 rounded-lg font-bold transition ${
              formularioValido
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;