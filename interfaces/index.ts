export type Technology = {
  id: string
  name: string
  link?: string
}

export type Links = {
  youtube: string
  github: string
}

export type Episode = {
  id: string
  title: string
  teaserText: string
  introText: string[]
  technologies: Technology[]
  links: Links
}
