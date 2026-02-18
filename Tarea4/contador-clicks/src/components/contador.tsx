import { Boton } from "./boton";

type Props = {
  valor: number;
  onIncrementar: () => void;
  onDecrementar: () => void;
  onReiniciar: () => void;
};

export function Contador({
  valor,
  onIncrementar,
  onDecrementar,
  onReiniciar,
}: Props) {
  return (
    <div className="w-full rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-zinc-500">Clicks registrados</p>
      <div className="mt-2 text-5xl font-bold text-zinc-900 select-none">
       <div className="text-center">
  <p className="text-6xl md:text-7xl font-bold text-zinc-900">
    {valor}
  </p>
</div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Boton texto="+1" onClick={onIncrementar} variante="primary" />
        <Boton texto="-1" onClick={onDecrementar} variante="ghost" />
        <Boton texto="Reiniciar" onClick={onReiniciar} variante="danger" />
      </div>
    </div>
  );
}
