import { Social } from './utils'

export const DevProfile = ({ refer }) => {
  const about = `Software developer, passionate about technology in general, I like
  to find new challenges in the world of programming, provide and
  receive knowledge from my surroundings.`
  return (
    <div className="dev-profile">
      <div className="profile">
        <div className="profile-img">
          <img src="./assets/img/profile.jpg" alt="Angel lopez" />
        </div>
        <div className="profile-info">
          <h1 className="full-name">Angel Gabriel Lopez</h1>
          <h2 className="stack">
            <span className="mx-2">Software Developer</span>
          </h2>
          <div className="mx-6">
            <p className="desc">{refer || about}</p>
          </div>
          <Social />
        </div>
      </div>
    </div>
  )
}
