import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Flame,
  Zap,
  Target,
  Dumbbell,
  Activity,
  Trophy,
  Star,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  Check,
  ShieldCheck,
  Users,
  Clock,
} from "lucide-react";

const whatsappNumber = "5511999999999";
const companyEmail = "contato@rocketfit.com.br";
const instagramUrl = "https://www.instagram.com/rocketfit";

const sections = ["programas", "planos", "depoimentos", "contato"];

const programs = [
  {
    number: "01",
    title: "Força & Potência",
    description:
      "Treinamento de alta intensidade focado em ganho muscular e desenvolvimento de força máxima.",
    tag: "Avançado",
    Icon: Flame,
  },
  {
    number: "02",
    title: "Cardio Extremo",
    description:
      "Protocolos HIIT e endurance para queima de gordura acelerada e condicionamento cardiovascular.",
    tag: "Intermediário",
    Icon: Zap,
  },
  {
    number: "03",
    title: "Transformação",
    description:
      "Programa completo de 12 semanas com acompanhamento nutricional e treinos progressivos.",
    tag: "Todos os níveis",
    Icon: Target,
  },
];

const plans = [
  {
    name: "Starter",
    price: "97",
    period: "por mês",
    button: "Começar Agora",
    featured: false,
    features: ["Acesso à plataforma", "3 treinos por semana", "Suporte por chat", "Vídeo-aulas HD"],
  },
  {
    name: "PRO",
    price: "197",
    period: "por mês",
    button: "Quero o PRO",
    featured: true,
    features: [
      "Treinos ilimitados",
      "Consultoria nutricional",
      "Acompanhamento semanal",
      "Comunidade exclusiva",
      "App mobile",
    ],
  },
  {
    name: "Elite",
    price: "397",
    period: "por mês",
    button: "Ser Elite",
    featured: false,
    features: ["Tudo do PRO", "Personal trainer dedicado", "Plano nutricional personalizado", "Suporte 24/7"],
  },
];

const testimonials = [
  {
    text: "Perdi 18kg em 4 meses seguindo o programa. A metodologia é diferente de tudo que já tentei.",
    name: "Marcos Costa",
    role: "Plano PRO • 6 meses",
    initials: "MC",
  },
  {
    text: "Nunca achei que conseguiria fazer 100kg no supino. Em 8 meses de treino, bati meu recorde pessoal.",
    name: "João Silva",
    role: "Plano Elite • 1 ano",
    initials: "JS",
  },
  {
    text: "Os treinos são intensos mas os resultados aparecem rápido. Indico para todo mundo que conheço!",
    name: "Ana Ferreira",
    role: "Plano Starter • 3 meses",
    initials: "AF",
  },
];

const benefits = [
  { label: "Alunos Ativos", value: "2.4K+", Icon: Users },
  { label: "Satisfação", value: "98%", Icon: Trophy },
  { label: "Anos de Experiência", value: "7", Icon: Clock },
];

