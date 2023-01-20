const API = 'https://api.github.com/users/ImRLopezAG/repos'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  language: string
}

export const fetchRepos = async () => {
  const data = await fetch(API)
    .then((response) => response.json())
    .then((data) => {
      return data.map(({ id, name, description, html_url, language }: Repo) => ({
        id,
        name,
        description,
        html_url,
        language,
      }))
    })

  return data
}
