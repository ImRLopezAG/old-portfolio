export const Skills = ({ src, name, desc }) => {
  return (
    <div className="skill-card">
      <div className="skill-img">
        <img src={src} alt={name} loading="lazy" />
      </div>
      <div className="skill-body">
        <div className="skill-info">
          <h1 className="skill-name">{name}</h1>
        </div>
        <div className="options">
          <p className="skill-desc">Angel Lopez</p>
          <img src="./assets/icons/settings.svg" alt="settings" />
        </div>
      </div>
    </div>
  )
}
