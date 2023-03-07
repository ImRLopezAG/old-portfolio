import { AboutMe, DevProfile } from './base'

export const Profile: React.FC = () => {
  return (
    <div className='container flex-col items-center'>
      <section className='section'>
        <AboutMe />
        <DevProfile />
      </section>
    </div>
  )
}
