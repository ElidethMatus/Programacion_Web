export interface BotonProps {
  texto: string;
  onClick: () => void;
  variante?: "primary" | "danger" | "ghost";
}
