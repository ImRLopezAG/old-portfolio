import { Contact } from './'
export const Social = () => {
  const social = [
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
  ]

  return (
    <div className="social">
      {social.map((social, index) => {
        const { name, icon, link } = social
        return (
          <Contact key={name + index} name={name} icon={icon} link={link} />
        )
      })}
    </div>
  )
}
