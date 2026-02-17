type Props = {
  mensaje: string;
  tipo?: "error" | "ok";
  onClose: () => void;
};

export function Alerta({ mensaje, tipo = "error", onClose }: Props) {
  const clases =
    tipo === "error"
      ? "bg-red-500/20 border-red-500 text-red-200"
      : "bg-green-500/20 border-green-500 text-green-200";

  return (
    <div className={`border p-3 rounded-lg flex items-center justify-between ${clases}`}>
      <span className="text-sm">{mensaje}</span>
      <button
        className="ml-4 px-2 py-1 rounded-md bg-white/10 hover:bg-white/20"
        onClick={onClose}
        type="button"
      >
        X
      </button>
    </div>
  );
}
