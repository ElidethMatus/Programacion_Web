import { useContador } from "./hooks/useContador";
import { Contador } from "./components/contador";
import { Alerta } from "./components/alerta";

export default function App() {
  const { valor, error, incrementar, decrementar, reiniciar, limpiarError } =
    useContador(0, 0, 9999);

  return (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    <div className="w-full max-w-xl px-6 py-10">
      <h1 className="text-3xl font-bold text-white text-center">
        Contador de clicks
      </h1>

      <div className="mt-6 flex flex-col gap-4">
        {error && <Alerta mensaje={error} onClose={limpiarError} />}

        <Contador
          valor={valor}
          onIncrementar={incrementar}
          onDecrementar={decrementar}
          onReiniciar={reiniciar}
        />

      </div>
    </div>
  </div>
  );
}
