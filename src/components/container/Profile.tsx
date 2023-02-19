import { AboutMe, DevProfile } from './base'

export const Profile = (): JSX.Element => {
  return (
    <div className='container flex-col items-center'>
      <section className='section'>
        <AboutMe />
        <DevProfile refer='' />
      </section>
    </div>
  )
}
