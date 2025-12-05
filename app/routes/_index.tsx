import type { MetaFunction } from '@remix-run/node';
import * as Tooltip from '@radix-ui/react-tooltip';

export const meta: MetaFunction = () => [
  { title: 'joinville.dev — Comunidade de devs em Joinville' }
];

const WHATSAPP_LINK = 'https://chat.whatsapp.com/LvLJ7PIuu7U9VgXGynxqQa';

export default function IndexRoute() {
  return (
    <main className="flex-1 relative min-h-screen overflow-hidden">
      {/* Ícones flutuantes animados */}
      <FloatingIcons />

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Header com logo e redes sociais */}
        <header className="w-full max-w-6xl mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center justify-between mb-8 sm:mb-10 md:mb-12">
            <div className="text-[10px] sm:text-xs md:text-sm px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
              1ª Edição • 2026
            </div>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://x.com/joinvilledev"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-zinc-400 hover:text-foreground transition-colors"
                aria-label="X/Twitter"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://x.com/joinvilledev"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-zinc-400 hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Logo principal */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground px-2 break-words">
              joinville.dev
            </h1>
          </div>
        </header>

        {/* Conteúdo central */}
        <div className="flex-1 w-full max-w-6xl mx-auto">
          {/* Headline principal */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 sm:mb-8 md:mb-10 leading-tight sm:leading-snug">
              Maior comunidade de devs{' '}
              <span className="text-primary block sm:inline">em Joinville</span>!
            </h2>
          </div>

          {/* Cards de eventos */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2">
            <EventCardLarge
              title="nodejs.joinville.dev"
              description="Meetup focado em Node.js, back-end moderno e boas práticas para projetos reais."
              status="em breve"
            />
            <EventCardLarge
              title="fullstackin.joinville.dev"
              description="Meetup focado em melhores práticas de desenvolvimento fullstack em qualquer framework ou linguagem."
              status="em breve"
            />
          </div>

          {/* Informações e CTA */}
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 px-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 md:gap-8 lg:gap-12 text-xs sm:text-sm md:text-base text-zinc-400">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Em breve</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Joinville, SC</span>
              </div>
            </div>

            <Tooltip.Provider delayDuration={120}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-medium text-primary-foreground shadow-soft shadow-primary/30 transition-transform duration-150 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto max-w-sm sm:max-w-none"
                  >
                    <span className="whitespace-nowrap">Entrar na comunidade no WhatsApp</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="top"
                    align="center"
                    sideOffset={10}
                    className="rounded-xl bg-zinc-800 border border-zinc-600 px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs text-zinc-100 shadow-2xl z-50 max-w-[85vw] sm:max-w-none"
                  >
                    Link direto pro grupo. Sem spam, só dev de Joinville.
                    <Tooltip.Arrow className="fill-zinc-800" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 w-full max-w-6xl mx-auto pt-6 sm:pt-8 md:pt-10 border-t border-border/60 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs text-zinc-500 px-2">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
            <a
              href="#"
              className="underline underline-offset-4 decoration-zinc-700 hover:decoration-primary transition-colors"
            >
              Código de Conduta
            </a>
            <span className="underline underline-offset-4 decoration-zinc-700 break-all sm:break-normal">
              contato@joinville.dev
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}

function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* React Icon */}
      <div
        className="absolute top-16 sm:top-20 left-2 sm:left-4 md:left-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 opacity-5 sm:opacity-10 md:opacity-20 animate-float"
        style={{ animationDelay: '0s', animationDuration: '6s' }}
      >
        <img
          src="https://frontin.floripa.br/assets/img/header-react.png"
          alt="React"
          className="w-full h-full object-contain"
        />
      </div>

      {/* JavaScript Icon */}
      <div
        className="absolute top-32 sm:top-40 right-2 sm:right-4 md:right-20 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 opacity-5 sm:opacity-10 md:opacity-20 animate-float"
        style={{ animationDelay: '1s', animationDuration: '8s' }}
      >
        <img
          src="https://frontin.floripa.br/assets/img/header-js.png"
          alt="JavaScript"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Python Icon */}
      <div
        className="absolute bottom-24 sm:bottom-32 left-2 sm:left-4 md:left-16 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 opacity-5 sm:opacity-10 md:opacity-20 animate-float"
        style={{ animationDelay: '2s', animationDuration: '7s' }}
      >
        <img
          src="https://images.icon-icons.com/2415/PNG/512/python_original_logo_icon_146381.png"
          alt="Python"
          className="w-full h-full object-contain"
        />
      </div>

      {/* React Icon (segunda posição) - oculto em mobile */}
      <div
        className="absolute top-1/2 right-2 sm:right-4 md:right-12 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-18 lg:h-18 opacity-5 sm:opacity-8 md:opacity-15 animate-float hidden sm:block"
        style={{ animationDelay: '3s', animationDuration: '9s' }}
      >
        <img
          src="https://frontin.floripa.br/assets/img/header-react.png"
          alt="React"
          className="w-full h-full object-contain"
        />
      </div>

      {/* JavaScript Icon (segunda posição) - oculto em mobile */}
      <div
        className="absolute bottom-16 sm:bottom-20 right-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 opacity-5 sm:opacity-8 md:opacity-15 animate-float hidden sm:block"
        style={{ animationDelay: '4s', animationDuration: '6.5s' }}
      >
        <img
          src="https://frontin.floripa.br/assets/img/header-js.png"
          alt="JavaScript"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Python Icon (segunda posição) - oculto em mobile */}
      <div
        className="absolute top-1/3 left-1/4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-18 lg:h-18 opacity-5 sm:opacity-8 md:opacity-15 animate-float hidden sm:block"
        style={{ animationDelay: '5s', animationDuration: '7.5s' }}
      >
        <img
          src="https://images.icon-icons.com/2415/PNG/512/python_original_logo_icon_146381.png"
          alt="Python"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

interface EventCardLargeProps {
  title: string;
  description: string;
  status: string;
}

function EventCardLarge({ title, description, status }: EventCardLargeProps) {
  return (
    <div className="rounded-2xl sm:rounded-3xl border border-border bg-muted/60 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4 hover:bg-muted/80 transition-colors">
      <div className="flex items-start justify-between gap-2 sm:gap-3 md:gap-4">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground leading-tight flex-1 min-w-0">
          {title}
        </h3>
        <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.12em] sm:tracking-[0.15em] text-zinc-400 whitespace-nowrap flex-shrink-0">
          {status}
        </span>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed flex-1 font-medium">
        {description}
      </p>
    </div>
  );
}


