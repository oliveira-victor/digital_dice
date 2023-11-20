import Header from "./containers/Header"
import Hero from "./containers/Hero"
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
        </ContentWrapper>
      </Container>
    </>
  )
}

export default App
