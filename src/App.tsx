import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react'
import logoImg from '@/imports/image-1.png'
import fijelLogo from '@/imports/fijel logo.png'
import unimedilLogo from '@/imports/unimedil logo.png'
import unaelLogo from '@/imports/Unael logo.png'
import assemblyPhoto from '../img/fig.png'
import congregationPhoto from '../img/581107550_1220343193474814_6438229930758811630_n.jpg'
import trainingPhoto from '../img/img1.jpg'
import boardPhoto from '../img/imag2.jpg'
import crusadePhoto from '../img/f2.jpg'
import evangelismPhoto from '../img/f3.jpg'
import miraclePhoto from '../img/f4.jpg'
import {
  Users,
  Church,
  BookOpen,
  Music2,
  Handshake,
  Globe2,
  ShieldCheck,
  Target,
  Compass,
  Quote,
  MapPin,
  Mail,
  Phone,
  Info,
  X,
  Menu,
  ArrowLeft,
  Camera,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react'

const FACEBOOK_URL = 'https://www.facebook.com/CIPEDIL.OFICIALSJL/'

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-2.796c0-2.446 1.494-3.777 3.674-3.777 1.044 0 1.94.078 2.202.113v2.554h-1.511c-1.186 0-1.416.564-1.416 1.392v1.814h2.83l-.369 3.667h-2.461v7.98H9.101z"
        fill="currentColor"
      />
    </svg>
  )
}

// ── palette ──────────────────────────────────────────────────────────
// Drawn from the CIPEDIL mark itself (blue, pink, yellow, green) so the
// site reads as the same brand as the logo, not a generic template.
const C = {
  blue: '#1093CE',
  blueDk: '#0B6FA0',
  blueLt: '#E7F4FB',
  cyan: '#29B6E8',
  cyanLt: '#E3F6FC',
  pink: '#E01084',
  pinkLt: '#FCE4F1',
  yellow: '#F5A623',
  yellowLt: '#FEF1DC',
  yellowDk: '#8A6416',
  green: '#2FA85E',
  greenLt: '#E6F5EC',
  navy: '#1E2A44',
  slate: '#57657A',
  muted: '#6B7789',
  light: '#F5F7FA',
  border: '#E3E8EF',
}

// ── carousel slides ─────────────────────────────────────────────────
const SLIDES = [
  {
    img: boardPhoto,
    tag: 'Confraternidad Pastoral',
    title: 'Unidos como\nfamilia pastoral',
    sub: 'Más de 50 pastores del distrito de San Juan de Lurigancho caminando juntos en fe, oración y comunión.',
    cta: 'Quiero unirme',
    ctaHref: '#contacto',
  },
  {
    img: congregationPhoto,
    tag: 'Eventos de Adoración',
    title: 'Un solo corazón,\nuna sola voz',
    sub: 'Eventos interdenominacionales que fortalecen la unidad del cuerpo de Cristo en nuestro distrito.',
    cta: 'Ver eventos',
    ctaHref: '#eventos',
  },
  {
    img: trainingPhoto,
    tag: 'Capacitación Ministerial',
    title: 'Pastores equipados\npara el ministerio',
    sub: 'Seminarios, retiros y capacitaciones que actualizan y fortalecen el liderazgo pastoral.',
    cta: 'Conocer más',
    ctaHref: '#nosotros',
  },
  {
    img: evangelismPhoto,
    tag: 'Misión Evangelizadora',
    title: 'Luz de influencia\nen San Juan de Lurigancho',
    sub: 'Llevando el Evangelio con impacto real a cada rincón del distrito, trabajando juntos como iglesia.',
    cta: 'Nuestra misión',
    ctaHref: '#mision',
  },
]

const EVENTS: { date: string; month: string; year: string; title: string; desc: string; color: string; Icon: LucideIcon }[] = [
  {
    date: '15',
    month: 'SEP',
    year: '2026',
    title: 'Confraternidad Pastoral Mensual',
    desc: 'Encuentro de oración, comunión y actualización ministerial entre pastores del distrito.',
    color: C.blue,
    Icon: Handshake,
  },
  {
    date: '04',
    month: 'OCT',
    year: '2026',
    title: 'Retiro Espiritual Pastoral',
    desc: 'Jornada de retiro para renovar el llamado ministerial y fortalecer vínculos de hermandad.',
    color: C.pink,
    Icon: Church,
  },
  {
    date: '22',
    month: 'NOV',
    year: '2026',
    title: 'Seminario de Discipulado',
    desc: 'Capacitación práctica para la misión evangelizadora y el discipulado en las congregaciones locales.',
    color: C.green,
    Icon: BookOpen,
  },
  {
    date: '13',
    month: 'DIC',
    year: '2026',
    title: 'Gran Culto Interdenominacional',
    desc: 'Celebración de cierre de año uniendo todas las congregaciones en adoración y gratitud.',
    color: C.yellow,
    Icon: Music2,
  },
]

const BENEFITS: { Icon: LucideIcon; title: string; desc: string; color: string; tint: string }[] = [
  { Icon: Users, title: 'Red de Apoyo', desc: 'Accede a una red de más de 50 pastores listos para apoyarte en el ministerio y la vida pastoral.', color: C.blue, tint: C.blueLt },
  { Icon: BookOpen, title: 'Capacitación', desc: 'Seminarios, talleres y retiros diseñados para equiparte y mantenerte actualizado en la Palabra de Dios.', color: C.pink, tint: C.pinkLt },
  { Icon: Globe2, title: 'Impacto Colectivo', desc: 'Proyectos de evangelización y acción social que ninguna iglesia podría lograr sola.', color: C.green, tint: C.greenLt },
  { Icon: ShieldCheck, title: 'Unidad Práctica', desc: 'Promovemos la unidad visible de la iglesia en el distrito, fortaleciendo el testimonio cristiano.', color: C.yellow, tint: C.yellowLt },
]

