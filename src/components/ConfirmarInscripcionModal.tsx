"use client";

import { X, BookOpen, Layers3, Clock } from "lucide-react";
import { Programa } from "@/types/programa";

interface Props {
  programa: Programa;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmarInscripcionModal({
  programa,
  onClose,
  onConfirm,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-800">
            {programa.id}
          </div>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Título */}
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">
          {programa.nombre}
        </h2>

        <p className="mt-1 text-sm font-medium uppercase tracking-wide text-[#4C2EA5]">
          Confirmar inscripción
        </p>

        {/* Información */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <BookOpen size={18} />
            </div>

            <p className="mt-3 text-xs uppercase text-slate-500">
              Nivel
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {programa.nivel}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <Layers3 size={18} />
            </div>

            <p className="mt-3 text-xs uppercase text-slate-500">
              Modalidad
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {programa.modalidad}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <Clock size={18} />
            </div>

            <p className="mt-3 text-xs uppercase text-slate-500">
              Duración
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {programa.duracion}
            </p>
          </div>
        </div>

        {/* Texto */}
        <p className="mt-6 text-slate-600">
          Al confirmar, se continuara con el registro de tu cupo en este
          programa.
        </p>

        {/* Botones */}
        <div className="mt-8 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-2xl bg-[#4C2EA5] py-3 font-semibold text-white transition hover:bg-[#41278e]"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}