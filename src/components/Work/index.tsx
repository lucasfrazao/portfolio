import { CardProject } from '../CardProject'
import { Container, ListProjects } from './styles'

export function Work() {
  return (
    <Container>
      <header>
        <span className="title">- my works</span>
        <h2>Featured Portfolios</h2>
      </header>

      <ListProjects>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </ListProjects>
    </Container>
  )
}
