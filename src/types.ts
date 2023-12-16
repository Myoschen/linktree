type Link = {
  label: string
  url: string
}

type LinktreeData = {
  name: string
  about: string
  photo: string
  facebook: string
  instagram: string
  twitter: string
  youtube: string
  twitch: string
  email: string
  github: string
  linkedin: string
  links: Link[]
}

export type { LinktreeData }