function getWhatsappLink(planName) {
  const message = `Olá, RocketFit! Tenho interesse no plano ${planName}. Pode me passar mais informações?`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function Logo() {
  return (
    <a href="#" className="font-display text-4xl tracking-[.08em] text-fire">
      Rocket<span className="text-zinc-100">Fit</span>
    </a>
  );
}

function NavLink({ id, active, children, onClick }) {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      className={`relative text-sm font-bold uppercase tracking-[.12em] transition ${
        active === id ? "text-fire" : "text-zinc-400 hover:text-fire"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-2 left-0 h-[2px] bg-fire transition-all ${
          active === id ? "w-full" : "w-0"
        }`}
      />
    </a>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("programas");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = "programas";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && window.scrollY + 180 >= section.offsetTop) {
          current = sectionId;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-dark text-zinc-100">
      <nav className="fixed top-0 z-50 w-full border-b border-fire/15 bg-dark/85 px-6 py-5 backdrop-blur-xl md:px-14">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-9 lg:flex">
            <NavLink id="programas" active={activeSection}>Programas</NavLink>
            <NavLink id="planos" active={activeSection}>Planos</NavLink>
            <NavLink id="depoimentos" active={activeSection}>Depoimentos</NavLink>
            <NavLink id="contato" active={activeSection}>Contato</NavLink>
          </div>

          <a
            href="#planos"
            className="cut-btn hidden bg-fire px-7 py-3 font-display text-xl tracking-[.15em] text-white transition hover:-translate-y-1 hover:bg-fire2 md:inline-flex"
          >
            Começar Agora
          </a>

          <button
            className="grid h-11 w-11 place-items-center border border-fire/30 text-fire lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-6 grid gap-5 border-t border-fire/10 pt-6 lg:hidden">
            <NavLink id="programas" active={activeSection} onClick={closeMenu}>Programas</NavLink>
            <NavLink id="planos" active={activeSection} onClick={closeMenu}>Planos</NavLink>
            <NavLink id="depoimentos" active={activeSection} onClick={closeMenu}>Depoimentos</NavLink>
            <NavLink id="contato" active={activeSection} onClick={closeMenu}>Contato</NavLink>
          </div>
        )}
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,61,0,.16),transparent_60%)]" />
        <div className="hero-grid absolute inset-0" />

        <div className="absolute right-0 top-0 hidden h-full w-[45%] items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 to-dark [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(255,61,0,.35),transparent_60%)]" />
          <div className="relative grid h-[430px] w-[430px] place-items-center rounded-full border border-fire/20 bg-fire/5 shadow-fireStrong">
            <div className="absolute inset-8 rounded-full border border-fire/20" />
            <Dumbbell size={190} strokeWidth={1.15} className="rotate-[-18deg] text-fire/60" />
          </div>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_.72fr]">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-4 text-sm font-bold uppercase tracking-[.35em] text-fire">
              <span className="h-[2px] w-11 bg-fire" />
              Treinamento de Elite
            </p>

            <h1 className="font-display text-[5rem] leading-[.86] tracking-[.04em] md:text-[8rem] lg:text-[9rem]">
              Quebre
              <br />
              <span className="outline-text">Seus</span>
              <br />
              Limites
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              Programas de treino personalizados para quem quer resultados reais.
              Sem desculpas, só evolução.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#planos"
                className="cut-btn inline-flex items-center gap-3 bg-fire px-10 py-4 font-display text-2xl tracking-[.12em] text-white transition hover:-translate-y-1 hover:bg-fire2"
              >
                Quero Começar <ArrowRight size={20} />
              </a>
              <a
                href="#programas"
                className="inline-flex items-center border border-white/20 px-10 py-4 font-display text-2xl tracking-[.12em] text-white transition hover:border-fire hover:text-fire"
              >
                Ver Programas
              </a>
            </div>
          </div>

          <div className="relative z-10 grid gap-7 self-end lg:justify-items-end">
            {benefits.map(({ value, label, Icon }) => (
              <div key={label} className="group flex items-center gap-4 lg:flex-row-reverse">
                <div className="grid h-12 w-12 place-items-center border border-fire/20 bg-fire/10 text-fire transition group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <div className="lg:text-right">
                  <p className="font-display text-5xl leading-none text-fire">{value}</p>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-zinc-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programas" className="mx-auto max-w-7xl px-6 py-24 md:px-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[.35em] text-fire">O que oferecemos</p>
        <h2 className="mb-16 font-display text-6xl leading-[.92] tracking-[.04em] md:text-7xl">
          Programas
          <br />
          Para Cada Objetivo
        </h2>

        <div className="grid gap-[2px] md:grid-cols-3">
          {programs.map(({ number, title, description, tag, Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden bg-grayFit p-10 transition duration-300 hover:-translate-y-2 hover:shadow-fire"
            >
              <span className="absolute right-8 top-5 font-display text-8xl leading-none text-white/[.04] transition group-hover:text-fire/10">
                {number}
              </span>
              <div className="mb-7 grid h-16 w-16 place-items-center border border-fire/25 bg-fire/10 text-fire transition group-hover:scale-110">
                <Icon size={34} />
              </div>
              <h3 className="font-display text-4xl tracking-[.06em]">{title}</h3>
              <p className="mt-3 leading-7 text-zinc-500">{description}</p>
              <span className="mt-7 inline-block bg-fire/10 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-fire">
                {tag}
              </span>
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-fire transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </section>

      <section id="planos" className="bg-dark2 px-6 py-24 md:px-14">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[.35em] text-fire">Nossos planos</p>
          <h2 className="font-display text-6xl leading-[.92] tracking-[.04em] md:text-7xl">
            Escolha seu
            <br />
            Plano de Treino
          </h2>

          <div className="mt-16 grid gap-[2px] md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative p-10 transition duration-300 ${
                  plan.featured
                    ? "z-10 scale-[1.03] bg-fire text-white shadow-fireStrong"
                    : "bg-grayFit hover:-translate-y-2 hover:shadow-fire"
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-8 top-8 rounded-full bg-white px-4 py-1 text-xs font-black uppercase tracking-[.18em] text-fire">
                    Mais escolhido
                  </span>
                )}
                <p className={`font-display text-2xl tracking-[.18em] ${plan.featured ? "text-white/70" : "text-zinc-500"}`}>
                  {plan.name}
                </p>
                <div className="mt-4 font-display text-7xl tracking-[.04em]">R${plan.price}</div>
                <p className={`mt-1 text-sm ${plan.featured ? "text-white/75" : "text-zinc-500"}`}>{plan.period}</p>

                <ul className="my-10 space-y-0">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 border-b py-3 text-sm ${
                        plan.featured ? "border-white/15 text-white/90" : "border-white/10 text-zinc-300"
                      }`}
                    >
                      <Check size={18} className={plan.featured ? "text-white" : "text-fire"} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsappLink(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    fetch("/api/lead", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ plan: plan.name }),
                    }).catch(() => {});
                  }}
                  className={`block w-full py-4 text-center font-display text-xl tracking-[.18em] transition ${
                    plan.featured
                      ? "bg-white text-fire hover:bg-dark hover:text-white"
                      : "border border-fire text-fire hover:bg-fire hover:text-white"
                  }`}
                >
                  {plan.button}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="mx-auto max-w-7xl px-6 py-24 md:px-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[.35em] text-fire">Resultados reais</p>
        <h2 className="font-display text-6xl leading-[.92] tracking-[.04em] md:text-7xl">
          Quem treina
          <br />
          Com a gente
        </h2>

        <div className="mt-16 grid gap-[2px] md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="bg-grayFit p-10 transition hover:-translate-y-2 hover:shadow-fire">
              <div className="mb-6 flex gap-2 text-fire">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p className="mb-8 text-lg italic leading-8 text-zinc-300">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-fire to-fire2 font-display text-xl">
                  {item.initials}
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contato" className="border-t border-fire/10 bg-[#050505] px-6 py-20 md:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/5 pb-14 lg:grid-cols-[1.2fr_.8fr_.8fr_.9fr]">
            <div>
              <Logo />
              <p className="mt-5 max-w-xs leading-7 text-zinc-600">
                Transformando corpos e mentalidades desde 2017. Resultados reais para pessoas reais.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-12 w-12 place-items-center border border-fire/20 text-fire transition hover:-translate-y-1 hover:bg-fire hover:text-white"
                  aria-label="Instagram RocketFit"
                >
                  <Instagram />
                </a>
                <a
                  href={getWhatsappLink("Atendimento")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-12 w-12 place-items-center border border-fire/20 text-fire transition hover:-translate-y-1 hover:bg-fire hover:text-white"
                  aria-label="WhatsApp RocketFit"
                >
                  <MessageCircle />
                </a>
                <a
                  href={`mailto:${companyEmail}`}
                  className="grid h-12 w-12 place-items-center border border-fire/20 text-fire transition hover:-translate-y-1 hover:bg-fire hover:text-white"
                  aria-label="E-mail RocketFit"
                >
                  <Mail />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-6 font-display text-2xl tracking-[.15em] text-fire">Programas</h4>
              <ul className="space-y-3 text-zinc-600">
                <li><a className="hover:text-fire" href="#programas">Força & Potência</a></li>
                <li><a className="hover:text-fire" href="#programas">Cardio Extremo</a></li>
                <li><a className="hover:text-fire" href="#programas">Transformação 12 Semanas</a></li>
                <li><a className="hover:text-fire" href="#planos">Personal Online</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-display text-2xl tracking-[.15em] text-fire">Empresa</h4>
              <ul className="space-y-3 text-zinc-600">
                <li><a className="hover:text-fire" href="#programas">Sobre Nós</a></li>
                <li><a className="hover:text-fire" href="#depoimentos">Resultados</a></li>
                <li><a className="hover:text-fire" href="#planos">Planos</a></li>
                <li><a className="hover:text-fire" href="#contato">Afiliados</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-display text-2xl tracking-[.15em] text-fire">Contato</h4>
              <ul className="space-y-4 text-zinc-500">
                <li>
                  <a href={`mailto:${companyEmail}`} className="flex items-center gap-3 hover:text-fire">
                    <Mail size={18} /> {companyEmail}
                  </a>
                </li>
                <li>
                  <a href={getWhatsappLink("Atendimento")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-fire">
                    <Phone size={18} /> (11) 99999-9999
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} /> São Paulo - SP
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-8 text-sm text-zinc-700 md:flex-row">
            <p>© 2024 RocketFit. Todos os direitos reservados.</p>
            <p>Política de Privacidade · Termos de Uso</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
