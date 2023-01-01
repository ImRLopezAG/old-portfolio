export const MenuCard = ({ name, description, language }) => {
  const lang = language || 'Forked'
  const desc = description || 'No description'
  if (name.split('-').length > 1) {
    name = name.split('-').join(' ')
  }

  const lngColor = {
    JavaScript: 'text-yellow-400',
    TypeScript: 'text-blue-400',
    HTML: 'text-red-400',
    CSS: 'text-blue-400',
    Python: 'text-yellow-400',
    'C#': 'text-green-400',
    'C++': 'text-blue-400',
    C: 'text-blue-400',
    Forked: 'text-black',
    Handlebars: 'text-red-400',
  }
  return (
    <div className="card">
      <div className="card-img">
        <img src="./assets/icons/octocat.svg" alt="octocat" loading="lazy" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className={`${lngColor[lang]}`}>
          <h4 className="card-lang">{lang}</h4>
        </div>
        <p className="card-desc">{desc}</p>
      </div>
    </div>
  )
}
