export const AboutMe = () => {
  const showAboutMe = () => {
    const aboutMe = document.querySelector('.about-container p')
    aboutMe.classList.toggle('d-none')

    const btnImg = document.querySelector('#btn-img')
    // change the icon
    btnImg.src = btnImg.src.includes('un')
      ? './assets/icons/lock.svg'
      : './assets/icons/unlock.svg'

    // change the text
    const btnText = document.querySelector('.about-me span')
    btnText.textContent = btnText.textContent.includes('About.me')
      ? 'Hide'
      : 'About.me'
  }
  return (
    <div className="about-container mt-1">
      <button onClick={showAboutMe} className="about-me">
        <img
          id="btn-img"
          src="./assets/icons/lock.svg"
          alt="Lock Icon"
        />
        <span>About.me</span>
      </button>
      <p className="d-none flex mx-2 mt-2  text-justify">
        I am a charismatic person, somewhat nice😁, ⛹I like basketball🏀,
        sharing with my friends, the beach🏖️ and tranquility.
      </p>
    </div>
  )
}
