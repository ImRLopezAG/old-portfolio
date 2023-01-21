import { useTranslation } from 'react-i18next'

export const AboutMe = () => {
  const { t } = useTranslation()
  const showAboutMe = () => {
    const aboutMe = document.querySelector('.about-container p') as HTMLElement
    aboutMe.classList.toggle('d-none')

    const btnImg = document.querySelector('#btn-img') as HTMLImageElement
    // change the icon
    btnImg.src = btnImg.src.includes('un')
      ? './assets/icons/lock.svg'
      : './assets/icons/unlock.svg'

    const btnText = document.querySelector('.about') as HTMLSpanElement
    btnText.innerText = btnText.innerText.includes('About.me')
      ? 'Hide'
      : 'About.me'
  }
  return (
    <div className="about-container mt-1">
      <button onClick={showAboutMe} className="about-me">
        <img id="btn-img" src="./assets/icons/lock.svg" alt="Lock Icon" />
        <span className="about">About.me</span>
      </button>
      <p className="d-none flex mx-2 mt-2  text-justify">{t('AboutMe')}</p>
    </div>
  )
}
