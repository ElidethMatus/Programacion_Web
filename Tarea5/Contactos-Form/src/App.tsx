import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const nombreValido = nombre.trim().length >= 2;
  const emailValido = email.includes("@") && email.includes(".");
  const mensajeValido = mensaje.trim().length >= 10;

  const formularioValido = nombreValido && emailValido && mensajeValido;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formularioValido) {
      setEnviado(false);
      setError("Falta que se llenen elementos");
      return;
    }

    setError("");
    setEnviado(true);

    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Formulario de Contacto</h1>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Nombre</label>
            <input
              type="text"className="w-full rounded-lg bg-gray-700 text-white px-3 py-2 border border-gray-600 outline-none focus:ring-0 focus:border-gray-500"placeholder="Tu nombre aquí"value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                setEnviado(false);
                setError("");
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="text"className="w-full rounded-lg bg-gray-700 text-white px-3 py-2 border border-gray-600 outline-none focus:ring-0 focus:border-gray-500"placeholder="ejemplo@gmail.com"value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEnviado(false);
                setError("");
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Mensaje</label>
            <textarea
              className="w-full rounded-lg bg-gray-700 text-white px-3 py-2 border border-gray-600 outline-none focus:ring-0 focus:border-gray-500 min-h-30 resize-none"placeholder="Escribe tu mensaje..."value={mensaje}
                onChange={(e) => {
                setMensaje(e.target.value);
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
              ¡Gracias por tu mensaje!
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
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;