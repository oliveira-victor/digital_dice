import Header from "./containers/Header"
import Hero from "./containers/Hero"
import Highlights from "./containers/Highlights"
import InitialBanner from "./containers/IntroBanner"
import GlobalStyle, { Container, ContentWrapper } from "./styles"

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Hero />
        <ContentWrapper>
          <InitialBanner />
          <Highlights />
        </ContentWrapper>
      </Container>
    </>
  )
}

export default App
