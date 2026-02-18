import type { AlertaProps } from "../interfaces/alertaProps";

export function Alerta({ mensaje, onClose }: AlertaProps) {
  return (
    <div className="w-full rounded-xl border border-red-200 bg-red-50 p-3 flex items-start justify-between gap-3">
      <p className="text-sm text-red-700">{mensaje}</p>

      <button
        type="button"
        onClick={onClose}
        className="text-sm font-semibold text-red-700 hover:text-red-900"
      >
        Cerrar
      </button>
    </div>
  );
}
