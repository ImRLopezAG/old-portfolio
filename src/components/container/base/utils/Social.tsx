import { useTranslation } from 'react-i18next'
import { Contact } from './'

export const Social: React.FC = () => {
  const { t } = useTranslation()
  interface Social {
    name: string
    icon: string
    link: string
  }

  const social: Social[] = [
    {
      name: 'linkedin',
      icon: 'bi bi-linkedin',
      link: 'https://www.linkedin.com/in/angel-gabriel-lopez'
    },
    {
      name: 'twitter',
      icon: 'bi bi-twitter',
      link: 'https://twitter.com/ImR_Lopez'
    },
    {
      name: 'instagram',
      icon: 'bi bi-instagram',
      link: 'https://www.instagram.com/imr_lopez.ag'
    },
    {
      name: 'cv',
      icon: 'bi bi-file-earmark-person',
      link: t('CV')
    },
    {
      name: 'github',
      icon: 'bi bi-github',
      link: 'https://github.com/ImRLopezAG'
    }
  ]

  return (
    <div className='social'>
      {social.map((social) => {
        const { icon, link } = social
        return (
          <Contact key={Math.random()} Contact={{ icon, link }} />
        )
      })}
    </div>
  )
}
