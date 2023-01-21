import { useState } from 'react'
import { useTranslation } from 'react-i18next'
export const BottomMenu = () => {
  type language = 'en' | 'es'
  const { i18n } = useTranslation('en')

  const [lang, setLang] = useState<language>('en')

  const onChangeLanguage = (lang: language) => {
    if (lang === 'en') {
      setLang('es')
      i18n.changeLanguage('es')
    } else {
      setLang('en')
      i18n.changeLanguage('en')
    }
  }
  const flags = {
    en: './assets/icons/us.svg',
    es: './assets/icons/es.svg',
  }
  return (
    <>
      <footer className="bottom-menu select-none ">
        <div className="flex justify-start w-60 items-center">
          <div className="bg-blue-500 w-16 px-5">
            <img
              className="w-3 h-6 "
              src="./assets/icons/remote.svg"
              alt="remote icon"
            />
          </div>
          <div className="flex px-2 items-center">
            <img
              className="w-5 h-5 mr-1"
              src="./assets/icons/git.svg"
              alt="Git Icon"
            />
            <span className="px-1"> main* </span>
          </div>
        </div>
        <div className="flex justify-end w-8/12 items-center px-5">
          <button
            className="flex flex-row items-center space-x-1"
            onClick={() => onChangeLanguage(lang)}
          >
            <img
              className="w-4 h-5"
              src="./assets/icons/Github-Copilot.svg"
              alt="Git cat"
            />
            <span className="px-1 font-bold">ImRLopez</span>
            <img className="w-4 h-5 " src={flags[lang]} alt="Lang" />
            <span>{lang === 'en' ? 'En' : 'Es'}</span>
          </button>
        </div>
      </footer>
    </>
  )
}
