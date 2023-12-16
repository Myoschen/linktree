import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitch,
  IconBrandX,
  IconBrandYoutube,
  IconExternalLink,
  IconLink,
  IconMail,
} from '@tabler/icons-react'
import Avatar from 'boring-avatars'

import type { Linktree } from '@/lib/types'

const iconMap: Record<string, JSX.Element> = {
  facebook: <IconBrandFacebook />,
  instagram: <IconBrandInstagram />,
  x: <IconBrandX />,
  youtube: <IconBrandYoutube />,
  twitch: <IconBrandTwitch />,
  github: <IconBrandGithub />,
  linkedin: <IconBrandLinkedin />,
  email: <IconMail />,
}

interface LinktreeProps {
  data: Linktree
}

export default function Linktree({ data }: LinktreeProps) {
  const socialLinks = Object
    .entries(data.socialLinks)
    .filter(([, v]) => v.length > 0)
    .map(([k, url]) => {
      const icon = iconMap[k] ?? <IconLink />
      return { icon, url }
    })

  console.log(socialLinks)

  return (
    <div className={'mx-auto h-full w-full max-w-sm space-y-6 p-4 pt-12'}>
      <div className={'text-center'}>
        {data.photo.length !== 0
          ? (
            <div className={'mx-auto aspect-square w-20 overflow-hidden rounded-full ring-4 ring-zinc-200'}>
              <img
                className={'h-full w-full object-cover'}
                src={data.photo}
                alt={'Avatar'}
              />
            </div>
            )
          : (
            <div className={'mx-auto aspect-square w-20 overflow-hidden rounded-full ring-4 ring-zinc-200'}>
              <Avatar size={80} name={data.name} variant={'beam'} />
            </div>
            )}
        <h1 className={'mt-4 text-2xl font-bold'}>{data.name}</h1>
        <p className={'mt-2 text-sm text-gray-600'}>{data.about}</p>
      </div>
      <div className={'flex flex-wrap items-center justify-center gap-x-2'}>
        {socialLinks.map((link, index) => (
          <span key={index} className={'p-1'}>
            <a href={link.url} target={'_blank'} rel={'noreferrer'}>
              {link.icon}
            </a>
          </span>
        )
        )}
      </div>
      <ul className={'space-y-2'}>
        {data.links.map(link => (
          <li key={link.url}>
            <a
              className={'flex items-center gap-x-4 rounded-lg border px-4 py-2 shadow-sm hover:bg-gray-50'}
              href={link.url}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <IconExternalLink size={20} />
              <span className={'text-sm'}>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
