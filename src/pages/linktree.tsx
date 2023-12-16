import { useLayoutEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { decode } from 'js-base64'

import Linktree from '@/components/linktree'

export default function LinktreePage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const data = searchParams.get('data')

  useLayoutEffect(() => {
    if (!data) {
      navigate('/')
    }
  }, [data, navigate])

  return <Linktree data={JSON.parse(decode(data!))} />
}
