import { useState } from "react";
import type { UseContador } from "../interfaces/useContadorProps";

export function useContador(
  inicial: number = 0,
  min: number = 0,
  max: number = 9999
): UseContador {
  const [valor, setValor] = useState<number>(inicial);
  const [error, setError] = useState<string | null>(null);

  const limpiarError = () => setError(null);

  const incrementar = () => {
    limpiarError();
    if (valor + 1 > max) return setError(`No puedes pasar de ${max}.`);
    setValor(valor + 1);
  };

  const decrementar = () => {
    limpiarError();
    if (valor - 1 < min) return setError(`No puedes bajar de ${min}.`);
    setValor(valor - 1);
  };

  const reiniciar = () => {
    limpiarError();
    setValor(0);
  };

  return { valor, error, incrementar, decrementar, reiniciar, limpiarError };
}
