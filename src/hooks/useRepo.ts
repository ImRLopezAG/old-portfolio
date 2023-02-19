import { useEffect, useState } from 'react'

import { fetchRepos } from '../Api/github'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  fork: boolean
  topics: string[]
}
interface UseRepo {
  repo: Repo[]
  loading: boolean
}
export const useRepo = (): UseRepo => {
  const [repo, setRepo] = useState<Repo[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const getRepos = async (): Promise<void> => {
    const repos: Repo[] = await fetchRepos()
    setRepo(repos.sortRandom())
    repos.length >= 1 && setLoading(false)
  }
  useEffect(() => {
    getRepos()
  }, [])

  return { repo, loading }
}
