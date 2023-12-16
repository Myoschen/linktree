import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/components/root-layout'
import CreationPage from '@/pages/creation'
import LinktreePage from '@/pages/linktree'
import NotFoundPage from '@/pages/not-found'

export const router = createBrowserRouter([
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
    element: <NotFoundPage />,
  },
])
