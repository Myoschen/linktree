export type Link = {
  label: string
  url: string
}

export type Linktree = {
  name: string
  about: string
  email: string
  photo: string
  socialLinks: {
    facebook: string
    instagram: string
    x: string
    youtube: string
    twitch: string
    github: string
    linkedin: string
  }
  links: Link[]
}
