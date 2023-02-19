import { useTranslation } from 'react-i18next'
import { Social } from './utils'

interface DevProfileProps {
  refer: string
}

export const DevProfile = ({ refer }: DevProfileProps): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className='dev-profile'>
      <div className='profile'>
        <div className='profile-img'>
          <img src='./assets/img/profile.jpg' alt='Angel lopez' />
        </div>
        <div className='profile-info'>
          <h1 className='full-name'>Angel Gabriel Lopez</h1>
          <h2 className='stack'>
            <span className='mx-2'>Software Developer</span>
          </h2>
          <div className='mx-6'>
            <p className='desc'>{refer ?? t('DevProfile')}</p>
          </div>
          <Social />
        </div>
      </div>
    </div>
  )
}
