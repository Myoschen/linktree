import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/components/root-layout'
import CreationPage from '@/pages/creation'
import LinktreePage from '@/pages/linktree'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <CreationPage />,
      },
      {
        path: 'linktree',
        element: <LinktreePage />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <div className={'grid min-h-screen w-full place-items-center text-4xl font-bold'}>
        {'404 | Not Found'}
      </div>
    ),
  },
])

export { router }
