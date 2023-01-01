import { sortRandom } from '../components/container/base/utils'
const API = 'https://api.github.com/users/ImRLopezAG/repos'

export const fetchRepos = async () => {
  const data = await fetch(API)
    .then((response) => response.json())
    .then((data) => {
      return data.map(({ id, name, description, html_url, language }) => ({
        id,
        name,
        description,
        html_url,
        language,
      }))
    })

  return data.sortRandom()
}
