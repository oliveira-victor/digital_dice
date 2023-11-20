import Header from "./containers/Header"
import Hero from "./containers/Hero"
import GlobalStyle, { Container } from "./styles"

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Hero />
      </Container>
    </>
  )
}

export default App
