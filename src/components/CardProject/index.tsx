import { GithubLogo } from 'phosphor-react'
import { Container } from './styles'

export function CardProject() {
  return (
    <Container>
      <header>
        <GithubLogo size={32} />
        <span>Rick and Morty</span>
      </header>

      <span className="description">
        Project created with target to study and improve my knowledges. Home
        page design inspired by Rick And Morty Concept Page and consuming The
        Rick and Morty API.
      </span>

      <div className="details">
        <span className="language">Typescript</span>
        <span className="size">1,232 KB</span>
      </div>
    </Container>
  )
}
