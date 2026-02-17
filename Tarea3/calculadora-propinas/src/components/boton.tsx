import type { FC } from "react";
import type { BotonContadorProps } from "../interfaces/botonProps";

export const BotonContador: FC<BotonContadorProps> = ({
  contador,
  incremento,
  decremento,
}) => {
  return (
    <div>
      <button onClick={decremento}>-</button>
      <span style={{ margin: "0 10px" }}>{contador}</span>
      <button onClick={incremento}>+</button>
    </div>
  );
};
