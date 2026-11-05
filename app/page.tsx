import Image from 'next/image'

const REF_URL = 'https://nymph-pahd4.com/adsrtcqlch'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0c] text-[#f1f1f4]">
      {/* Drawer menu CSS target and scrim */}
      <aside
        id="side-menu"
        className="fixed inset-y-0 left-0 z-50 flex w-72 -translate-x-full flex-col bg-[#111115] border-r border-[#1e1e24] p-5 transition-transform duration-200 target:translate-x-0"
        aria-label="Навигация Panda Casino"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#1e1e24]">
          <a href={REF_URL} className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#059669] to-[#10b981] text-lg font-black text-white">
              🐼
            </span>
            <span className="text-base font-extrabold tracking-tight text-white">
              PANDA <span className="text-[#ffb03a]">CASINO</span>
            </span>
          </a>
          <a
            href="#!"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1a1a20] text-sm text-[#9ca3af] hover:text-white"
            aria-label="Закрыть меню"
          >
            ✕
          </a>
        </div>

        <nav className="mt-5 flex flex-1 flex-col gap-1.5 text-sm">
          <a
            href={REF_URL}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-white bg-[#1a1a22] hover:bg-[#22222c]"
          >
            <span className="text-[#ffb03a]">🎰</span> Слоты и автоматы
          </a>
          <a
            href={REF_URL}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-[#c4c4cc] hover:bg-[#1a1a22] hover:text-white"
          >
            <span className="text-[#10b981]">🔥</span> Горячие игры
          </a>
          <a
            href={REF_URL}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-[#c4c4cc] hover:bg-[#1a1a22] hover:text-white"
          >
            <span className="text-[#3b82f6]">✨</span> Новинки недели
          </a>
          <a
            href={REF_URL}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-[#c4c4cc] hover:bg-[#1a1a22] hover:text-white"
          >
            <span className="text-[#a855f7]">🏆</span> Топ провайдеры
          </a>
          <a
            href={REF_URL}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-[#c4c4cc] hover:bg-[#1a1a22] hover:text-white"
          >
            <span className="text-[#eab308]">🎁</span> Бонусы и акции
          </a>
          <a
            href={REF_URL}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-[#c4c4cc] hover:bg-[#1a1a22] hover:text-white"
          >
            <span className="text-[#ec4899]">💎</span> VIP Программа
          </a>

          <div className="my-3 border-t border-[#1e1e24]" />

          <a
            href="#zerkalo"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-semibold text-[#8b8b99] hover:text-[#ffb03a]"
          >
            → Рабочее зеркало Панда Казино
          </a>
          <a
            href="#oficialniy-sayt"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-semibold text-[#8b8b99] hover:text-[#ffb03a]"
          >
            → Panda Casino официальный сайт
          </a>
          <a
            href="#igrat-online"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-semibold text-[#8b8b99] hover:text-[#ffb03a]"
          >
            → Панда Казино играть онлайн
          </a>
        </nav>

        <div className="pt-4 border-t border-[#1e1e24]">
          <a
            href={REF_URL}
            className="block w-full rounded-xl bg-[#ffb03a] py-3 text-center text-sm font-bold text-[#0c0c10] p9x1-glow-amber transition-transform active:scale-95"
          >
            Регистрация за 10 сек
          </a>
        </div>
      </aside>

      {/* Scrim backdrop */}
      <a
        href="#!"
        className="fixed inset-0 z-40 hidden bg-black/60 transition-opacity target:block [aside:target~&]:block"
        aria-label="Закрыть фон"
      />

      {/* Layout wrapper: desktop sidebar rail + main column */}
      <div className="flex min-h-screen w-full">
        {/* Desktop left icon rail (matching screenshot 2) */}
        <aside
          className="hidden md:flex w-16 shrink-0 flex-col items-center justify-between border-r border-[#1a1a20] bg-[#0c0c10] py-4"
          aria-label="Боковая панель"
        >
          <div className="flex flex-col items-center gap-4">
            <a
              href={REF_URL}
              className="group flex h-10 w-10 items-center justify-center rounded-xl bg-[#181820] text-lg text-white hover:bg-[#22222c] transition-colors"
              title="Panda Casino"
            >
              🐼
            </a>

            <div className="flex flex-col items-center gap-2 pt-2">
              <a
                href={REF_URL}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-[#8d8d9b] hover:bg-[#1a1a22] hover:text-[#ffb03a] transition-colors"
                title="Игры"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </a>
              <a
                href={REF_URL}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-[#8d8d9b] hover:bg-[#1a1a22] hover:text-[#ffb03a] transition-colors"
                title="Кошелек / Депозит"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                </svg>
              </a>
              <a
                href={REF_URL}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-[#8d8d9b] hover:bg-[#1a1a22] hover:text-[#ffb03a] transition-colors"
                title="Приложение / Скачать"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
              <a
                href={REF_URL}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-[#8d8d9b] hover:bg-[#1a1a22] hover:text-[#ffb03a] transition-colors"
                title="Турниры / VIP"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </a>
              <a
                href={REF_URL}
                className="relative flex h-10 w-10 items-center justify-center rounded-xl text-[#8d8d9b] hover:bg-[#1a1a22] hover:text-[#ffb03a] transition-colors"
                title="Бонусы и подарки"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="8" width="18" height="4" rx="1" />
                  <path d="M12 8v13" />
                  <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                  <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                </svg>
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#ef4444]" />
              </a>
              <a
                href={REF_URL}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-[#8d8d9b] hover:bg-[#1a1a22] hover:text-[#ffb03a] transition-colors"
                title="Магазин бонусов"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                  <path d="M2 7h20" />
                </svg>
              </a>
              <a
                href={REF_URL}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-[#8d8d9b] hover:bg-[#1a1a22] hover:text-[#ffb03a] transition-colors"
                title="Поддержка и новости"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <a
              href={REF_URL}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold text-[#8d8d9b] hover:bg-[#1a1a22] hover:text-white"
              title="777 Слоты"
            >
              777
            </a>
            <a
              href={REF_URL}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-[#ff5722] hover:bg-[#1a1a22]"
              title="Горячее"
            >
              🔥
            </a>
          </div>
        </aside>

        {/* Main Column */}
        <div className="flex flex-1 flex-col overflow-x-hidden">
          {/* Header (Screen 2 replicate) */}
          <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-[#1a1a20] bg-[#0c0c10] px-3 sm:px-6">
            <div className="flex items-center gap-3">
              {/* Mobile Burger (targets #side-menu) */}
              <a
                href="#side-menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#181820] text-lg text-white hover:bg-[#22222a] md:hidden"
                aria-label="Открыть меню Panda Casino"
              >
                ☰
              </a>

              {/* Logo on mobile */}
              <a href={REF_URL} className="flex items-center gap-2 md:hidden">
                <span className="text-xl">🐼</span>
                <span className="text-sm font-extrabold tracking-tight text-white">
                  PANDA <span className="text-[#ffb03a]">CASINO</span>
                </span>
              </a>

              {/* Search bar (exact match to screenshot 2) */}
              <a
                href={REF_URL}
                className="hidden sm:flex items-center gap-2.5 rounded-full bg-[#181820] px-4 py-2 text-xs text-[#8d8d9b] hover:text-[#d1d1dc] hover:bg-[#20202a] w-56 md:w-72 transition-colors"
              >
                <svg className="h-4 w-4 shrink-0 text-[#6f6f7d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span>Искать игры</span>
              </a>
            </div>

            {/* Auth action buttons (matches screenshot 2 top right) */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={REF_URL}
                className="rounded-xl bg-[#1e1e26] px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#282834] transition-colors"
              >
                Вход
              </a>
              <a
                href={REF_URL}
                className="rounded-xl bg-[#ffb03a] px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-[#0c0c10] p9x1-glow-amber transition-transform active:scale-95"
              >
                Регистрация
              </a>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 px-3 py-4 sm:px-6 sm:py-6 max-w-7xl w-full mx-auto">
            {/* FIRST SCREEN: HERO BANNER GRID (Matches Screenshot 2) */}
            <section aria-label="Бонусы и активности Panda Casino" className="grid grid-cols-1 gap-4 lg:grid-cols-12">
              {/* Primary Main Promo Banner (Emerald/Dark Panda Banner) */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c241b] via-[#091a13] to-[#0d1612] border border-[#163829] p-5 sm:p-7 lg:col-span-6 flex flex-col justify-between min-h-[290px] sm:min-h-[310px]">
                {/* Background decorative glow */}
                <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[#10b981]/20 blur-3xl" />
                <div className="pointer-events-none absolute left-10 -top-10 h-48 w-48 rounded-full bg-[#ffb03a]/10 blur-2xl" />

                <div className="relative z-10 max-w-[260px] sm:max-w-[290px]">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#d1d5db]">
                    БОНУС
                  </span>
                  <h1 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-white">
                    <span className="text-[#10b981]">ДО 225%</span>{' '}
                    <span className="text-white">+1500FS</span>
                  </h1>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-[#9ca3af]">
                    на первый депозит
                  </p>

                  <div className="mt-4 sm:mt-5">
                    <a
                      href={REF_URL}
                      className="inline-flex items-center justify-center rounded-xl bg-[#ffb03a] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#0c0c10] p9x1-glow-amber transition-transform active:scale-95"
                    >
                      Забрать бонус
                    </a>
                  </div>
                </div>

                {/* Panda character image from screenshot 2 */}
                <div className="absolute right-0 bottom-0 top-2 w-[180px] sm:w-[240px] pointer-events-none flex items-end justify-end">
                  <Image
                    src="/hero-panda.png"
                    alt="Panda Casino официальный сайт маскот панда с деньгами"
                    width={280}
                    height={280}
                    priority
                    className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                  />
                </div>

                {/* Payment method logos at banner bottom */}
                <div className="relative z-10 mt-6 flex flex-wrap items-center gap-3 pt-3 border-t border-[#1a382a]/60 text-[11px] font-bold text-[#9ca3af]">
                  <span className="flex items-center gap-1 text-[#22c55e]">
                    <span className="font-extrabold">✤</span> сбп
                  </span>
                  <span className="flex items-center gap-1 text-[#38bdf8]">
                    <span>✔</span> Pay
                  </span>
                  <span className="flex items-center font-extrabold tracking-wider text-[#22c55e]">
                    МИР
                  </span>
                  <span className="flex items-center gap-1 text-[#f87171]">
                    <span>▲</span> TRON
                  </span>
                  <span className="flex items-center gap-1 text-[#2dd4bf]">
                    <span>₮</span> tether
                  </span>
                </div>
              </div>

              {/* Side Card 1: Миссии */}
              <div className="relative overflow-hidden rounded-3xl bg-[#141418] border border-[#1f1f26] p-6 lg:col-span-3 flex flex-col items-center justify-center text-center min-h-[200px] lg:min-h-auto group hover:border-[#2f2f3d] transition-all">
                {/* Target concentric circles icon background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-15 transition-opacity">
                  <div className="h-44 w-44 rounded-full border-4 border-white/40 flex items-center justify-center">
                    <div className="h-32 w-32 rounded-full border-4 border-white/40 flex items-center justify-center">
                      <div className="h-20 w-20 rounded-full border-4 border-white/40 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-white/60" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <span className="text-4xl">🎯</span>
                  <h2 className="mt-3 text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white">
                    МИССИИ
                  </h2>
                  <p className="mt-1 text-xs text-[#8d8d9b]">
                    Ежедневные квесты и награды
                  </p>
                  <a
                    href={REF_URL}
                    className="mt-4 inline-block text-xs font-semibold text-[#ffb03a] hover:underline"
                  >
                    Открыть миссии →
                  </a>
                </div>
              </div>

              {/* Side Card 2: Магазин Бонусов */}
              <div className="relative overflow-hidden rounded-3xl bg-[#141418] border border-[#1f1f26] p-6 lg:col-span-3 flex flex-col items-center justify-center text-center min-h-[200px] lg:min-h-auto group hover:border-[#2f2f3d] transition-all">
                {/* Shopping bag silhouette background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-15 transition-opacity">
                  <div className="text-8xl">🛍️</div>
                </div>

                <div className="relative z-10">
                  <span className="text-4xl">🎁</span>
                  <h2 className="mt-3 text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white">
                    МАГАЗИН БОНУСОВ
                  </h2>
                  <p className="mt-1 text-xs text-[#8d8d9b]">
                    Обмен баллов на фриспины и кэш
                  </p>
                  <a
                    href={REF_URL}
                    className="mt-4 inline-block text-xs font-semibold text-[#ffb03a] hover:underline"
                  >
                    В магазин →
                  </a>
                </div>
              </div>
            </section>

            {/* LIVE WINNERS TICKER (Matches Screenshot 2 live payout strip) */}
            <section aria-label="Прямой эфир выигрышей в Panda Casino" className="mt-5">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8d8d9b] uppercase tracking-wider">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>Сейчас выигрывают в Panda Casino</span>
                </div>
                <a href={REF_URL} className="text-xs font-semibold text-[#ffb03a] hover:underline">
                  Все выигрыши →
                </a>
              </div>

              <div className="flex gap-2.5 overflow-x-auto pb-2 p9x1-hide-scrollbar">
                {[
                  { user: 'user***73', win: '1 442 ₽', slot: 'Wild Bounty', color: 'from-[#ea580c] to-[#f97316]' },
                  { user: 'user***53', win: '600 ₽', slot: 'Big Bass Vegas', color: 'from-[#0284c7] to-[#38bdf8]' },
                  { user: 'user***26', win: '480 ₽', slot: 'Big Bass Hold', color: 'from-[#15803d] to-[#22c55e]' },
                  { user: 'user***53', win: '750 ₽', slot: 'Big Bass Day', color: 'from-[#0369a1] to-[#0ea5e9]' },
                  { user: 'user***69', win: '4 392 ₽', slot: 'Big Bass Splash', color: 'from-[#166534] to-[#15803d]' },
                  { user: 'user***52', win: '963 ₽', slot: 'Big Apple Win', color: 'from-[#047857] to-[#10b981]' },
                  { user: 'user***31', win: '752 ₽', slot: '3 Magic Piggy', color: 'from-[#c026d3] to-[#e879f9]' },
                  { user: 'user***73', win: '1 692 ₽', slot: 'La Banquise', color: 'from-[#b91c1c] to-[#ef4444]' },
                  { user: 'елиз***та', win: '3 192 ₽', slot: 'Wild Bounty Show', color: 'from-[#d97706] to-[#f59e0b]' },
                  { user: 'влад***01', win: '2 850 ₽', slot: 'Wild Bandito', color: 'from-[#7c3aed] to-[#a855f7]' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={REF_URL}
                    className="flex shrink-0 items-center gap-2.5 rounded-xl border border-[#1f1f28] bg-[#121217] px-3 py-2 hover:border-[#ffb03a]/40 transition-colors"
                  >
                    <div className={`h-8 w-8 rounded-lg bg-gradient-to-tr ${item.color} flex items-center justify-center text-xs font-black text-white shadow-inner`}>
                      🎰
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-[#8d8d9b] leading-tight">{item.user}</span>
                      <span className="text-xs font-bold text-[#10b981] leading-tight">{item.win}</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* SEARCH + CATEGORY TABS (Matches Screenshot 2 bar below ticker) */}
            <section aria-label="Категории игр Panda Casino" className="mt-4">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={REF_URL}
                  className="flex items-center gap-2 rounded-xl bg-[#1a1a24] px-3.5 py-2 text-xs font-semibold text-white border border-[#262634] hover:bg-[#222230]"
                >
                  <span>🎰</span>
                  <span>Слоты</span>
                </a>
                <a
                  href={REF_URL}
                  className="flex items-center gap-2 rounded-xl bg-[#14141c] px-3.5 py-2 text-xs font-semibold text-[#a1a1aa] hover:text-white hover:bg-[#1a1a24]"
                >
                  <span>🔥</span>
                  <span>Горячие</span>
                </a>
                <a
                  href={REF_URL}
                  className="flex items-center gap-2 rounded-xl bg-[#14141c] px-3.5 py-2 text-xs font-semibold text-[#a1a1aa] hover:text-white hover:bg-[#1a1a24]"
                >
                  <span>✚</span>
                  <span>Новые</span>
                </a>
                <a
                  href={REF_URL}
                  className="flex items-center gap-2 rounded-xl bg-[#14141c] px-3.5 py-2 text-xs font-semibold text-[#a1a1aa] hover:text-white hover:bg-[#1a1a24]"
                >
                  <span>🌐</span>
                  <span>Топ</span>
                </a>
                <a
                  href={REF_URL}
                  className="flex items-center gap-2 rounded-xl bg-[#14141c] px-3.5 py-2 text-xs font-semibold text-[#a1a1aa] hover:text-white hover:bg-[#1a1a24]"
                >
                  <span>👾</span>
                  <span>Претенденты</span>
                </a>
                <a
                  href={REF_URL}
                  className="flex items-center gap-2 rounded-xl bg-[#14141c] px-3.5 py-2 text-xs font-semibold text-[#a1a1aa] hover:text-white hover:bg-[#1a1a24]"
                >
                  <span>🎁</span>
                  <span>Отыгрыш бонуса</span>
                </a>
                <a
                  href={REF_URL}
                  className="flex items-center gap-2 rounded-xl bg-[#14141c] px-3.5 py-2 text-xs font-semibold text-[#a1a1aa] hover:text-white hover:bg-[#1a1a24]"
                >
                  <span>⚡</span>
                  <span>Джекпот</span>
                </a>
                <a
                  href={REF_URL}
                  className="flex items-center gap-2 rounded-xl bg-[#14141c] px-3.5 py-2 text-xs font-semibold text-[#a1a1aa] hover:text-white hover:bg-[#1a1a24]"
                >
                  <span>♠</span>
                  <span>Лайв</span>
                </a>

                <a
                  href={REF_URL}
                  className="ml-auto hidden sm:flex items-center gap-2 rounded-xl bg-[#1e1e28] px-3.5 py-2 text-xs font-bold text-white hover:bg-[#282836]"
                >
                  <span>🛡️</span>
                  <span>Провайдеры</span>
                </a>
              </div>
            </section>

            {/* QUICK FEATURE CALLOUT (Registration banner) */}
            <section aria-label="Быстрый старт" className="mt-6 rounded-2xl bg-gradient-to-r from-[#171720] via-[#1a1a24] to-[#121218] border border-[#242432] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ffb03a]/15 text-2xl text-[#ffb03a]">
                  ⚡
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white">
                    Вход в Panda Casino за 10 секунд
                  </h3>
                  <p className="text-xs text-[#a1a1aa]">
                    Моментальное пополнение через СБП, банковские карты МИР и криптовалюты без комиссии
                  </p>
                </div>
              </div>
              <a
                href={REF_URL}
                className="shrink-0 w-full sm:w-auto text-center rounded-xl bg-[#ffb03a] px-6 py-2.5 text-xs sm:text-sm font-bold text-[#0c0c10] p9x1-glow-amber transition-transform active:scale-95"
              >
                Начать игру
              </a>
            </section>

            {/* SEO ARTICLE: 300-400 WORDS TARGET WITH ALL 13 KEYWORDS */}
            <article className="mt-10 rounded-3xl bg-[#0f0f14] border border-[#1a1a22] p-6 sm:p-9 text-[#d1d1dc] leading-relaxed shadow-2xl">
              <header className="border-b border-[#1e1e28] pb-5">
                <span className="inline-block rounded-full bg-[#ffb03a]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ffb03a]">
                  Официальный информационный портал
                </span>
                <h2 className="mt-2 text-xl sm:text-2xl font-black text-white">
                  Panda Casino официальный сайт и рабочее зеркало для игры онлайн
                </h2>
                <p className="mt-1 text-xs text-[#8d8d9b]">
                  Актуальная информация, вход в личный кабинет, бонусы и лицензионные игровые автоматы
                </p>
              </header>

              <div className="mt-6 space-y-6 text-sm sm:text-base leading-relaxed">
                {/* Section 1 */}
                <section id="oficialniy-sayt">
                  <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                    <span className="text-[#ffb03a]">✦</span>
                    Panda Casino официальный сайт: возможности и лицензионные игры
                  </h2>
                  <p className="mt-2.5 text-[#b4b4c2]">
                    <strong>Panda Casino официальный сайт</strong> представляет собой современную игровую платформу с сертифицированными слотами от ведущих мировых провайдеров. Каждый посетитель клуба <strong>Panda Casino</strong> получает доступ к тысячам автоматов с высоким показателем отдачи, регулярным турнирам с крупными призовыми фондами и щедрым бонусным пакетам. Надежный <strong>Panda Casino официальный</strong> портал гарантирует полную конфиденциальность персональных данных, безопасность платежей и моментальные выплаты выигранных средств на банковские карты и электронные кошельки.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="zerkalo">
                  <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                    <span className="text-[#10b981]">✦</span>
                    Panda Casino зеркало и рабочее зеркало Панда Казино на сегодня
                  </h2>
                  <p className="mt-2.5 text-[#b4b4c2]">
                    При ограничении доступа интернет-провайдерами всегда выручает официальное <strong>Panda Casino зеркало</strong>. Запуская проверенное <strong>панда казино зеркало рабочее</strong>, пользователи моментально попадают в свой привычный аккаунт с сохранением баланса, активных бонусов и статуса программы лояльности. Актуальное <strong>панда казино зеркало</strong> функционирует круглосуточно и обеспечивает бесперебойное соединение без необходимости настройки сторонних прокси или VPN-сервисов.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="igrat-online">
                  <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                    <span className="text-[#38bdf8]">✦</span>
                    Как в панда казино играть онлайн и получать бонусы
                  </h2>
                  <p className="mt-2.5 text-[#b4b4c2]">
                    Чтобы в <strong>панда казино играть</strong> на реальные деньги, достаточно пройти быструю регистрацию по номеру телефона или почте. Популярное <strong>панда казино онлайн</strong> поощряет новых игроков приветственным бонусом до 225% и 1500 бесплатных вращений на первый депозит. Выбирая в <strong>Panda Casino играть</strong> прямо сейчас, вы открываете классические барабанные слоты, настольную рулетку, блэкджек и динамичные лайв-трансляции с профессиональными крупье.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="panda-kazino-oficialniy">
                  <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                    <span className="text-[#a855f7]">✦</span>
                    Панда казино официальный сайт: регистрация и быстрый вывод
                  </h2>
                  <p className="mt-2.5 text-[#b4b4c2]">
                    Лицензированный <strong>панда казино официальный сайт</strong> создан для максимального удобства игроков из России и стран СНГ. Сервис <strong>панда казино официальный</strong> поддерживает моментальные пополнения через СБП, карты МИР и популярные криптовалюты. Заходите в клуб <strong>Panda Казино</strong> или авторизуйтесь через русскоязычный портал <strong>Панда Казино</strong>, чтобы получить ежедневный кэшбэк, участвовать в эксклюзивных миссиях и выводить выигрыши за считанные минуты.
                  </p>
                </section>

                {/* Key Benefits Grid inside SEO Block */}
                <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#1e1e28]">
                  <div className="rounded-xl bg-[#14141a] p-3.5 border border-[#1e1e26]">
                    <div className="text-xl">⚡</div>
                    <div className="mt-1 font-bold text-white text-xs">Выплаты до 15 минут</div>
                    <div className="text-[11px] text-[#8d8d9b]">СБП, карты МИР, крипта</div>
                  </div>
                  <div className="rounded-xl bg-[#14141a] p-3.5 border border-[#1e1e26]">
                    <div className="text-xl">🎁</div>
                    <div className="mt-1 font-bold text-white text-xs">Бонус до 225%</div>
                    <div className="text-[11px] text-[#8d8d9b]">+1500 фриспинов на старт</div>
                  </div>
                  <div className="rounded-xl bg-[#14141a] p-3.5 border border-[#1e1e26]">
                    <div className="text-xl">🔒</div>
                    <div className="mt-1 font-bold text-white text-xs">Рабочее зеркало 24/7</div>
                    <div className="text-[11px] text-[#8d8d9b]">Всегда доступный вход</div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <a
                    href={REF_URL}
                    className="inline-flex items-center justify-center rounded-xl bg-[#ffb03a] px-8 py-3 text-sm font-bold text-[#0c0c10] p9x1-glow-amber transition-transform active:scale-95"
                  >
                    Перейти на официальный сайт Panda Casino
                  </a>
                </div>
              </div>
            </article>
          </main>

          {/* FOOTER: Hashtags for SEO anchor navigation + Copyright */}
          <footer className="mt-12 border-t border-[#1a1a20] bg-[#0c0c10] px-4 py-8 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
              {/* Hashtag cloud from keyword list */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#8d8d9b]">
                  Быстрая навигация по ключевым разделам:
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <a href="#oficialniy-sayt" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #PandaCasino
                  </a>
                  <a href="#zerkalo" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #PandaCasinoЗеркало
                  </a>
                  <a href="#igrat-online" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #PandaCasinoИграть
                  </a>
                  <a href="#oficialniy-sayt" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #PandaCasinoОфициальный
                  </a>
                  <a href="#oficialniy-sayt" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #PandaCasinoОфициальныйСайт
                  </a>
                  <a href="#panda-kazino-oficialniy" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #PandaКазино
                  </a>
                  <a href="#panda-kazino-oficialniy" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #ПандаКазино
                  </a>
                  <a href="#zerkalo" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #ПандаКазиноЗеркало
                  </a>
                  <a href="#zerkalo" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #ПандаКазиноЗеркалоРабочее
                  </a>
                  <a href="#igrat-online" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #ПандаКазиноИграть
                  </a>
                  <a href="#igrat-online" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #ПандаКазиноОнлайн
                  </a>
                  <a href="#panda-kazino-oficialniy" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #ПандаКазиноОфициальный
                  </a>
                  <a href="#panda-kazino-oficialniy" className="rounded-lg bg-[#14141c] px-2.5 py-1 text-[#a1a1aa] hover:bg-[#1f1f2a] hover:text-[#ffb03a]">
                    #ПандаКазиноОфициальныйСайт
                  </a>
                </div>
              </div>

              {/* Disclaimer + Copyright */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1a1a22] pt-6 text-xs text-[#71717a]">
                <p>
                  © 2025-2026 Panda Casino (Панда Казино). Все права защищены. 18+ Играйте ответственно.
                </p>
                <div className="flex items-center gap-4">
                  <a href={REF_URL} className="hover:text-white transition-colors">Правила и условия</a>
                  <a href={REF_URL} className="hover:text-white transition-colors">Ответственная игра</a>
                  <a href={REF_URL} className="hover:text-white transition-colors">Поддержка 24/7</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Floating Action Button (Matches Screenshot 2 live support button) */}
      <a
        href={REF_URL}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#10b981] text-white shadow-lg hover:bg-[#059669] hover:scale-105 transition-all"
        title="Онлайн чат поддержки Panda Casino"
        aria-label="Онлайн чат поддержки"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </a>
    </div>
  )
}
