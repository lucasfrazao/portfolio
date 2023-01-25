import { Container } from './styles'

export function HeroCard() {
  return (
    <Container>
      <span>- My name is</span>
      <h1>Lucas Frazão</h1>
      <span className="description">
        I'm a Front End Engineer specializing to build solid and scalable
        applications. Currently I'm focusing on impacting users with more
        pleasant and accessible experiences in web applications.{' '}
      </span>
    </Container>
  )
}
