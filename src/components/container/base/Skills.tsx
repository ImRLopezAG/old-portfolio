import { useState } from 'react'
import { Skeleton } from './utils'

interface SkillsProps {
  src: string
  name: string
  desc: string
}

export const Skills = ({ src, name, desc }: SkillsProps): JSX.Element => {
  const [loading, setLoading] = useState(true)

  const handleLoad = (): void => {
    setLoading(false)
  }

  return (
    <div className='skill-card'>
      {loading && (
        <div className='w-3/4'>
          <Skeleton />
        </div>
      )}
      <div className='skill-img'>
        <img
          src={src}
          alt='skill'
          onLoad={handleLoad.bind(this)}
          style={{ display: loading ? 'none' : 'block' }}
        />
      </div>
      <div className='skill-body'>
        <div className='skill-info'>
          <h1 className='skill-name'>{name}</h1>
        </div>
        <div className='options'>
          <p className='skill-desc'>Angel Lopez</p>
          <img src='./assets/icons/settings.svg' alt='settings' />
        </div>
      </div>
    </div>
  )
}
