interface MenuCardProps {
  name: string
  description?: string
  language?: string
  topics: string[]
  fork: boolean
}

interface Props {
  MenuCard: MenuCardProps
}

export const MenuCard: React.FC<Props> = ({ MenuCard }) => {
  const lang = MenuCard.language ?? 'Forked'
  const desc = MenuCard.description ?? 'No description'
  if (MenuCard.name.split('-').length > 1) {
    MenuCard.name = MenuCard.name.split('-').join(' ')
  }
  const topic = MenuCard.topics.join(', ')
  interface LngColor {
    [key: string]: string
  }

  const lngColor: LngColor = {
    JavaScript: 'text-yellow-400',
    TypeScript: 'text-blue-400',
    HTML: 'text-red-400',
    CSS: 'text-blue-400',
    Python: 'text-yellow-400',
    'C#': 'text-green-400',
    'C++': 'text-blue-400',
    C: 'text-blue-400',
    Forked: 'text-black',
    Handlebars: 'text-red-400'
  }
  return (
    <div className='card'>
      <div className='card-img'>
        <img src='./assets/icons/octocat.svg' alt='octocat' loading='lazy' />
      </div>
      <div className='card-body'>
        <h2 className='card-title'>{MenuCard.name}</h2>
        <div className={`${lngColor[lang]}`}>
          <h4 className='card-lang'>{lang}</h4>
        </div>
        <p className='card-desc'>{desc}</p>
        <p className='card-topic'>{topic}</p>
      </div>
    </div>
  )
}
