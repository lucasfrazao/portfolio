import { useEffect, useState } from 'react'
import { userService } from '../../services/getUserInfo'
import { IResponseRepository } from '../../utils/props'
import { CardProject } from '../CardProject'
import { Container, ListProjects } from './styles'

export function Work() {
  const [repos, setRepos] = useState<IResponseRepository[]>([])

  useEffect(() => {
    async function getCourses() {
      try {
        const response = await userService.get({
          user: 'lucasfrazao'
        })
        const repos = response.data
        setRepos(repos)
      } catch (error) {
        console.log('error', error)
      }
    }
    getCourses()
  }, [])

  return (
    <Container>
      <header>
        <span className="title">- my works</span>
        <h2>Featured Portfolios</h2>
      </header>

      <ListProjects>
        {repos?.map(repo => (
          <CardProject
            key={repo.id}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            size={repo.size}
          />
        ))}
      </ListProjects>
    </Container>
  )
}
