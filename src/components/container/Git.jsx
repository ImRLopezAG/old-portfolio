import { GitRows } from './base/utils'

export const Git = () => {
  const generateRandomCommit = () => {
    const commit = Math.random().toString(36).substring(2, 15)
    return commit
  }
  const history = [
    {
      Desc: 'First Commit',
      Date: 'Dec 17 2002',
      Commit: generateRandomCommit(),
    },
    {
      Desc: 'Education - ITLA Dominican Republic',
      Date: 'Jan 2020 - Present',
      Commit: generateRandomCommit(),
    },
    {
      Desc: 'JOB - Villa Campa School of technology',
      Date: 'APR 2021 - Jan 2022',
      Commit: generateRandomCommit(),
    },
    {
      Desc: 'Personal Project - Registration System',
      Date: 'Sep 15 2022 - Sep 22 2022',
      Commit: generateRandomCommit(),
    },
    {
      Desc: 'Personal Project - BookShop System',
      Date: 'Sep 24 2022 - Oct 3 2022',
      Commit: generateRandomCommit(),
    },
    {
      Desc: 'Personal Project - Forget',
      Date: 'Dec 10 2022 - Dec 15 2022',
      Commit: generateRandomCommit(),
    },
    {
      Desc: 'Personal Project - Gif expert app',
      Date: 'Dec 17 2022 - Dec 22 2022',
      Commit: generateRandomCommit(),
    },
  ]

  return (
    <div className="git-table">
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>Graph</th>
            <th>Description</th>
            <th className='break'>Date</th>
            <th className='break'>Author</th>
            <th>Commit</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {history.map((item, index) => {
            const { Desc, Date, Commit } = item
            return (
              <GitRows
                key={index}
                desc={Desc}
                date={Date}
                commit={Commit}
                auth="Angel Lopez"
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
