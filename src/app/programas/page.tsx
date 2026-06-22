"use client";

import { useMemo, useState } from "react";
import { Search, ArrowLeft } from "lucide-react";

import ProgramaCard from "@/components/ProgramaCard";
import programasData from "@/data/programas.json";
import { Programa } from "@/types/programa";
import ConfirmarInscripcionModal from "@/components/ConfirmarInscripcionModal";
import CargandoModal from "@/components/CargandoModal";
import InscripcionExitosaModal from "@/components/InscripcionExitosaModal";
import FormularioInscripcionModal from "@/components/FormularioInscripcionModal";
import { useProgramaStore } from "@/store/programaStore";
import Link from "next/link";

const programas = programasData as Programa[];

export default function ProgramasPage() {
  const [busqueda, setBusqueda] = useState("");
  const [modalidad, setModalidad] = useState("Todas");
  const {programaSeleccionado,setProgramaSeleccionado,} = useProgramaStore();
 
  const [cargando, setCargando] = useState(false);

  const [inscripcionExitosa, setInscripcionExitosa] =
  useState(false);

  const [mostrarFormulario, setMostrarFormulario] =
  useState(false);

  const programasFiltrados = useMemo(() => {
    return programas.filter((programa) => {
      const coincideNombre = programa.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

      const coincideModalidad =
        modalidad === "Todas" ||
        programa.modalidad === modalidad;

      return coincideNombre && coincideModalidad;
    });
  }, [busqueda, modalidad]);

  const filtros = [
    "Todas",
    "Virtual",
    "Presencial",
    "Mixta",
  ];

  return (
    <div className="min-h-screen bg-slate-100 pb-20">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-purple-700 to-cyan-500 pb-22">
        <div className="max-w-7xl mx-auto px-6 pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white border border-white/30 px-4 py-2 rounded-full"
          >
            <ArrowLeft size={18} />
            Volver al dashboard
          </Link>

          <h1 className="text-4xl font-bold text-white mt-8">
            Programas de formación
          </h1>

          <p className="text-white/90 text-lg mt-3 max-w-3xl">
            Explora la oferta, filtra por modalidad e
            inscríbete en el programa que se ajuste a tu
            proyecto de vida.
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <div className="max-w-7xl mx-auto px-6 -mt-18">
        <div className="bg-white rounded-3xl shadow-md p-5">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Busca un programa por nombre..."
                value={busqueda}
                onChange={(e) =>setBusqueda(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl bg-slate-50 outline-none text-slate-800 placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {filtros.map((filtro) => (
                <button
                  key={filtro}
                  onClick={() => setModalidad(filtro)}
                  className={`px-6 py-3 rounded-2xl border transition ${
                    modalidad === filtro
                      ? "bg-[#4C2EA5] text-yellow-300 border-gray"
                      : "bg-white border border-gray-300 text-slate-700"
                  }`}
                >
                  {filtro}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RESULTADOS */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-slate-500 mb-6 ml-2">
            {programasFiltrados.length} resultados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {programasFiltrados.map((programa) => (
                <ProgramaCard
                  key={programa.id}
                  programa={programa}
                  onInscribirse={() =>
                    setProgramaSeleccionado(programa)
                  }
                />
              ))}
          </div>
          {programaSeleccionado && (
            <ConfirmarInscripcionModal
              programa={programaSeleccionado}
              onClose={() => setProgramaSeleccionado(null)}
              onConfirm={() => {
                setMostrarFormulario(true);
              }}
            />
          )}

          {mostrarFormulario && (
            <FormularioInscripcionModal
              programa={programaSeleccionado}
              onClose={() => setMostrarFormulario(false)}
              onSubmit={() => {
                setMostrarFormulario(false);

                setCargando(true);

                setTimeout(() => {
                  setProgramaSeleccionado(null);
                  setCargando(false);
                  setInscripcionExitosa(true);
                }, 2000);
              }}
            />
          )}

          {cargando && <CargandoModal />}

          {inscripcionExitosa && (
            <InscripcionExitosaModal
              onClose={() => setInscripcionExitosa(false)}
            />
          )}
            
        </div>
      </div>
    </div>
  );
}