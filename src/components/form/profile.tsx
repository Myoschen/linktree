import { IconUserCircle } from '@tabler/icons-react'

import { useFormContext } from '@/stores/form'

function Profile() {
  const { formData, setFormData } = useFormContext()
  const { name, about, photo } = formData

  return (
    <div>
      <div className={'flex items-center'}>
        <IconUserCircle />
        <h2 className={'ml-1 text-lg font-medium tracking-wide'}>{'Profile'}</h2>
      </div>
      <div className={'mt-4 space-y-6 border p-6'}>
        <div>
          <label className={'block text-sm text-gray-700'} htmlFor={'name'}>
            {'Name'}
          </label>
          <input
            id={'name'}
            className={'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm'}
            type={'text'}
            placeholder={'Your name'}
            value={name}
            onChange={e =>
              setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>
        <div>
          <label className={'block text-sm text-gray-700'} htmlFor={'about'}>
            {'About'}
          </label>
          <textarea
            id={'about'}
            className={'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm'}
            placeholder={'I am a developer.'}
            value={about}
            onChange={e =>
              setFormData(prev => ({ ...prev, about: e.target.value }))}
          />
        </div>
        <div>
          <label className={'block text-sm text-gray-700'} htmlFor={'photo'}>
            {'Photo URL'}
          </label>
          <input
            id={'photo'}
            className={'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm'}
            type={'text'}
            placeholder={'https://i.imgur.com/...'}
            value={photo}
            onChange={e =>
              setFormData(prev => ({ ...prev, photo: e.target.value }))}
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
