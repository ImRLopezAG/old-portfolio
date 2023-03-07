import { useState } from 'react'
import { Skeleton } from './utils'

interface SkillsProps {
  src: string
  name: string
  desc: string
}

interface Props {
  Skill: SkillsProps
}

export const Skills: React.FC<Props> = ({ Skill }) => {
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
          src={Skill.src}
          alt='skill'
          onLoad={handleLoad.bind(this)}
          style={{ display: loading ? 'none' : 'block' }}
        />
      </div>
      <div className='skill-body'>
        <div className='skill-info'>
          <h1 className='skill-name'>{Skill.name}</h1>
        </div>
        <div className='options'>
          <p className='skill-desc'>Angel Lopez</p>
          <img src='./assets/icons/settings.svg' alt='settings' />
        </div>
      </div>
    </div>
  )
}
