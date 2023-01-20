import { useFetch } from '../../hooks/useFetch'
import { MenuCard, Skeleton } from './base/utils'

export const Menu = () => {
  const { repo, loading } = useFetch()
  return (
    <div className="menu-grid">
      {
        loading
          ? (
              <>
                <Skeleton/>
              </>
            )
          : (
              repo.map((project) => {
                const { name, description, id, language } = project
                return (
                  <MenuCard
                    key={id}
                    name={name}
                    description={description}
                    language={language}
                  />
                )
              })
            )
      }
    </div>
  )
}
