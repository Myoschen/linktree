import { type ChangeEvent, useContext } from 'react'
import { IconLink, IconPlus, IconX } from '@tabler/icons-react'

import { FormContext } from '@/stores/form'

export default function Links() {
  const { formData, setFormData } = useContext(FormContext)

  const addLink = () =>
    setFormData(prev => ({
      ...prev,
      links: [...prev.links, { label: '', url: '' }],
    }))

  const changeLabel = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newLinks = [...formData.links]
    newLinks[index].label = e.target.value
    setFormData(prev => ({ ...prev, links: newLinks }))
  }

  const changeURL = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newLinks = [...formData.links]
    newLinks[index].url = e.target.value
    setFormData(prev => ({ ...prev, links: newLinks }))
  }

  const removeLink = (index: number) => () => {
    const newLinks = [...formData.links]
    newLinks.splice(index, 1)
    setFormData(prev => ({ ...prev, links: newLinks }))
  }

  return (
    <div className={'flex flex-col gap-y-4'}>
      <div className={'flex items-center'}>
        <IconLink />
        <h2 className={'ml-1 text-lg font-semibold tracking-wide'}>{'Links'}</h2>
      </div>
      <div className={'space-y-6 rounded-lg border p-6 shadow-sm'}>
        {formData.links.map((link, index) => (
          <div key={index} className={'relative grid gap-8 rounded-lg border p-6 shadow-sm md:grid-cols-2'}>
            <button
              className={'absolute right-2 top-2'}
              type={'button'}
              onClick={removeLink(index)}
            >
              <IconX size={20} />
            </button>
            <div className={'flex flex-col gap-y-1'}>
              <label className={'block text-sm font-medium'} htmlFor={`label-${index}`}>
                {'Label'}
              </label>
              <input
                id={`label-${index}`}
                className={'block w-full rounded-lg shadow-sm focus:ring-2 sm:text-sm'}
                type={'text'}
                placeholder={'Label'}
                value={link.label}
                onChange={changeLabel(index)}
              />
            </div>
            <div className={'flex flex-col gap-y-1'}>
              <label className={'block text-sm font-medium'} htmlFor={`url-${index}`}>
                {'URL'}
              </label>
              <input
                id={`url-${index}`}
                className={'block w-full rounded-lg shadow-sm focus:ring-2 sm:text-sm'}
                type={'text'}
                placeholder={'URL'}
                value={link.url}
                onChange={changeURL(index)}
              />
            </div>
          </div>
        ))}
        <button
          className={'flex w-full items-center justify-center rounded-lg border py-2 transition-opacity hover:opacity-50'}
          type={'button'}
          onClick={addLink}
        >
          <IconPlus />
        </button>
      </div>
    </div>
  )
}
