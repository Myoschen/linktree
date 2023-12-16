import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className={'mx-auto max-w-5xl px-4 font-inter lg:px-0'}>
      <Outlet />
    </div>
  )
}

export default RootLayout
