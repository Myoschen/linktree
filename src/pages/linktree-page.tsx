import { useLayoutEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { decode } from 'js-base64'

import Linktree from '@/components/linktree'

function LinktreePage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const data = searchParams.get('data')

  useLayoutEffect(() => {
    if (!data) {
      navigate('/')
    }
  }, [data])

  return <Linktree data={JSON.parse(decode(data!))} />
}
export default LinktreePage
