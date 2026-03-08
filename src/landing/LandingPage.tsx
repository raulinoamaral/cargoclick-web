import { Instagram } from 'lucide-react'
import logo from '@/assets/logo.png'

export function LandingPage() {
  return (
    <div className="relative h-screen w-screen bg-landing bg-cover bg-center bg-no-repeat">
      <div className="overlay-brand absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col">

        <header className="flex justify-center pt-12">
          <img src={logo} alt="CargoClick — Transporte de carga en Uruguay" className="h-32 w-auto" />
        </header>

        <main className="flex flex-1 flex-col items-center justify-center gap-6 -mt-32 px-6">
          <section className="space-y-2 text-center">
            <h1 className="text-4xl font-medium text-white">Encuentra transporte de carga<br />cuando lo necesites</h1>
            <h2 className="text-lg font-medium uppercase tracking-widest text-accent">Simple · Rápido · Confiable</h2>
            <div className="flex justify-center pt-2">
              <div className="h-px w-16 bg-accent" />
            </div>
          </section>

          <p className="max-w-xl text-center text-base text-white/60">
            Cargo Click conecta empresas que necesitan transportar mercadería con transportistas disponibles en todo Uruguay.
          </p>

          <div className="flex flex-col items-center gap-4">
            <p className="text-lg font-medium text-white">Estamos en camino</p>
            <a
              href="https://www.instagram.com/cargoclick.uy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguinos en Instagram"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Instagram size={22} />
            </a>
          </div>
        </main>

      </div>
    </div>
  )
}
