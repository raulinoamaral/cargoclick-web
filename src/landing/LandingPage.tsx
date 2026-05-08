import type { MouseEvent } from 'react'
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  MessagesSquare,
  Package,
  Route,
  Truck,
} from 'lucide-react'
import logo from '@/assets/logo.png'

const BRAND = '#1b2540'
const LIME = '#d2df64'
const BLUE = '#2621f0'
const OFFWHITE = '#f7f7f5'

const FORM_ENDPOINT = 'https://formsubmit.co/53769098b029e57422174b9cf1f9854f'

const thanksUrl =
  typeof window !== 'undefined' ? `${window.location.origin}/?gracias=1` : ''
const showThanks =
  typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search).get('gracias') === '1'

function jumpToForm(targetId: string) {
  return (e: MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(targetId)
    if (!el) return
    e.preventDefault()
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.setTimeout(() => {
      const input = el.querySelector<HTMLInputElement>(
        'input:not([type="hidden"]):not([name="_honey"])',
      )
      input?.focus({ preventScroll: true })
    }, 500)
  }
}

export function LandingPage() {
  return (
    <div className="font-sans text-[15px] leading-relaxed" style={{ color: BRAND }}>
      {showThanks && <ThanksBanner />}
      {/* HERO + NAV */}
      <section style={{ background: BRAND }}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-10 md:py-6">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Cargo Click" className="h-16 w-auto md:h-20" />
          </a>
          <a
            href="#acceso"
            className="rounded-md px-4 py-2 text-[13px] font-medium transition-opacity hover:opacity-90"
            style={{ background: LIME, color: BRAND }}
          >
            Quiero acceso anticipado
          </a>
        </nav>

        <div className="mx-auto max-w-6xl px-5 pb-20 pt-12 md:px-10 md:pb-28 md:pt-20">
          <div className="max-w-2xl">
            <span
              className="inline-block rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wider"
              style={{ background: 'rgba(210,223,100,0.15)', color: LIME }}
            >
              PRÓXIMAMENTE EN URUGUAY
            </span>
            <h1 className="mt-6 text-[34px] font-medium leading-[1.1] text-white md:text-[52px]">
              Fletes claros.
              <br />
              <span style={{ color: LIME }}>Sin pujas. Sin remates.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/65 md:text-[17px]">
              Conectamos empresas con transportistas de forma directa. El transportista propone su precio, la empresa elige. Así de simple.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#transportista"
                onClick={jumpToForm('transportista')}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-[15px] font-medium transition-opacity hover:opacity-90"
                style={{ background: LIME, color: BRAND }}
              >
                <Truck size={18} strokeWidth={1.5} />
                Soy transportista
              </a>
              <a
                href="#empresa"
                onClick={jumpToForm('empresa')}
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white/60"
              >
                <Package size={18} strokeWidth={1.5} />
                Tengo cargas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section style={{ background: OFFWHITE }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: BLUE }}
          >
            El problema
          </p>
          <h2 className="mt-3 max-w-3xl text-[26px] font-medium leading-[1.2] md:text-[34px]">
            Conseguir un flete sigue siendo más complicado de lo que debería
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#666] md:text-[16px]">
            Información dispersa, intermediarios innecesarios y sistemas que no trabajan para el transportista.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
            <PainCard
              Icon={MessagesSquare}
              title="Todo por grupos y contactos"
              text="La carga se consigue por WhatsApp, Facebook o conocidos. Sin orden ni transparencia."
            />
            <PainCard
              Icon={ArrowDown}
              title="Sistemas que bajan los precios"
              text="Las pujas te hacen competir a la baja. El camión pone el esfuerzo, otros se llevan el margen."
            />
            <PainCard
              Icon={Route}
              title="El retorno es pérdida"
              text="Volver vacío es la realidad de muchos. No debería ser así si hay carga disponible en todo el país."
            />
          </div>
        </div>
      </section>

      {/* DIFERENCIACIÓN + FORMULARIOS (continuo, fondo oscuro) */}
      <section style={{ background: BRAND }}>
        <div className="mx-auto max-w-6xl px-5 pb-4 pt-16 md:px-10 md:pb-8 md:pt-24">
          <div
            className="rounded-xl p-7 md:p-10"
            style={{
              background: 'rgba(210,223,100,0.10)',
              border: '1px solid rgba(210,223,100,0.28)',
            }}
          >
            <p className="text-[20px] font-medium leading-[1.3] text-white md:text-[26px]">
              El transportista propone su precio.
              <br />
              <span style={{ color: LIME }}>La empresa elige. Sin pujas, sin remates.</span>
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-white/60 md:text-[16px]">
            Estamos construyendo una plataforma donde empresas publican sus cargas y transportistas cotizan libremente. Sin competencia forzada por precio. Sin intermediarios que se queden con el margen.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            <Step
              n="1"
              title="Publicás o buscás"
              text="La empresa publica su carga. El transportista ve lo disponible en su zona."
            />
            <Step
              n="2"
              title="Cotizás tu precio"
              text="El transportista propone lo que vale su trabajo. Sin remates ni pujas a la baja."
            />
            <Step
              n="3"
              title="La empresa elige"
              text="Coordinan directamente. Sin intermediarios, sin comisiones ocultas."
            />
          </div>
        </div>

        <div id="acceso" className="mx-auto max-w-6xl px-5 pb-[40vh] pt-16 md:px-10 md:pb-32 md:pt-24">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: LIME }}
          >
            Acceso anticipado
          </p>
          <h2 className="mt-3 text-[26px] font-medium leading-[1.2] text-white md:text-[34px]">
            Sumate antes del lanzamiento
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/60 md:text-[16px]">
            Estamos armando el primer grupo de transportistas y empresas para el piloto en Uruguay. Dejá tus datos y te contactamos directo por WhatsApp.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            <FormCard
              id="transportista"
              Icon={Truck}
              title="Soy transportista"
              subtitle="Quiero encontrar cargas para mis retornos"
              fields={[
                { label: 'Nombre', name: 'nombre', placeholder: 'Tu nombre' },
                { label: 'WhatsApp', name: 'whatsapp', placeholder: '09X XXX XXX', type: 'tel' },
                { label: 'Zona principal', name: 'zona', placeholder: 'Ej: Montevideo, Rivera...' },
                { label: 'Tipo de camión', name: 'camion', placeholder: 'Ej: Furgón, chata, sider...' },
              ]}
            />
            <FormCard
              id="empresa"
              Icon={Package}
              title="Tengo cargas"
              subtitle="Quiero conectarme con transportistas"
              fields={[
                { label: 'Empresa', name: 'empresa', placeholder: 'Nombre de tu empresa' },
                { label: 'Contacto', name: 'contacto', placeholder: 'Tu nombre' },
                { label: 'WhatsApp', name: 'whatsapp', placeholder: '09X XXX XXX', type: 'tel' },
                { label: 'Tipo de carga habitual', name: 'carga', placeholder: 'Ej: pallets, bultos, granel...' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111827]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-7 text-[13px] text-white/35 md:flex-row md:items-center md:px-10">
          <span>© 2026 Cargo Click · Uruguay</span>
          <span>Estamos en camino · Próximo lanzamiento</span>
        </div>
      </footer>
    </div>
  )
}

