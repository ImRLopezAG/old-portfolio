import { AboutMe, DevProfile } from './base'

export const Profile = ({ size = 'container flex-col items-center' }) => {
  return (
    <div className={size}>
      <section className="section">
        <AboutMe />
        <DevProfile />
      </section>
    </div>
  )
}
