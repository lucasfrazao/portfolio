import { GithubLogo } from 'phosphor-react'
import { Container } from './styles'

interface CardProjectProps {
  name: string
  description?: string
  size?: number
  language?: string
}

export function CardProject({
  name,
  description,
  size,
  language
}: CardProjectProps) {
  return (
    <Container>
      <header>
        <GithubLogo size={32} />
        <span>{name}</span>
      </header>

      <span className="description">{description}</span>

      <div className="details">
        <span className="language">{language}</span>
        <span className="size">{size} KB</span>
      </div>
    </Container>
  )
}