// Central board — district-wide leadership.
const DIRECTIVA_CENTRAL = [
  { nombre: 'Carlos Mendoza Ríos', cargo: 'Presidente', iglesia: 'Iglesia Evangélica Emmanuel' },
  { nombre: 'Roberto Huanca Flores', cargo: 'Vicepresidente', iglesia: 'Iglesia Pentecostal Bethel' },
  { nombre: 'Miguel Ángel Torres', cargo: 'Secretario General', iglesia: 'Iglesia Bautista Gracia y Verdad' },
  { nombre: 'Samuel Quispe Mamani', cargo: 'Tesorero', iglesia: 'Iglesia Adventista del Séptimo Día' },
  { nombre: 'Gloria Sánchez Vega', cargo: 'Secretaria de Actas', iglesia: 'Iglesia de Dios del Evangelio Completo' },
  { nombre: 'Juan Pablo Ccoa', cargo: 'Vocal', iglesia: 'Iglesia Presbiteriana Shalom' },
]

// Geographic sectors of San Juan de Lurigancho, each with its own local
// board. Boundaries and names are illustrative placeholders — swap in the
// district's official zonas/comunas once the reference map is available.
const SECTORS = [
  {
    name: 'Zárate',
    desc: 'Uno de los sectores más antiguos y consolidados del distrito. Reúne congregaciones históricas que sostienen un rol activo en la coordinación interdistrital y en la formación de nuevos líderes.',
    board: [
      { nombre: 'Fernando Ramírez Castro', cargo: 'Coordinador de Sector', iglesia: 'Iglesia Cristiana El Redentor' },
      { nombre: 'Rosa Elena Delgado', cargo: 'Secretaria de Sector', iglesia: 'Iglesia Nazareno Zárate' },
      { nombre: 'Teodoro Huamán Rivas', cargo: 'Vocal de Sector', iglesia: 'Iglesia Cristiana El Redentor' },
    ],
  },
  {
    name: 'Canto Grande',
    desc: 'Sector de alta densidad poblacional en la zona alta del distrito, con un crecimiento sostenido de nuevas congregaciones y un fuerte trabajo de evangelización juvenil.',
    board: [
      { nombre: 'Jorge Villanueva Soto', cargo: 'Coordinador de Sector', iglesia: 'Iglesia Alianza Cristiana' },
      { nombre: 'Édgar Paredes Luna', cargo: 'Secretario de Sector', iglesia: 'Iglesia Pentecostal Canto Grande' },
      { nombre: 'Lucía Ramos Ibáñez', cargo: 'Vocal de Sector', iglesia: 'Iglesia Alianza Cristiana' },
    ],
  },
  {
    name: 'Bayóvar',
    desc: 'Zona residencial y comercial consolidada, donde las iglesias mantienen un trabajo constante de evangelización comunitaria y apoyo social a las familias del sector.',
    board: [
      { nombre: 'Karina Injante Rojas', cargo: 'Coordinadora de Sector', iglesia: 'Iglesia Bautista Bayóvar' },
      { nombre: 'Wilson Apaza Choque', cargo: 'Secretario de Sector', iglesia: 'Iglesia Evangélica Getsemaní' },
      { nombre: 'Percy Gonzales Tello', cargo: 'Vocal de Sector', iglesia: 'Iglesia Bautista Bayóvar' },
    ],
  },
  {
    name: 'Huáscar',
    desc: 'Sector en expansión ubicado en la parte alta de Lurigancho, con congregaciones jóvenes enfocadas en el trabajo social y el crecimiento de nuevas células.',
    board: [
      { nombre: 'Marco Antonio Salazar', cargo: 'Coordinador de Sector', iglesia: 'Iglesia Cristiana Roca Fuerte' },
      { nombre: 'Yolanda Espinoza Vidal', cargo: 'Secretaria de Sector', iglesia: 'Iglesia Adventista Huáscar' },
      { nombre: 'Andrés Quispe Mendoza', cargo: 'Vocal de Sector', iglesia: 'Iglesia Cristiana Roca Fuerte' },
    ],
  },
  {
    name: 'Mariscal Cáceres',
    desc: 'Zona mixta entre lo urbano y lo popular, con una red de iglesias comprometidas con la formación de líderes y el trabajo intergeneracional.',
    board: [
      { nombre: 'Henry David Palomino', cargo: 'Coordinador de Sector', iglesia: 'Iglesia Presbiteriana Renuevo' },
      { nombre: 'Raúl Cusi Mamani', cargo: 'Secretario de Sector', iglesia: 'Iglesia Pentecostal Mariscal Cáceres' },
      { nombre: 'Betty Cárdenas Soto', cargo: 'Vocal de Sector', iglesia: 'Iglesia Presbiteriana Renuevo' },
    ],
  },
  {
    name: 'Campoy',
    desc: 'Sector fronterizo con el distrito de El Agustino, con congregaciones que trabajan de la mano con otras confraternidades vecinas en labor social y evangelística.',
    board: [
      { nombre: 'Milagros Chumpitaz León', cargo: 'Coordinadora de Sector', iglesia: 'Iglesia Bautista Campoy' },
      { nombre: 'Óscar Fernández Rivas', cargo: 'Secretario de Sector', iglesia: 'Iglesia Evangélica Fuente de Vida' },
      { nombre: 'Nancy Torres Aguilar', cargo: 'Vocal de Sector', iglesia: 'Iglesia Bautista Campoy' },
    ],
  },
]

