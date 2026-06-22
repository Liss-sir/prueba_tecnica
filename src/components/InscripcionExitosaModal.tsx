"use client";

import { CheckCircle2 } from "lucide-react";

interface Props {
  onClose: () => void;
}

export default function InscripcionExitosaModal({
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 text-center shadow-xl w-full max-w-md">

        <CheckCircle2
          size={60}
          className="mx-auto text-green-500"
        />

        <h2 className="mt-4 text-2xl font-bold text-slate-900">
          ¡Inscripción exitosa!
        </h2>

        <p className="mt-3 text-slate-600">
          Tu inscripción se ha registrado correctamente.
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-[#4C2EA5] py-3 text-white font-medium"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}