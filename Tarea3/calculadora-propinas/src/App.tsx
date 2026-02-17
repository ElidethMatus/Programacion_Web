import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Alerta } from "./components/alerts";

const porcentajes = [10, 15, 20] as const;

function App() {
  const [monto, setMonto] = useState<string>("");
  const [porcentaje, setPorcentaje] = useState<(typeof porcentajes)[number] | null>(null);

  const [alerta, setAlerta] = useState<{ mensaje: string; tipo?: "Algo salio mal" | "Listo!" } | null>(null);

  const montoNumero = useMemo(() => {
    const n = Number(monto);
    return Number.isFinite(n) ? n : NaN;
  }, [monto]);

  const propina = useMemo(() => {
    if (!porcentaje || !Number.isFinite(montoNumero)) return 0;
    return (montoNumero * porcentaje) / 100;
  }, [montoNumero, porcentaje]);

  const total = useMemo(() => {
    if (!porcentaje || !Number.isFinite(montoNumero)) return 0;
    return montoNumero + propina;
  }, [montoNumero, propina, porcentaje]);

  const validar = () => {
    if (monto.trim() === "" || !Number.isFinite(montoNumero)) {
      setAlerta({ mensaje: "Ingresa un monto válido (solo números).", tipo: "Algo salio mal" });
      return false;
    }
    if (montoNumero <= 0) {
      setAlerta({ mensaje: "El monto debe ser mayor que 0.", tipo: "Algo salio mal" });
      return false;
    }
    if (!porcentaje) {
      setAlerta({ mensaje: "Selecciona un porcentaje de propina.", tipo: "Algo salio mal" });
      return false;
    }
    return true;
  };

  const onCalcular = (e: FormEvent) => {
    e.preventDefault();
    setAlerta(null);

    if (!validar()) return;

    setAlerta({ mensaje: "Cálculo terminado", tipo: "Listo!" });
  };

  const onLimpiar = () => {
    setMonto("");
    setPorcentaje(null);
    setAlerta(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-zinc-950 text-zinc-100">
      <div className="w-full max-w-md bg-zinc-900/60 border border-white/10 rounded-2xl p-6 shadow">
        <h1 className="text-5xl font-bold text-red-500">Calculadora</h1>


        {alerta && (
          <div className="mb-4">
            <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} onClose={() => setAlerta(null)} />
          </div>
        )}
        <form onSubmit={onCalcular} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Monto de la cuenta</label>
            <input
              className="w-full rounded-lg bg-zinc-900 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Monto aqui"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              inputMode="decimal"
            />
          </div>

          <div>
            <p className="text-sm mb-2">Porcentaje de propina</p>
            <div className="grid grid-cols-3 gap-2">
              {porcentajes.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPorcentaje(p)}
                  className={`rounded-lg px-3 py-2 border ${
                    porcentaje === p
                      ? "bg-white text-zinc-900 border-white"
                      : "bg-zinc-900 border-white/10 hover:bg-zinc-800"
                  }`}>{p}%
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-emerald-500 text-zinc-900 font-semibold py-2 hover:bg-emerald-400">Calcular</button>
            <button
              type="button"
              onClick={onLimpiar}
              className="flex-1 rounded-lg bg-white/10 border border-white/10 py-2 hover:bg-white/20"
            >
              Limpiar
            </button>
          </div>
        </form>

        <div className="mt-6 border-t border-white/10 pt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-zinc-300">Propina</span>
            <span className="font-semibold">
              {porcentaje && Number.isFinite(montoNumero) ? propina.toFixed(2) : "--"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-300">Total a pagar</span>
            <span className="font-semibold">
              {porcentaje && Number.isFinite(montoNumero) ? total.toFixed(2) : "--"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
