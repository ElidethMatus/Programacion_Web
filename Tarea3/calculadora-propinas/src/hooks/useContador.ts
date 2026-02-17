import { useState } from "react";
import type { Contador } from "../interfaces/contador";

export const useContador = (valorInicial: number = 1): Contador => {
  const [contador, setContador] = useState<number>(valorInicial);

  const incremento = () => {
    setContador((prev) => prev + 1);
  };

  const decremento = () => {
    setContador((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return {
    contador,
    incremento,
    decremento,
  };
};
