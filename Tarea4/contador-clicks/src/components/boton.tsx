export const __TEST_BOTON__ = true;

import type { BotonProps } from "../interfaces/botonProps";

export function Boton({ texto, onClick, variante = "primary" }: BotonProps) {
  const base =
  "w-full rounded-2xl px-4 py-4 text-sm font-semibold transition active:scale-[0.99]";

  const estilos =
    variante === "primary"
      ? "bg-black text-white hover:bg-zinc-800"
      : variante === "danger"
      ? "bg-red-600 text-white hover:bg-red-700"
      : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200";

  return (
    <button type="button" onClick={onClick} className={`${base} ${estilos}`}>
      {texto}
    </button>
  );
}
