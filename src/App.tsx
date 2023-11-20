import Header from "./containers/Header"
import Hero from "./containers/Hero"
import Highlights from "./containers/Highlights"
import InitialBanner from "./containers/IntroBanner"
import GlobalStyle, { Container, ContentWrapper } from "./styles"
import Headroom from 'react-headroom'

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Headroom>
          <Header />
        </Headroom>
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
