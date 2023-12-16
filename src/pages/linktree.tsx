import { useLayoutEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { decode } from 'js-base64'

import Linktree from '@/components/linktree'
import ThemeSwitch from '@/components/theme-switch'

export default function LinktreePage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const data = searchParams.get('data')

  useLayoutEffect(() => {
    if (!data) {
      navigate('/')
    }
  }, [data, navigate])

  return (
    <>
      <Linktree data={JSON.parse(decode(data!))} />
      <ThemeSwitch className={'fixed right-4 top-4'} />
    </>
  )
}
