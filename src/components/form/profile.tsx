import { useContext } from 'react'
import { IconUserCircle } from '@tabler/icons-react'

import { FormContext } from '@/stores/form'

export default function Profile() {
  const { formData, setFormData } = useContext(FormContext)

  return (
    <div className={'flex flex-col gap-y-4'}>
      <div className={'flex items-center'}>
        <IconUserCircle className={'mr-2'} />
        <h2 className={'text-lg font-semibold tracking-wide'}>{'Profile'}</h2>
      </div>
      <div className={'space-y-6 rounded-lg border p-6 shadow-sm'}>
        <div className={'flex flex-col gap-y-1'}>
          <label className={'block text-sm font-medium text-gray-700'} htmlFor={'name'}>
            {'Name'}
          </label>
          <input
            id={'name'}
            className={'block w-full rounded-lg border-gray-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm'}
            type={'text'}
            placeholder={'Your name'}
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>
        <div className={'flex flex-col gap-y-1'}>
          <label className={'block text-sm font-medium text-gray-700'} htmlFor={'about'}>
            {'About'}
          </label>
          <textarea
            id={'about'}
            className={'block w-full rounded-lg border-gray-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm'}
            placeholder={'I am a developer.'}
            value={formData.about}
            onChange={e => setFormData(prev => ({ ...prev, about: e.target.value }))}
          />
        </div>
        <div className={'flex flex-col gap-y-1'}>
          <label className={'block text-sm font-medium text-gray-700'} htmlFor={'photo'}>
            {'Photo URL'}
          </label>
          <input
            id={'photo'}
            className={'block w-full rounded-lg border-gray-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm'}
            type={'text'}
            placeholder={'https://i.imgur.com/...'}
            value={formData.photo}
            onChange={e => setFormData(prev => ({ ...prev, photo: e.target.value }))}
          />
        </div>
      </div>
    </div>
  )
}
