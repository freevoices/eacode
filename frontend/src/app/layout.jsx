import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Secretos.pro | Mensajes anonimos cerca tuyo',
  description: 'Comparte historias, ideas, pasiones y preguntas con personas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <GoogleAnalytics />
      <body className={inter.className}>
        <Navigation />

        <div className="bg-gray-100" data-theme="light">
            {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}