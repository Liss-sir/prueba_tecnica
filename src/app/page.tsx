import {
  Search,
  Layers3,
  GraduationCap,
  MapPin,
  Clock3,
} from "lucide-react";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-400">
        {/* fondo de puntos */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white backdrop-blur">
            Inscripcion a programas de formacion
          </span>

          <h1 className="mt-8 max-w-2xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Tu próximo aprendizaje empieza con un solo clic.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Bienvenido al módulo de búsqueda e inscripción a programas de
            formación. Este dashboard a sido creado por mero gusto del desarrollador.
          </p>

          {/* Cards */}
          <div className="mt-12 grid gap-4 md:grid-cols-3 mb-10">
            <InfoCard
              icon={<Search size={18} />}
              title="Busca"
              description="Por nombre, área o palabra clave."
            />

            <InfoCard
              icon={<Layers3 size={18} />}
              title="Filtra"
              description="Modalidad virtual, presencial o mixta."
            />

            <InfoCard
              icon={<GraduationCap size={18} />}
              title="Inscríbete"
              description="incripcion a los programas de formacion disponibles."
            />
          </div>

          <Link
            href="/programas"
            className="mt-10 rounded-full bg-white px-8 py-4 font-medium text-violet-700 transition hover:scale-105"
          >
            Ir al módulo de programas →
          </Link>
        </div>

        {/* barra verde */}
        <div className="bg-green-700">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-4 text-white md:grid-cols-4">
            <Stat title="PROGRAMAS" value="6 rutas" />
            <Stat title="MODALIDADES" value="Virtual · Presencial · Mixta" />
            <Stat title="INSCRIPCIÓN" value="100% guiada" />
            <Stat title="COBERTURA" value="Urbano y rural" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Search />}
            title="¿Qué encontrarás?"
            description="Un catálogo curado de programas con ID, nivel, modalidad y duración."
          />

          <FeatureCard
            icon={<MapPin />}
            title="Equidad territorial"
            description="Oferta pensada para zonas urbanas y rurales fortaleciendo los sectores productivos."
          />

          <FeatureCard
            icon={<Clock3 />}
            title="Inscripción ágil"
            description="Realiza tu inscripción en segundos y recibe confirmación inmediata."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        Simulacion inspirada en el manual de identidad visual del
        SENA.
      </footer>
    </main>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur">
      <div className="mb-3">{icon}</div>

      <h3 className="font-semibold">{title}</h3>

      <p className="mt-1 text-sm text-white/70">
        {description}
      </p>
    </div>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-green-100">
        {title}
      </p>

      <p className="font-semibold">
        {value}
      </p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 inline-flex rounded-xl bg-violet-600 p-3 text-white">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-slate-500">
        {description}
      </p>
    </div>
  );
}