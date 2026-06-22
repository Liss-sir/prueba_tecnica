"use client";

import { Loader2 } from "lucide-react";

export default function CargandoModal() {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 text-center shadow-xl w-full max-w-md">
        <Loader2
          size={48}
          className="mx-auto animate-spin text-[#4C2EA5]"
        />

        <h2 className="mt-6 text-xl font-semibold text-[#4C2EA5]">
          Procesando inscripción
        </h2>

        <p className="mt-2 text-slate-600">
          Estamos registrando tu solicitud...
        </p>
      </div>
    </div>
  );
}