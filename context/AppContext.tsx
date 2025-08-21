import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { translations } from '../locales/translations'

export interface AppContextType {
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
    try {
      const savedLang = localStorage.getItem('language') || 'ar'
      const savedTheme = localStorage.getItem('theme') || 'light'
      
      setLang(savedLang)
      setTheme(savedTheme)
      
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } catch (error) {
      console.warn('localStorage not available:', error)
      // Use default values if localStorage fails
      setLang('ar')
      setTheme('light')
    }
  }, [])

  const changeLang = (newLang: string) => {
    setLang(newLang)
    try {
      localStorage.setItem('language', newLang)
    } catch (error) {
      console.warn('Failed to save language preference:', error)
    }
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr'
  }

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme)
    try {
      localStorage.setItem('theme', newTheme)
    } catch (error) {
      console.warn('Failed to save theme preference:', error)
    }
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const t = useCallback((key: string) => {
    const keys = key.split('.')
    let value: any = translations[lang as keyof typeof translations]
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = value[k]
      } else {
        return key // Return the key itself if path is invalid
      }
    }
    return typeof value === 'string' ? value : key
  }, [lang])

  return (
    <AppContext.Provider value={{ lang, theme, changeLang, changeTheme, t }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
} as AppContextType