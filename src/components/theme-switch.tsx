import { useContext } from 'react'
import { IconMoon, IconSun } from '@tabler/icons-react'

import { cn } from '@/lib/utils'
import { ThemeContext } from '@/stores/theme'

interface ThemeSwitchProps {
  className?: string
}

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const { theme, setTheme } = useContext(ThemeContext)
  const isDark = theme === 'dark'

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  return (
    <button className={cn(className)} onClick={toggleTheme}>
      {isDark ? <IconMoon size={20} /> : <IconSun size={20} />}
    </button>
  )
}
