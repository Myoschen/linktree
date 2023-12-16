import { useState } from 'react'
import { IconShape } from '@tabler/icons-react'
import { encode } from 'js-base64'

import { Links, Profile, SocialLinks } from '@/components/form'
import Linktree from '@/components/linktree'
import { FormProvider, useFormContext } from '@/stores/form'

function Forms() {
  const { formData, setFormData } = useFormContext()

  const publish = () => {
    const url = `${window.location.origin}/linktree?data=${encode(
      JSON.stringify({ ...formData, email: `mailto:${formData.email}` })
    )}`
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard')
    })
  }

  const resetForm = () =>
    setFormData({
      name: '',
      about: '',
      photo: '',
      facebook: '',
      instagram: '',
      twitter: '',
      youtube: '',
      twitch: '',
      email: '',
      github: '',
      linkedin: '',
      links: [],
    })

  return (
    <div className={'space-y-6'}>
      <Profile />
      <SocialLinks />
      <Links />
      <div className={'mt-4 flex items-center gap-x-4'}>
        <button
          className={'rounded bg-emerald-500 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700'}
          type={'button'}
          onClick={publish}
        >
          {'Publish'}
        </button>
        <button
          className={'rounded bg-emerald-500 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700'}
          type={'button'}
          onClick={resetForm}
        >
          {'Reset'}
        </button>
      </div>
    </div>
  )
}

function Preview() {
  const { formData } = useFormContext()

  return (
    <div className={'border p-8'}>
      <Linktree data={formData} />
    </div>
  )
}

function CreationPage() {
  const [isPreview, setIsPreview] = useState(false)

  return (
    <FormProvider>
      <main className={'w-full py-4'}>
        <div className={'flex items-center justify-between'}>
          <h1 className={'flex items-center gap-x-2 text-xl font-bold uppercase tracking-wide'}>
            <IconShape size={24} />
            <span className={'select-none'}>{'creation'}</span>
          </h1>
          <div className={'flex items-center justify-around gap-x-4'}>
            <button
              className={'text-sm font-medium underline-offset-2 hover:text-emerald-600 hover:underline'}
              type={'button'}
              onClick={() => setIsPreview(false)}
            >
              {'Form'}
            </button>
            <button
              className={'text-sm font-medium underline-offset-2 hover:text-emerald-600 hover:underline'}
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

export default CreationPage
