export interface UseContador {
  valor: number;
  error: string | null;

  incrementar: () => void;
  decrementar: () => void;
  reiniciar: () => void;

  limpiarError: () => void;
}
