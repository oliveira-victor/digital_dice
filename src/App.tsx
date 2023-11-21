import PhoneMenu from "./components/PhoneMenu"
import Footer from "./containers/Footer"
import GamesSection from "./containers/GamesSection"
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
        {/* <PhoneMenu /> */}
        <Hero />
        <ContentWrapper>
          <InitialBanner />
          <Highlights />
          <GamesSection />
        </ContentWrapper>
        <Footer />
      </Container>
    </>
  )
}

export default App
