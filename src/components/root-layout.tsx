import { Outlet } from 'react-router-dom'

import ThemeProvider from '@/stores/theme'

export default function RootLayout() {
  return (
    <ThemeProvider>
      <div className={'mx-auto max-w-5xl px-4 lg:px-0'}>
        <Outlet />
      </div>
    </ThemeProvider>
  )
}
