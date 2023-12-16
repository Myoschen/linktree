import { createContext, type Dispatch, type ReactNode, type SetStateAction, useEffect, useState } from 'react'

import type { Theme } from '@/lib/types'

type ThemeState = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeState>({
  theme: 'light',
  setTheme: () => {},
})

function getTheme() {
  const raw = localStorage.getItem('theme')
  return raw ? JSON.parse(raw) as Theme : 'light'
}

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getTheme)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
