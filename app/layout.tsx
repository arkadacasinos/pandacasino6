import type { ReactNode } from 'react'
import '@fontsource-variable/inter'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="dark bg-[#0a0a0c]">
      <head>
        <title>Panda Casino официальный сайт | Панда Казино рабочее зеркало играть онлайн</title>
        <meta
          name="description"
          content="Panda Casino официальный сайт и рабочее зеркало для игры онлайн. Вход в Панда Казино, быстрые выплаты, слоты, бонус до 225% + 1500 FS на первый депозит. Играйте в Panda Casino прямо сейчас!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pandacasino6.vercel.app/" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Panda Casino" />
        <meta property="og:title" content="Panda Casino официальный сайт | Панда Казино рабочее зеркало играть" />
        <meta
          property="og:description"
          content="Официальный сайт Panda Casino и рабочее зеркало. Быстрый вход в Панда Казино, лицензионные слоты, бонус 225% и моментальный вывод средств."
        />
        <meta property="og:url" content="https://pandacasino6.vercel.app/" />
        <meta property="og:image" content="https://pandacasino6.vercel.app/hero-panda.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Panda Casino официальный сайт | Панда Казино зеркало" />
        <meta
          name="twitter:description"
          content="Panda Casino онлайн: рабочее зеркало, слоты, бонусы и быстрые выплаты на официальном сайте Панда Казино."
        />
        <meta name="theme-color" content="#0a0a0c" />
      </head>
      <body className="min-h-screen bg-[#0a0a0c] text-[#f1f1f4] antialiased selection:bg-[#ffb03a] selection:text-[#0a0a0c]">
        {children}
      </body>
    </html>
  )
}
