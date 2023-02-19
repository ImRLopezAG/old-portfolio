import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: {
      en: {
        translation: {
          AboutMe:
            'I am a charismatic person, somewhat nice😁, ⛹I like basketball🏀,sharing with my friends, the beach🏖️ and tranquility.',
          DevProfile:
            'Software developer, passionate about technology in general, I like to find new challenges in the world of programming, provide and receive knowledge from my surroundings.',
          Projects:
            'These are some projects in which I have worked both freelance and personally',
          Extensions:
            'These are the languages, framework, database or data administrator that I work'
        }
      },
      es: {
        translation: {
          AboutMe:
            'Soy una persona carismática, algo agradable😁, me gusta el baloncesto🏀, compartir con mis amigos, la playa🏖️ y la tranquilidad.',
          DevProfile:
            'Desarrollador de software, apasionado por la tecnología en general, me gusta encontrar nuevos retos en el mundo de la programación, brindar y recibir conocimiento de mi entorno.',
          Projects:
            'Estos son algunos proyectos en los que he trabajado tanto freelance como personalmente',
          Extensions:
            'Estos son los lenguajes, framework, base de datos o administrador de datos con los que trabajo'
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
