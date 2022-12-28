import { Social } from './utils'

export const DevProfile = ({ Props }) => {
  return (
    <div className="dev-profile">
      <div className="profile">
        <div className="profile-img">
          <img src="./assets/img/profile.jpg" alt="Angel lopez" />
        </div>
        <div className="profile-info">
          <h1 className="full-name">Angel Gabriel Lopez</h1>
          <h2 className="stack">
            <div className="spin"></div>
            <span className="mx-2">Software Developer</span>
            <div className="spin"></div>
          </h2>
          <div className="mx-6">
            <p className="desc">
              Software developer, passionate about technology in general, I like
              to find new challenges in the world of programming, provide and
              receive knowledge from my surroundings.
            </p>
          </div>
          <Social />
        </div>
      </div>
    </div>
  )
}