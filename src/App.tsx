import { Header } from './components/Header'
import { HeroCard } from './components/HeroCard'
import { Work } from './components/Work'

import { Container } from './styles'

function App() {
  return (
    <Container>
      <Header />
      <HeroCard />
      <Work />
    </Container>
  )
}

export default App
