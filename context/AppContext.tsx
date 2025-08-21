import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations } from '../locales/translations'

interface AppContextType {
  lang: string;
  theme: string;
  changeLang: (newLang: string) => void;
  changeTheme: (newTheme: string) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState('ar')
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // استرجاع الإعدادات المحفوظة
    const savedLang = localStorage.getItem('language') || 'ar'
    const savedTheme = localStorage.getItem('theme') || 'light'
    
    setLang(savedLang)
    setTheme(savedTheme)
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const changeLang = (newLang: string) => {
    setLang(newLang)
    localStorage.setItem('language', newLang)
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr'
  }

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const t = (key: string) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <AppContext.Provider value={{ lang, theme, changeLang, changeTheme, t }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext) as AppContextType