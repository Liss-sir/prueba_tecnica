import { create } from "zustand";
import { Programa } from "@/types/programa";

interface ProgramaStore {
  programaSeleccionado: Programa | null;

  setProgramaSeleccionado: (
    programa: Programa | null
  ) => void;
}

export const useProgramaStore =
  create<ProgramaStore>((set) => ({
    programaSeleccionado: null,

    setProgramaSeleccionado: (programa) =>
      set({
        programaSeleccionado: programa,
      }),
  }));