// One brand color per wedge — echoes the logo's four-color mark.
const WHEEL_COLOR = [C.blue, C.pink, C.yellow, C.green, C.cyan, C.blueDk]
const WHEEL_TINT = [C.blueLt, C.pinkLt, C.yellowLt, C.greenLt, C.cyanLt, C.blueLt]

const NAV = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Misión y Visión', href: '#mision' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Sectores', href: '#/sectores' },
  { label: 'Contacto', href: '#contacto' },
]

// Sister confraternities. `href: null` means no Facebook link yet — the
// card still renders but isn't clickable until one is provided.
const ALLIES = [
  { name: 'FIJEL', color: C.blue, logo: fijelLogo as string | null, href: 'https://www.facebook.com/profile.php?id=61553471230340&locale=es_LA' as string | null },
  { name: 'UNAEL', color: C.pink, logo: unaelLogo as string | null, href: null as string | null },
  { name: 'UNIMEDIL', color: C.green, logo: unimedilLogo as string | null, href: 'https://www.facebook.com/unimedil' as string | null },
]

// ── helpers ─────────────────────────────────────────────────────────
function initials(name: string) {
  const parts = name.split(' ').filter(Boolean)
  return ((parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')).toUpperCase()
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function wedgePath(cx: number, cy: number, rOuter: number, rInner: number, startAngle: number, endAngle: number) {
  const so = polarToCartesian(cx, cy, rOuter, endAngle)
  const eo = polarToCartesian(cx, cy, rOuter, startAngle)
  const si = polarToCartesian(cx, cy, rInner, endAngle)
  const ei = polarToCartesian(cx, cy, rInner, startAngle)
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1
  return `M ${so.x} ${so.y} A ${rOuter} ${rOuter} 0 ${largeArc} 0 ${eo.x} ${eo.y} L ${ei.x} ${ei.y} A ${rInner} ${rInner} 0 ${largeArc} 1 ${si.x} ${si.y} Z`
}

// Small person card shared by the central board and the sector boards.
function PersonCard({ nombre, cargo, iglesia, size = 'md' }: { nombre: string; cargo: string; iglesia: string; size?: 'md' | 'sm' }) {
  const avatar = size === 'md' ? 84 : 56
  return (
    <div
      style={{
        display: 'flex', alignItems: 'flex-start', gap: size === 'md' ? 18 : 14,
        background: '#fff', border: `1px solid ${C.border}`, borderRadius: 10,
        padding: size === 'md' ? '20px 22px' : '14px 16px',
      }}
    >
      <div style={{
        width: avatar, height: avatar, borderRadius: '50%', flexShrink: 0,
        background: C.blue, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: size === 'md' ? 26 : 17,
        letterSpacing: '0.02em',
      }}>
        {initials(nombre)}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{
          display: 'inline-block', color: C.blue, fontSize: 11, fontWeight: 700,
          letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 4,
        }}>
          {cargo}
        </div>
        <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: size === 'md' ? 16 : 14.5, color: C.navy, margin: '0 0 4px' }}>
          {nombre}
        </h3>
        <div style={{ color: C.muted, fontSize: size === 'md' ? 13 : 12.5, lineHeight: 1.5 }}>{iglesia}</div>
      </div>
    </div>
  )
}

