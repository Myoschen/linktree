import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className={'mx-auto max-w-5xl px-4 lg:px-0'}>
      <Outlet />
    </div>
  )
}
