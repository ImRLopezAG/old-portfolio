import { useTranslation } from 'react-i18next'
import { useRepo } from '../../hooks/useRepo'
import { DevProfile } from './base'
import { ProjectButton, ProjectsFolder, Skeleton } from './base/utils'

export const Projects = (): JSX.Element => {
  const { repo, loading } = useRepo()
  const { t } = useTranslation()
  return (
    <div className='side c-grid'>
      <div className='side-left left'>
        <div className='folder'>
          <ProjectButton />
          <div className='all-pro'>
            <div className='project hidden'>
              {loading
                ? (
                  <div className='pt-56 px-24'>
                    <Skeleton />
                  </div>
                  )
                : (
                    repo.map((project, index) => {
                      const { id, name, html_url } = project
                      return (
                        <ProjectsFolder
                          key={id}
                          name={name}
                          id={id}
                          url={html_url}
                        />
                      )
                    })
                  )}
            </div>
          </div>
        </div>
      </div>
      <div className='side-right right'>
        <DevProfile refer={t('Projects')} />
      </div>
    </div>
  )
}
