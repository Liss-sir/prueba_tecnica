"use client";

import { useState } from "react";
import { X, User, Mail, Phone, CreditCard } from "lucide-react";
import { Programa } from "@/types/programa";

interface Props {
  programa: Programa | null;
  onClose: () => void;
  onSubmit: () => void;
}

export default function FormularioInscripcionModal({
  programa,
  onClose,
  onSubmit,
}: Props) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [documento, setDocumento] = useState("");
  const [telefono, setTelefono] = useState("");

  const [errores, setErrores] = useState({
    nombre: false,
    correo: false,
    documento: false,
    telefono: false,
  });

  const validarFormulario = () => {
    const nuevosErrores = {
      nombre: !nombre.trim(),
      correo: !correo.trim(),
      documento: !documento.trim(),
      telefono: !telefono.trim(),
    };

    setErrores(nuevosErrores);

    return !Object.values(nuevosErrores).some(Boolean);
  };

  const handleSubmit = () => {
    if (!validarFormulario()) return;

    onSubmit();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-700 to-cyan-500 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Completa tu inscripción
              </h2>

              <p className="mt-1 text-white/90">
                Ingresa tus datos para continuar.
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-white hover:opacity-80"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">

          {/* Programa */}
          <div className="mb-6 rounded-2xl bg-violet-50 border border-violet-200 p-4">
            <p className="text-sm text-violet-700 font-medium">
              Programa seleccionado
            </p>

            <h3 className="mt-1 text-lg font-semibold text-slate-900">
              {programa?.nombre}
            </h3>

            <div className="mt-2 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-white px-3 py-1 border text-[#4C2EA5]">
                {programa?.nivel}
              </span>

              <span className="rounded-full bg-white px-3 py-1 border text-[#4C2EA5]">
                {programa?.modalidad}
              </span>

              <span className="rounded-full bg-white px-3 py-1 border text-[#4C2EA5]">
                {programa?.duracion}
              </span>
            </div>
          </div>

          {/* Formulario */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Nombre */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-500">
                Nombre completo
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-gray-400 ${
                    errores.nombre
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                  placeholder="Ingresa tu nombre"
                />
              </div>
            </div>

            {/* Documento */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-500">
                Documento
              </label>

              <div className="relative">
                <CreditCard
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={documento}
                  onChange={(e) => setDocumento(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-slate-400 ${
                    errores.documento
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                  placeholder="Número de documento"
                />
              </div>
            </div>

            {/* Correo */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-500">
                Correo electrónico
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-slate-400 ${
                    errores.correo
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                  placeholder="correo@ejemplo.com"
                />
              </div>
            </div>

            {/* Teléfono */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-500">
                Teléfono
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-slate-400 ${
                    errores.telefono
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                  placeholder="Número de contacto"
                />
              </div>
            </div>

          </div>

          {/* Botones */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 rounded-xl border border-slate-300 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancelar
            </button>

            <button
              onClick={handleSubmit}
              className="flex-1 rounded-xl bg-[#4C2EA5] py-3 font-semibold text-white hover:bg-[#41278e]"
            >
              Enviar inscripción
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}