type IconType = typeof Truck

function PainCard({ Icon, title, text }: { Icon: IconType; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-[#e5e5e5] bg-white p-6">
      <Icon size={22} strokeWidth={1.5} style={{ color: BLUE }} />
      <h3 className="mt-4 text-[15px] font-medium" style={{ color: BRAND }}>
        {title}
      </h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[#888]">{text}</p>
    </div>
  )
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[14px] font-medium"
        style={{ background: LIME, color: BRAND }}
      >
        {n}
      </div>
      <div>
        <h3 className="text-[15px] font-medium text-white">{title}</h3>
        <p className="mt-1 text-[13px] leading-relaxed text-white/55">{text}</p>
      </div>
    </div>
  )
}

type Field = { label: string; name: string; placeholder: string; type?: string }

function FormCard({
  id,
  Icon,
  title,
  subtitle,
  fields,
}: {
  id: string
  Icon: IconType
  title: string
  subtitle: string
  fields: Field[]
}) {
  return (
    <form
      id={id}
      action={FORM_ENDPOINT}
      method="POST"
      className="scroll-mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-6 md:scroll-mt-12 md:p-7"
    >
      <input type="hidden" name="_subject" value={`Acceso anticipado — ${title}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={thanksUrl} />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
      />

      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          style={{ background: LIME }}
        >
          <Icon size={18} strokeWidth={1.6} style={{ color: BRAND }} />
        </div>
        <div>
          <p className="text-[15px] font-medium text-white">{title}</p>
          <p className="text-[12px] text-white/45">{subtitle}</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {fields.map((f) => (
          <label key={f.name} className="block">
            <span className="block text-[12px] text-white/50">{f.label}</span>
            <input
              type={f.type ?? 'text'}
              name={f.name}
              placeholder={f.placeholder}
              required
              className="mt-1.5 w-full rounded-md border border-white/15 bg-white/[0.06] px-3 py-2.5 text-[13px] text-white placeholder-white/30 outline-none transition-colors focus:border-white/40"
            />
          </label>
        ))}
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg py-3 text-[14px] font-medium transition-opacity hover:opacity-90"
        style={{ background: LIME, color: BRAND }}
      >
        Me anoto
        <ArrowRight size={16} strokeWidth={1.8} />
      </button>
    </form>
  )
}

function ThanksBanner() {
  return (
    <div
      className="flex items-center justify-center gap-2 px-5 py-3 text-[14px] font-medium"
      style={{ background: LIME, color: BRAND }}
    >
      <CheckCircle2 size={18} strokeWidth={1.8} />
      ¡Gracias! Recibimos tus datos. Te contactamos por WhatsApp en menos de 24 hs.
    </div>
  )
}
