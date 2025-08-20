import { useState, useEffect } from 'react'

export default function ThemeLanguageSelector({ 
  currentLang, 
  onLanguageChange,
  currentTheme,
  onThemeChange 
}) {
  const languages = [
    { code: 'ar', name: 'العربية' },
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' }
  ]

  return (
    <div className="flex items-center space-x-4 rtl:space-x-reverse">
      <select
        value={currentLang}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      <button
        onClick={() => onThemeChange(currentTheme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {currentTheme === 'dark' ? '🌞' : '🌙'}
      </button>
    </div>
  )
}