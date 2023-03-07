import { GitRows } from './base/utils'

export const Git = (): JSX.Element => {
  const generateRandomCommit = (): string => {
    const commit = Math.random().toString(36).substring(2, 15)
    return commit
  }
  const history = [
    {
      desc: 'Born - First commit',
      date: 'Dec 17 2002',
      commit: generateRandomCommit()
    },
    {
      desc: 'Education - ITLA Dominican Republic',
      date: 'Jan 2021 - Present',
      commit: generateRandomCommit()
    },
    {
      desc: 'JOB - VillaCampa School of technology',
      date: 'APR 2021 - Jan 2022',
      commit: generateRandomCommit()
    },
    {
      desc: 'Personal Project - Registration System',
      date: 'Sep 15 2022 - Sep 22 2022',
      commit: generateRandomCommit()
    },
    {
      desc: 'Personal Project - BookShop System',
      date: 'Sep 24 2022 - Oct 3 2022',
      commit: generateRandomCommit()
    },
    {
      desc: 'Personal Project - Forget',
      date: 'Dec 10 2022 - Dec 15 2022',
      commit: generateRandomCommit()
    },
    {
      desc: 'Personal Project - Medical Manager',
      date: 'Jan 14 2023 - Jan 28 2023',
      commit: generateRandomCommit()
    },
    {
      desc: 'Personal Project - Social Network',
      date: 'Jan 29 2023 - Feb 18 2023',
      commit: generateRandomCommit()
    },
    {
      desc: 'Personal Project - Internet Banking',
      date: 'Feb 19 2023 - Mar 4 2023',
      commit: generateRandomCommit()
    }
  ]

  return (
    <div className='git-table'>
      <table className='table'>
        <thead className='table-header'>
          <tr>
            <th>Graph</th>
            <th>Description</th>
            <th>date</th>
            <th className='break'>Author</th>
            <th className='break'>commit</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          {history.map((item) => {
            const { desc, date, commit } = item
            return <GitRows key={Math.random()} Git={{ desc, date, commit }} />
          })}
        </tbody>
      </table>
    </div>
  )
}
