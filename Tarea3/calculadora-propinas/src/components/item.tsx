import type { FC } from "react";
import type { ItemProps } from "../interfaces/itemProps";
import { useContador } from "../hooks/useContador";
import { BotonContador } from "./boton";

export const Item: FC<ItemProps> = ({
  nombreProducto,
  cantidad,
}) => {
  const { contador, incremento, decremento } = useContador(
    cantidad ?? 1
  );

  return (
    <div style={{ marginBottom: "10px" }}>
      <h3>{nombreProducto}</h3>

      <BotonContador
        contador={contador}
        incremento={incremento}
        decremento={decremento}
      />
    </div>
  );
};
