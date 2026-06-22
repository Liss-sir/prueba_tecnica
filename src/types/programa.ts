export type Modalidad =
  | "Virtual"
  | "Presencial"
  | "Mixta";

export interface Programa {
  id: string;
  nombre: string;
  nivel: string;
  modalidad: Modalidad;
  duracion: string;
}