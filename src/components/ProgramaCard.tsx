import { BookOpen, Clock } from "lucide-react";
import { Programa } from "@/types/programa";

interface Props {
  programa: Programa;
  onInscribirse: () => void;
}

export default function ProgramaCard({programa,onInscribirse,}: Props) {
  const badgeColor = {
    Virtual: "bg-cyan-500",
    Presencial: "bg-green-500",
    Mixta: "bg-purple-600",
  };

  return (
    <div className="bg-gradient-to-b from-sky-100 via-sky-50 to-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <span className="text-xs text-slate-500">
          {programa.id}
        </span>

        <span
          className={`text-white text-xs px-3 py-1 rounded-full ${
            badgeColor[programa.modalidad]
          }`}
        >
          {programa.modalidad}
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-semibold text-slate-900">
        {programa.nombre}
      </h3>

      <div className="grid grid-cols-2 gap-3 mt-6">
        <div className="bg-slate-100 rounded-lg p-3">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <BookOpen size={16} />
            Nivel
          </div>

          <p className="font-medium text-slate-800">
            {programa.nivel}
          </p>
        </div>

        <div className="bg-slate-100 rounded-lg p-3">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Clock size={16} />
            Duración
          </div>

          <p className="font-medium text-slate-800">
            {programa.duracion}
          </p>
        </div>
      </div>

      <button
        onClick={onInscribirse}
        className="w-full mt-6 bg-[#4C2EA5] hover:bg-[#41278e] text-white py-3 rounded-xl font-semibold transition"
      >
        Inscribirme
      </button>
    </div>
  );
}