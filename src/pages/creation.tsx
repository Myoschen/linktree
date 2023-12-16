import { useContext, useState } from 'react'
import { encode } from 'js-base64'

import Logo from '@/assets/logo.png'
import Links from '@/components/form/links'
import Profile from '@/components/form/profile'
import SocialLinks from '@/components/form/social-links'
import Linktree from '@/components/linktree'
import FormProvider, { FormContext } from '@/stores/form'

export default function CreationPage() {
  const [isPreview, setIsPreview] = useState(false)

  return (
    <FormProvider>
      <main className={'w-full py-4'}>
        <div className={'flex items-center justify-between'}>
          <h1 className={'flex items-center gap-x-2'}>
            <img className={'aspect-square w-9 shadow-sm'} src={Logo} alt={'Logo'} />
            <span className={'text-xl font-medium tracking-wide'}>{'react-linktree'}</span>
          </h1>
          <div className={'flex items-center justify-around gap-x-4'}>
            <button
              className={'text-sm font-medium underline-offset-2 hover:text-zinc-600 hover:underline'}
              type={'button'}
              onClick={() => setIsPreview(false)}
            >
              {'Form'}
            </button>
            <button
              className={'text-sm font-medium underline-offset-2 hover:text-zinc-600 hover:underline'}
              type={'button'}
              onClick={() => setIsPreview(true)}
            >
              {'Preview'}
            </button>
          </div>
        </div>
        <div className={'mt-6'}>{isPreview ? <Preview /> : <Forms />}</div>
      </main>
    </FormProvider>
  )
}

function Forms() {
  const { formData, resetFormData } = useContext(FormContext)

  const publish = () => {
    const url = `${window.location.origin}/linktree?data=${encode(
      JSON.stringify({ ...formData, email: `mailto:${formData.email}` })
    )}`
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard')
    })
  }

  return (
    <div className={'flex flex-col gap-y-6'}>
      <Profile />
      <SocialLinks />
      <Links />
      <div className={'flex items-center gap-x-4'}>
        <button
          className={'flex-1 rounded-lg border border-zinc-700/30 bg-zinc-700/10 p-2 text-sm font-medium text-zinc-950 transition-opacity ease-out hover:opacity-75'}
          type={'button'}
          onClick={publish}
        >
          {'Publish'}
        </button>
        <button
          className={'flex-1 rounded-lg border border-zinc-700/30 bg-zinc-700/10 p-2 text-sm font-medium text-zinc-950 transition-opacity ease-out hover:opacity-75'}
          type={'button'}
          onClick={resetFormData}
        >
          {'Reset'}
        </button>
      </div>
    </div>
  )
}

function Preview() {
  const { formData } = useContext(FormContext)
  return (
    <div className={'rounded-lg border p-8 shadow-sm'}>
      <Linktree data={formData} />
    </div>
  )
}
