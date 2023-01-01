import { useEffect, useState } from 'react'

import { fetchRepos } from '../Api/github'

export const useFetch = () => {
  const [repo, setRepo] = useState([])
  const [loading, setLoading] = useState(true)

  const getRepos = async () => {
    const repos = await fetchRepos()
    setRepo(repos)
    setLoading(false)
  }
  useEffect(() => {
    getRepos()
  }, [])

  return { repo, loading }
}