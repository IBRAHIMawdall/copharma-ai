import Link from 'next/link'
import { useApp, AppContextType } from '../context/AppContext'
import ThemeLanguageSelector from './ThemeLanguageSelector'

export default function Navbar() {
  const app = useApp()

  if (!app) {
    return null; // Or a loading spinner, or a fallback UI
  }

  const { t } = app as AppContextType;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">CoPharma.ai</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <NavLink href="/">{t('nav.home')}</NavLink>
            <NavLink href="/services">{t('nav.services')}</NavLink>
            <NavLink href="/products">{t('nav.products')}</NavLink>
            <NavLink href="/blog">{t('nav.blog')}</NavLink>
            <NavLink href="/about">{t('nav.about')}</NavLink>
            <NavLink href="/contact">{t('nav.contact')}</NavLink>
          </div>

          <ThemeLanguageSelector 
            currentLang={app.lang}
            onLanguageChange={app.changeLang}
            currentTheme={app.theme}
            onThemeChange={app.changeTheme}
          />
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 tracking-wide transition duration-300"
    >
      {children}
    </Link>
  )
}
