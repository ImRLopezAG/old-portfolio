import { Contact } from './'
export const Social = () => {
  interface Social {
    name: string
    icon: string
    link: string
  }

  const social: Social[] = [
    {
      name: 'linkedin',
      icon: 'bi bi-linkedin',
      link: 'https://www.linkedin.com/in/angel-gabriel-lopez',
    },
    {
      name: 'twitter',
      icon: 'bi bi-twitter',
      link: 'https://twitter.com/ImR_Lopez',
    },
    {
      name: 'instagram',
      icon: 'bi bi-instagram',
      link: 'https://www.instagram.com/imr_lopez.ag',
    },
    {
      name: 'cv',
      icon: 'bi bi-file-earmark-person',
      link: './assets/docs/cv.pdf',
    },
    {
      name: 'github',
      icon: 'bi bi-github',
      link: 'https://github.com/ImRLopezAG',
    },
  ]

  return (
    <div className="social">
      {social.map((social) => {
        const { name, icon, link } = social
        return (
          <Contact key={Math.random()} name={name} icon={icon} link={link} />
        )
      })}
    </div>
  )
}
