import { type ChangeEvent, useContext, useId } from 'react'
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitch,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
  IconSocial,
} from '@tabler/icons-react'

import { FormContext } from '@/stores/form'

export default function SocialLinks() {
  const { formData, setFormData } = useContext(FormContext)

  return (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex items-center'}>
        <IconSocial className={'mr-2'} />
        <h2 className={'text-lg font-semibold tracking-wide'}>{'Social Links'}</h2>
      </div>
      <div className={'grid gap-8 rounded-lg border p-6 shadow-sm md:grid-cols-2'}>
        <IconInput
          icon={<IconBrandFacebook size={20} />}
          label={'Facebook'}
          value={formData.socialLinks.facebook}
          placeholder={'https://www.facebook.com/yourname'}
          onValueChange={e => setFormData(prev => ({ ...prev, socialLinks: { ...prev.socialLinks, facebook: e.target.value } }))}
        />
        <IconInput
          icon={<IconBrandInstagram size={20} />}
          label={'Instagram'}
          value={formData.socialLinks.instagram}
          placeholder={'https://www.instagram.com/yourname'}
          onValueChange={e => setFormData(prev => ({ ...prev, socialLinks: { ...prev.socialLinks, instagram: e.target.value } }))}
        />
        <IconInput
          icon={<IconBrandX size={20} />}
          label={'X'}
          value={formData.socialLinks.x}
          placeholder={'https://twitter.com/yourname'}
          onValueChange={e => setFormData(prev => ({ ...prev, socialLinks: { ...prev.socialLinks, x: e.target.value } }))}
        />
        <IconInput
          icon={<IconBrandYoutube size={20} />}
          label={'Youtube'}
          value={formData.socialLinks.youtube}
          placeholder={'https://www.youtube.com/yourname'}
          onValueChange={e => setFormData(prev => ({ ...prev, socialLinks: { ...prev.socialLinks, youtube: e.target.value } }))}
        />
        <IconInput
          icon={<IconBrandTwitch size={20} />}
          label={'Twitch'}
          value={formData.socialLinks.twitch}
          placeholder={'https://twitch.tv/yourname'}
          onValueChange={e => setFormData(prev => ({ ...prev, socialLinks: { ...prev.socialLinks, twitch: e.target.value } }))}
        />
        <IconInput
          icon={<IconMail size={20} />}
          label={'Email'}
          value={formData.email}
          placeholder={'yourname@example.com'}
          onValueChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
        <IconInput
          icon={<IconBrandGithub size={20} />}
          label={'Github'}
          value={formData.socialLinks.github}
          placeholder={'https://github.com/yourname'}
          onValueChange={e => setFormData(prev => ({ ...prev, socialLinks: { ...prev.socialLinks, github: e.target.value } }))}
        />
        <IconInput
          icon={<IconBrandLinkedin size={20} />}
          label={'LinkedIn'}
          value={formData.socialLinks.linkedin}
          placeholder={'https://www.linkedin.com/yourname'}
          onValueChange={e => setFormData(prev => ({ ...prev, socialLinks: { ...prev.socialLinks, linkedin: e.target.value } }))}
        />
      </div>
    </div>
  )
}

interface IconInputProps {
  icon: JSX.Element
  label: string
  value: string
  placeholder: string
  onValueChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function IconInput({ icon, label, value, placeholder, onValueChange }: IconInputProps) {
  const id = useId()

  return (
    <div className={'flex flex-col gap-y-1'}>
      <label className={'block text-sm font-medium text-gray-700'} htmlFor={id}>
        {label}
      </label>
      <div className={'flex rounded-lg shadow-sm'}>
        <span className={'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-2 text-gray-500'}>
          {icon}
        </span>
        <input
          id={id}
          className={'block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm'}
          type={'text'}
          placeholder={placeholder}
          value={value}
          onChange={onValueChange}
        />
      </div>
    </div>
  )
}