// Section eyebrow label — plain typographic mark, no icon.
function Eyebrow({ children, color = C.blue }: { children: ReactNode; color?: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      color, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', marginBottom: 14,
    }}>
      <span style={{ width: 18, height: 2, background: color, display: 'inline-block' }} />
      {children}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [slide, setSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [activeSector, setActiveSector] = useState<number | null>(null)
  const [route, setRoute] = useState<'home' | 'sectores'>(() =>
    typeof window !== 'undefined' && window.location.hash.startsWith('#/sectores') ? 'sectores' : 'home'
  )
  const sectorPanelRef = useRef<HTMLDivElement | null>(null)

  const goTo = useCallback((idx: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setSlide(idx)
      setAnimating(false)
    }, 350)
  }, [animating])

  useEffect(() => {
    const id = setInterval(() => {
      setSlide(s => (s + 1) % SLIDES.length)
    }, 5500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lightweight hash router: "#/sectores" is its own page, everything
  // else is an anchor within the landing page.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash
      if (hash.startsWith('#/sectores')) {
        setRoute('sectores')
        window.scrollTo({ top: 0 })
        return
      }
      setRoute('home')
      const id = hash.slice(1)
      if (id) {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        })
      }
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  const selectSector = (i: number) => {
    setActiveSector(i)
    sectorPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const resetSector = () => {
    setActiveSector(null)
    sectorPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const cur = SLIDES[slide]

  // Wheel geometry
  const CX = 200, CY = 200, R_OUT = 190, R_IN = 74, GAP = 2.2
  const step = 360 / SECTORS.length

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", color: C.navy, background: '#fff', minHeight: '100%' }}>

      {/* ── NAVBAR ──────────────────────────────────────────────── */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: (scrolled || route === 'sectores') ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(12px)',
          boxShadow: (scrolled || route === 'sectores') ? '0 1px 0 rgba(21,34,56,0.08)' : 'none',
          transition: 'all 0.3s ease',
          borderBottom: (scrolled || route === 'sectores') ? `1px solid ${C.border}` : '1px solid rgba(255,255,255,0.15)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <a href="#inicio">
            <img src={logoImg} alt="CIPEDIL" style={{ height: (scrolled || route === 'sectores') ? 44 : 52, transition: 'height 0.3s', objectFit: 'contain' }} />
          </a>

          <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <div className="desktop-nav" style={{ gap: 32, alignItems: 'center' }}>
              {NAV.map(l => {
                const dark = scrolled || route === 'sectores'
                const isActive = l.href === '#/sectores' && route === 'sectores'
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    style={{
                      fontSize: 14, fontWeight: 600, textDecoration: 'none',
                      color: isActive ? C.blue : (dark ? C.navy : '#fff'),
                      transition: 'color 0.2s',
                      letterSpacing: '0.01em',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.blue)}
                    onMouseLeave={e => (e.currentTarget.style.color = isActive ? C.blue : (dark ? C.navy : '#fff'))}
                  >
                    {l.label}
                  </a>
                )
              })}
              <a
                href="#contacto"
                style={{
                  background: C.blue, color: '#fff', padding: '9px 22px',
                  borderRadius: 4, fontSize: 13, fontWeight: 700,
                  textDecoration: 'none', letterSpacing: '0.04em',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = C.blueDk)}
                onMouseLeave={e => (e.currentTarget.style.background = C.blue)}
              >
                UNIRSE A CIPEDIL
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CIPEDIL en Facebook"
                className="fb-btn"
              >
                <FacebookIcon size={16} />
              </a>
            </div>

            <button
              className="mobile-toggle"
              onClick={() => setMenuOpen(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, alignItems: 'center' }}
              aria-label="Abrir menú"
            >
              <Menu size={22} color={(scrolled || route === 'sectores') ? C.navy : '#fff'} strokeWidth={2} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(21,34,56,0.98)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            style={{ position: 'absolute', top: 22, right: 24, background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
          >
            <X size={24} color="#fff" strokeWidth={2} />
          </button>
          <div style={{ background: '#fff', borderRadius: 8, padding: '10px 16px', marginBottom: 8 }}>
            <img src={logoImg} alt="CIPEDIL" style={{ height: 44, objectFit: 'contain', display: 'block' }} />
          </div>
          {NAV.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontSize: 22, fontWeight: 700, color: '#fff', textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setMenuOpen(false)} style={{ marginTop: 8, background: C.blue, color: '#fff', padding: '12px 32px', borderRadius: 4, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
            UNIRSE A CIPEDIL
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CIPEDIL en Facebook"
            className="fb-btn fb-btn--lg"
          >
            <FacebookIcon size={20} />
          </a>
        </div>
      )}

      {route === 'sectores' ? (
        /* ══════════════════════════════════════════════════════════
           SECTORES — dedicated page
           ══════════════════════════════════════════════════════════ */
        <div style={{ paddingTop: 68 }}>
          <div style={{ background: C.light, padding: '48px 24px 40px', borderBottom: `1px solid ${C.border}` }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <a href="#inicio" style={{ display: 'flex', width: 'fit-content', alignItems: 'center', gap: 6, color: C.blue, fontSize: 13, fontWeight: 700, textDecoration: 'none', marginBottom: 20 }}>
                <ArrowLeft size={15} strokeWidth={2.25} /> Volver al inicio
              </a>
              <Eyebrow>Organización territorial</Eyebrow>
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: C.navy, margin: '0 0 12px' }}>
                Sectores de San Juan de Lurigancho
              </h1>
              <p style={{ color: C.slate, fontSize: 15.5, maxWidth: 620, margin: 0 }}>
                El distrito se organiza en seis sectores pastorales. Selecciona uno en el diagrama para ver su junta directiva local.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 24px 90px' }}>
            {/* Interactive sector wheel */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 56px' }}>
              <svg viewBox="0 0 400 400" style={{ width: '100%', maxWidth: 400, height: 'auto' }}>
                {SECTORS.map((s, i) => {
                  const start = i * step + GAP
                  const end = (i + 1) * step - GAP
                  const mid = (start + end) / 2
                  const labelPos = polarToCartesian(CX, CY, (R_OUT + R_IN) / 2, mid)
                  const active = activeSector === i
                  return (
                    <g key={s.name} onClick={() => selectSector(i)} style={{ cursor: 'pointer' }}>
                      <path
                        d={wedgePath(CX, CY, R_OUT, R_IN, start, end)}
                        fill={active ? WHEEL_COLOR[i] : WHEEL_TINT[i]}
                        stroke="#fff"
                        strokeWidth={3}
                        style={{ transition: 'fill 0.25s' }}
                      />
                      <text
                        x={labelPos.x}
                        y={labelPos.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                          fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 13,
                          fill: active ? '#fff' : C.navy, pointerEvents: 'none', transition: 'fill 0.25s',
                        }}
                      >
                        Sector {i + 1}
                      </text>
                    </g>
                  )
                })}
                <g onClick={resetSector} style={{ cursor: 'pointer' }}>
                  <circle cx={CX} cy={CY} r={R_IN - 4} fill={C.navy} />
                  <text x={CX} y={CY - 8} textAnchor="middle" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15, fill: '#fff' }}>
                    SJL
                  </text>
                  <text x={CX} y={CY + 12} textAnchor="middle" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10.5, fill: 'rgba(255,255,255,0.65)', letterSpacing: '0.06em' }}>
                    {activeSector === null ? 'JUNTA CENTRAL' : '6 SECTORES'}
                  </text>
                </g>
              </svg>
            </div>

            {/* Sector chips — quick jump, mirrors the wheel */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 28 }}>
              <button
                onClick={resetSector}
                style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  padding: '8px 16px', borderRadius: 999, cursor: 'pointer',
                  border: `1.5px solid ${activeSector === null ? C.navy : C.border}`,
                  background: activeSector === null ? C.navy : '#fff',
                  color: activeSector === null ? '#fff' : C.navy,
                  fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 13,
                  transition: 'background 0.25s, border-color 0.25s, color 0.25s',
                }}
              >
                Junta Central
              </button>
              {SECTORS.map((s, i) => {
                const active = activeSector === i
                return (
                  <button
                    key={s.name}
                    onClick={() => selectSector(i)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 7,
                      padding: '8px 16px', borderRadius: 999, cursor: 'pointer',
                      border: `1.5px solid ${active ? WHEEL_COLOR[i] : C.border}`,
                      background: active ? WHEEL_COLOR[i] : '#fff',
                      color: active ? '#fff' : C.navy,
                      fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 13,
                      transition: 'background 0.25s, border-color 0.25s, color 0.25s',
                    }}
                  >
                    <span style={{
                      width: 7, height: 7, borderRadius: '50%',
                      background: active ? '#fff' : WHEEL_COLOR[i],
                    }} />
                    Sector {i + 1}
                  </button>
                )
              })}
            </div>

            {/* Detail panel — central board by default, or the selected sector */}
            {activeSector === null ? (
              <div ref={sectorPanelRef} style={{ border: `1.5px solid ${C.border}`, borderRadius: 14, padding: '28px 28px 32px', background: C.light }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
                  <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 22, color: C.navy, margin: 0 }}>
                    Junta Directiva Central
                  </h2>
                  <span style={{ fontSize: 12.5, color: C.muted }}>Período 2025 – 2027 · Todo el distrito</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                  {DIRECTIVA_CENTRAL.map((m, i) => (
                    <PersonCard key={i} nombre={m.nombre} cargo={m.cargo} iglesia={m.iglesia} />
                  ))}
                </div>
              </div>
            ) : (() => {
              const s = SECTORS[activeSector]
              const color = WHEEL_COLOR[activeSector]
              return (
                <div
                  ref={sectorPanelRef}
                  style={{
                    border: `1.5px solid ${color}`,
                    borderRadius: 14, padding: '28px 28px 32px',
                    background: WHEEL_TINT[activeSector],
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11.5,
                        color, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6,
                      }}>
                        <MapPin size={14} color={color} strokeWidth={2.25} />
                        Sector {activeSector + 1}
                      </span>
                      <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 24, color: C.navy, margin: 0 }}>
                        {s.name}
                      </h2>
                    </div>
                    <span style={{ fontSize: 12.5, color: C.muted, whiteSpace: 'nowrap' }}>Período 2025 – 2027</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'stretch' }}>
                    <div style={{
                      flex: '1 1 280px', minHeight: 200, borderRadius: 10,
                      background: '#fff', border: `1.5px dashed ${color}`,
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
                    }}>
                      <Camera size={30} color={color} strokeWidth={1.75} />
                      <span style={{ fontSize: 12.5, color: C.muted, textAlign: 'center', padding: '0 16px' }}>
                        Foto grupal de la junta directiva
                      </span>
                    </div>
                    <div style={{ flex: '1.4 1 320px', display: 'flex', alignItems: 'center' }}>
                      <p style={{ color: C.slate, fontSize: 14.5, lineHeight: 1.7, margin: 0 }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })()}

            <div style={{
              marginTop: 40, borderRadius: 8, padding: '18px 24px',
              background: C.blueLt, border: `1px solid ${C.border}`,
              display: 'flex', alignItems: 'flex-start', gap: 14,
            }}>
              <Info size={19} color={C.blue} strokeWidth={2} style={{ flexShrink: 0, marginTop: 1 }} />
              <p style={{ color: C.slate, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                Cada junta sectorial es elegida por las iglesias de su zona y responde ante la Junta Directiva Central, que representa a la confraternidad en su conjunto y vela por el cumplimiento de la misión y visión institucional.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* ══════════════════════════════════════════════════════════
           LANDING
           ══════════════════════════════════════════════════════════ */
        <>
          {/* ── HERO CAROUSEL ───────────────────────────────────── */}
          <section id="inicio" style={{ position: 'relative', height: '100vh', minHeight: 560, overflow: 'hidden' }}>
            {SLIDES.map((s, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute', inset: 0,
                  opacity: i === slide ? 1 : 0,
                  transition: 'opacity 0.8s ease',
                  pointerEvents: i === slide ? 'auto' : 'none',
                }}
              >
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url('${s.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: i === slide ? 'scale(1.03)' : 'scale(1)',
                    transition: 'transform 6s ease',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to right, rgba(30,42,68,0.82) 0%, rgba(30,42,68,0.48) 58%, rgba(30,42,68,0.16) 100%)',
                }} />
              </div>
            ))}

            <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
              <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', width: '100%' }}>
                <div style={{ maxWidth: 640 }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    color: '#fff',
                    fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
                    marginBottom: 22, textTransform: 'uppercase',
                    opacity: animating ? 0 : 1, transform: animating ? 'translateY(8px)' : 'none',
                    transition: 'all 0.4s ease',
                  }}>
                    <span style={{ width: 26, height: 2, background: C.cyan, display: 'inline-block' }} />
                    {cur.tag}
                  </div>

                  <h1 style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(36px, 6vw, 64px)',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1.12,
                    marginBottom: 20,
                    whiteSpace: 'pre-line',
                    opacity: animating ? 0 : 1,
                    transform: animating ? 'translateY(12px)' : 'none',
                    transition: 'all 0.45s ease 0.05s',
                  }}>
                    {cur.title}
                  </h1>

                  <p style={{
                    fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7,
                    marginBottom: 32, maxWidth: 520,
                    opacity: animating ? 0 : 1,
                    transform: animating ? 'translateY(10px)' : 'none',
                    transition: 'all 0.45s ease 0.1s',
                  }}>
                    {cur.sub}
                  </p>

                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                    <a
                      href={cur.ctaHref}
                      style={{
                        background: C.blue, color: '#fff',
                        padding: '14px 32px', borderRadius: 4,
                        fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 14,
                        textDecoration: 'none', letterSpacing: '0.04em',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = C.blueDk)}
                      onMouseLeave={e => (e.currentTarget.style.background = C.blue)}
                    >
                      {cur.cta}
                    </a>
                    <a
                      href="#nosotros"
                      style={{
                        border: '1.5px solid rgba(255,255,255,0.55)', color: '#fff',
                        padding: '12px 28px', borderRadius: 4,
                        fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 14,
                        textDecoration: 'none', letterSpacing: '0.04em',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'transparent' }}
                    >
                      Conocer CIPEDIL
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
              zIndex: 10, display: 'flex', gap: 10,
            }}>
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === slide ? 26 : 8, height: 6,
                    borderRadius: 3, border: 'none', cursor: 'pointer',
                    background: i === slide ? '#fff' : 'rgba(255,255,255,0.4)',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                  aria-label={`Diapositiva ${i + 1}`}
                />
              ))}
            </div>

            {['prev', 'next'].map(dir => (
              <button
                key={dir}
                className="hero-arrow"
                onClick={() => goTo(dir === 'next' ? (slide + 1) % SLIDES.length : (slide - 1 + SLIDES.length) % SLIDES.length)}
                style={{
                  position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                  [dir === 'prev' ? 'left' : 'right']: 24,
                  zIndex: 10, background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)',
                  width: 42, height: 42, borderRadius: '50%', cursor: 'pointer',
                  transition: 'background 0.2s',
                  backdropFilter: 'blur(4px)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.28)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
                aria-label={dir === 'prev' ? 'Anterior' : 'Siguiente'}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d={dir === 'prev' ? 'M11 4L6 9L11 14' : 'M7 4L12 9L7 14'} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </section>

          {/* ── STATS STRIP ─────────────────────────────────────── */}
          <section style={{ background: C.navy, padding: '30px 24px' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
              {[
                { n: '30+', l: 'Iglesias asociadas' },
                { n: '50+', l: 'Pastores miembros' },
                { n: '15+', l: 'Años de ministerio' },
                { n: '6', l: 'Sectores del distrito' },
              ].map(s => (
                <div key={s.l} style={{ textAlign: 'center', padding: '12px 8px' }}>
                  <div style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.58)', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── QUIÉNES SOMOS ───────────────────────────────────── */}
          <section id="nosotros" style={{ padding: '90px 24px', background: '#fff' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 16px 40px rgba(21,34,56,0.14)' }}>
                  <img
                    src={assemblyPhoto}
                    alt="Asamblea de pastores de CIPEDIL"
                    style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{
                  position: 'absolute', bottom: -24, right: -24,
                  background: C.blue, color: '#fff',
                  borderRadius: 6, padding: '18px 24px',
                  boxShadow: '0 8px 24px rgba(16,147,206,0.35)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 30, fontWeight: 700 }}>30+</div>
                  <div style={{ fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.9 }}>Iglesias unidas</div>
                </div>
              </div>

              <div>
                <Eyebrow>Quiénes somos</Eyebrow>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.22, marginBottom: 20, color: C.navy }}>
                  La confraternidad pastoral<br />
                  <span style={{ color: C.blue }}>más importante del distrito</span>
                </h2>
                <p style={{ color: C.slate, lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
                  CIPEDIL es la <strong style={{ color: C.navy }}>Confraternidad Interdenominacional de Pastores Evangélicos del Distrito de San Juan de Lurigancho</strong> — un espacio de hermandad donde ministros de distintas denominaciones se reúnen para caminar juntos.
                </p>
                <p style={{ color: C.slate, lineHeight: 1.8, marginBottom: 28, fontSize: 15 }}>
                  Somos una red de pastores comprometidos con la unidad práctica de la iglesia, la formación continua y el impacto evangelístico colectivo en uno de los distritos más poblados del Perú.
                </p>
                <a
                  href="#contacto"
                  style={{
                    display: 'inline-block',
                    background: C.blue, color: '#fff',
                    padding: '12px 28px', borderRadius: 4,
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 13,
                    textDecoration: 'none', letterSpacing: '0.05em',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = C.blueDk)}
                  onMouseLeave={e => (e.currentTarget.style.background = C.blue)}
                >
                  UNIRSE A CIPEDIL →
                </a>
              </div>
            </div>
          </section>

          {/* ── POR QUÉ UNIRSE (benefits) ───────────────────────── */}
          <section style={{ padding: '80px 24px', background: C.light }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 56, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Eyebrow>Beneficios de pertenecer</Eyebrow>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700, color: C.navy, margin: 0 }}>
                  ¿Por qué unirte a CIPEDIL?
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
                {BENEFITS.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#fff', borderRadius: 8, padding: '30px 26px',
                      border: `1px solid ${C.border}`,
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = b.color; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(21,34,56,0.08)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = C.border; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
                  >
                    <div style={{
                      width: 46, height: 46, borderRadius: 8, background: b.tint,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
                    }}>
                      <b.Icon size={22} color={b.color} strokeWidth={1.75} />
                    </div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 16.5, color: C.navy, marginBottom: 10 }}>{b.title}</h3>
                    <p style={{ color: C.slate, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── MISIÓN Y VISIÓN ─────────────────────────────────── */}
          <section id="mision" style={{ padding: '90px 24px', background: '#fff' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 56, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Eyebrow>Propósito institucional</Eyebrow>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700, color: C.navy, margin: 0 }}>
                  Misión &amp; Visión
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${C.border}` }}>
                  <div style={{ background: C.blue, padding: '22px 30px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <Target size={24} color="#fff" strokeWidth={1.75} />
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff' }}>Misión</div>
                  </div>
                  <div style={{ background: '#fff', padding: '28px 30px' }}>
                    <p style={{ color: C.navy, lineHeight: 1.8, fontSize: 15, margin: 0 }}>
                      Animar a la pastoral de CIPEDIL para el fiel cumplimiento de la <strong>misión evangelizadora y el discipulado</strong>, motivando a cada pastor a ser un agente de transformación en su comunidad y congregación.
                    </p>
                  </div>
                </div>

                <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${C.border}` }}>
                  <div style={{ background: C.pink, padding: '22px 30px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <Compass size={24} color="#fff" strokeWidth={1.75} />
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff' }}>Visión</div>
                  </div>
                  <div style={{ background: '#fff', padding: '28px 30px' }}>
                    <p style={{ color: C.navy, lineHeight: 1.8, fontSize: 15, margin: 0 }}>
                      Ser amigos de una gran <strong>familia pastoral</strong>, capacitados, entrenados y actualizados en la Palabra de Dios, para el fiel cumplimiento del ministerio de manera integral, promoviendo la <strong>unidad práctica de la iglesia como luz de influencia</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verse banner */}
              <div style={{
                marginTop: 40, borderRadius: 8, padding: '40px 48px', textAlign: 'center',
                background: `linear-gradient(135deg, ${C.navy} 0%, ${C.blueDk} 100%)`,
              }}>
                <Quote size={26} color={C.yellow} style={{ marginBottom: 14 }} />
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 20px)', color: '#fff', lineHeight: 1.7, margin: '0 0 14px' }}>
                  "Cuán bueno y cuán agradable es que los hermanos habiten juntos en armonía."
                </p>
                <div style={{ fontWeight: 700, fontSize: 12.5, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Salmos 133:1</div>
              </div>
            </div>
          </section>

          {/* ── EVENTOS ──────────────────────────────────────────── */}
          <section id="eventos" style={{ padding: '90px 24px', background: C.light }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <Eyebrow color={C.yellowDk}>Próximas actividades</Eyebrow>
                  <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700, color: C.navy, margin: 0 }}>
                    Eventos de Confraternidad
                  </h2>
                </div>
                <a href="#contacto" style={{ fontSize: 13, fontWeight: 700, color: C.blue, textDecoration: 'none', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                  Ver todos los eventos →
                </a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                {EVENTS.map((ev, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#fff', borderRadius: 8, overflow: 'hidden',
                      border: `1px solid ${C.border}`,
                      transition: 'box-shadow 0.2s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 28px rgba(21,34,56,0.1)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
                  >
                    <div style={{ background: ev.color, padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ color: '#fff', lineHeight: 1 }}>
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 34, fontWeight: 700 }}>{ev.date}</div>
                        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', opacity: 0.9 }}>{ev.month} {ev.year}</div>
                      </div>
                      <ev.Icon size={28} color="rgba(255,255,255,0.9)" strokeWidth={1.5} />
                    </div>
                    <div style={{ padding: '20px 20px 24px' }}>
                      <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15, color: C.navy, marginBottom: 8 }}>{ev.title}</h3>
                      <p style={{ color: C.slate, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{ev.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── GALERÍA STRIP ───────────────────────────────────── */}
          <section style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ display: 'flex', height: 220 }}>
              {[crusadePhoto, miraclePhoto, assemblyPhoto, congregationPhoto].map((url, i) => (
                <div key={i} style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                  <img src={url} alt="Momentos CIPEDIL" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: `${C.navy}25` }} />
                </div>
              ))}
            </div>
          </section>

          {/* ── ALIADOS ───────────────────────────────────────────── */}
          <section id="aliados" style={{ padding: '72px 24px', background: '#fff' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
              <Eyebrow color={C.green}>Trabajando en red</Eyebrow>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: C.navy, margin: '0 0 12px' }}>
                Confraternidades Aliadas
              </h2>
              <p style={{ color: C.slate, fontSize: 14.5, maxWidth: 560, margin: '0 auto 40px' }}>
                Caminamos junto a otras redes pastorales e institucionales comprometidas con la misma visión de unidad.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
                {ALLIES.map(ally => {
                  const card = (
                    <div
                      style={{
                        width: 190, borderRadius: 10, border: `1.5px solid ${C.border}`,
                        padding: '26px 20px', display: 'flex', flexDirection: 'column',
                        alignItems: 'center', gap: 10, transition: 'border-color 0.2s, box-shadow 0.2s',
                        cursor: ally.href ? 'pointer' : 'default',
                      }}
                      onMouseEnter={e => {
                        if (!ally.href) return
                        const el = e.currentTarget as HTMLElement
                        el.style.borderColor = ally.color
                        el.style.boxShadow = '0 10px 24px rgba(21,34,56,0.08)'
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.borderColor = C.border
                        el.style.boxShadow = 'none'
                      }}
                    >
                      <div style={{
                        width: 72, height: 72, borderRadius: '50%',
                        background: ally.logo ? '#fff' : `${ally.color}14`,
                        color: ally.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 15,
                        border: ally.logo ? `1px solid ${C.border}` : 'none',
                        overflow: 'hidden',
                      }}>
                        {ally.logo ? (
                          <img src={ally.logo} alt={`Logo ${ally.name}`} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 10 }} />
                        ) : (
                          ally.name.slice(0, 3)
                        )}
                      </div>
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 14, color: C.navy }}>
                        {ally.name}
                      </span>
                      {ally.href ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11.5, color: C.muted }}>
                          <ExternalLink size={13} strokeWidth={1.75} /> Ver Facebook
                        </span>
                      ) : (
                        <span style={{ fontSize: 11.5, color: C.muted }}>Próximamente</span>
                      )}
                    </div>
                  )
                  return ally.href ? (
                    <a
                      key={ally.name}
                      href={ally.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${ally.name} en Facebook`}
                      style={{ textDecoration: 'none' }}
                    >
                      {card}
                    </a>
                  ) : (
                    <div key={ally.name}>{card}</div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ── CONTACTO ─────────────────────────────────────────── */}
          <section id="contacto" style={{ padding: '90px 24px', background: '#fff' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 56, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Eyebrow>Forma parte de la red</Eyebrow>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700, color: C.navy, margin: '0 0 12px' }}>
                  ¿Tu iglesia aún no está en CIPEDIL?
                </h2>
                <p style={{ color: C.slate, fontSize: 16, maxWidth: 540, margin: '0 auto' }}>
                  Únete a la familia pastoral más grande de San Juan de Lurigancho. Escríbenos y con gusto te informamos cómo participar.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 56, alignItems: 'start' }}>
                <div>
                  <img src={logoImg} alt="CIPEDIL" style={{ height: 60, objectFit: 'contain', marginBottom: 28 }} />
                  <p style={{ color: C.slate, lineHeight: 1.8, marginBottom: 28, fontSize: 15 }}>
                    Si eres pastor o líder de una iglesia en el distrito de San Juan de Lurigancho, te invitamos a conocer CIPEDIL y ser parte de esta familia pastoral interdenominacional.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {[
                      { Icon: MapPin, label: 'Ubicación', val: 'San Juan de Lurigancho, Lima – Perú' },
                      { Icon: Mail, label: 'Correo', val: 'contacto@cipedil.org.pe' },
                      { Icon: Phone, label: 'Teléfono', val: '+51 987 654 321' },
                    ].map(c => (
                      <div key={c.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <div style={{ width: 38, height: 38, borderRadius: 8, background: C.blueLt, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <c.Icon size={17} color={C.blue} strokeWidth={2} />
                        </div>
                        <div>
                          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.muted, marginBottom: 2 }}>{c.label}</div>
                          <div style={{ fontWeight: 600, color: C.navy, fontSize: 14 }}>{c.val}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <form
                  onSubmit={e => e.preventDefault()}
                  style={{ background: C.light, borderRadius: 10, padding: '36px 32px', border: `1px solid ${C.border}` }}
                >
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 18, color: C.navy, marginBottom: 24 }}>
                    Solicitar información
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    {[
                      { label: 'Nombre completo', type: 'text', placeholder: 'Pastor Juan López' },
                      { label: 'Teléfono', type: 'tel', placeholder: '+51 999 123 456' },
                    ].map(f => (
                      <div key={f.label}>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder} style={{
                          width: '100%', padding: '10px 14px', borderRadius: 6,
                          border: `1.5px solid ${C.border}`, fontSize: 14,
                          background: '#fff', color: C.navy, outline: 'none', boxSizing: 'border-box',
                          transition: 'border-color 0.2s',
                        }}
                          onFocus={e => (e.currentTarget.style.borderColor = C.blue)}
                          onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                        />
                      </div>
                    ))}
                  </div>
                  {[
                    { label: 'Correo electrónico', type: 'email', placeholder: 'juan@iglesia.org' },
                    { label: 'Iglesia / Denominación', type: 'text', placeholder: 'Iglesia Evangélica Betel' },
                  ].map(f => (
                    <div key={f.label} style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} style={{
                        width: '100%', padding: '10px 14px', borderRadius: 6,
                        border: `1.5px solid ${C.border}`, fontSize: 14,
                        background: '#fff', color: C.navy, outline: 'none', boxSizing: 'border-box',
                        transition: 'border-color 0.2s',
                      }}
                        onFocus={e => (e.currentTarget.style.borderColor = C.blue)}
                        onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                      />
                    </div>
                  ))}
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Mensaje</label>
                    <textarea rows={3} placeholder="¿Cómo podemos ayudarte?" style={{
                      width: '100%', padding: '10px 14px', borderRadius: 6,
                      border: `1.5px solid ${C.border}`, fontSize: 14,
                      background: '#fff', color: C.navy, outline: 'none', resize: 'none', boxSizing: 'border-box',
                      transition: 'border-color 0.2s', fontFamily: "'Open Sans', sans-serif",
                    }}
                      onFocus={e => (e.currentTarget.style.borderColor = C.blue)}
                      onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: '100%', padding: '13px', borderRadius: 6, border: 'none',
                      background: C.blue, color: '#fff', cursor: 'pointer',
                      fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 14,
                      letterSpacing: '0.05em', textTransform: 'uppercase',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = C.blueDk)}
                    onMouseLeave={e => (e.currentTarget.style.background = C.blue)}
                  >
                    Enviar solicitud
                  </button>
                </form>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer style={{ background: C.navy, padding: '48px 24px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 40, flexWrap: 'wrap' }}>
            <div>
              <div style={{ background: '#fff', borderRadius: 8, padding: '10px 16px', display: 'inline-block', marginBottom: 16 }}>
                <img src={logoImg} alt="CIPEDIL" style={{ height: 40, objectFit: 'contain', display: 'block' }} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.7, maxWidth: 320 }}>
                Confraternidad Interdenominacional de Pastores Evangélicos del Distrito de San Juan de Lurigancho, Lima – Perú.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#fff', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Navegación</div>
              {NAV.map(l => (
                <a key={l.href} href={l.href} style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: 13, textDecoration: 'none', marginBottom: 8, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#fff', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Contacto</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>
                <span>San Juan de Lurigancho, Lima</span>
                <span>contacto@cipedil.org.pe</span>
                <span>+51 987 654 321</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, paddingBottom: 20 }}>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>
              © {new Date().getFullYear()} CIPEDIL · San Juan de Lurigancho, Lima – Perú
            </div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>
              Unidos en la fe · Capacitados en la Palabra
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', height: 5 }}>
          {[C.pink, C.blue, C.cyan, C.green, C.yellow].map((c, i) => (
            <div key={i} style={{ flex: 1, background: c }} />
          ))}
        </div>
      </footer>
    </div>
  )
}
