import { useRepo } from '../../hooks/useRepo'
import { MenuCard, Skeleton } from './base/utils'

export const Menu = (): JSX.Element => {
  const { repo, loading } = useRepo()
  return (
    <div className='menu-grid'>
      {loading
        ? (
          <Skeleton />
          )
        : (
            repo.map((project) => {
              const { name, description, id, language, topics, fork } = project
              return (
                <MenuCard
                  key={id}
                  name={name}
                  description={description}
                  language={language}
                  topics={topics}
                  fork={fork}
                />
              )
            })
          )}
    </div>
  )
}
