import GlobalStyle, { Container, ContentWrapper } from "./styles"
import Headroom from 'react-headroom'
import { ThemeProvider } from "styled-components"
import { useState } from "react"

import PhoneMenu from "./components/PhoneMenu"
import Footer from "./containers/Footer"
import GamesSection from "./containers/GamesSection"
import Header from "./containers/Header"
import Hero from "./containers/Hero"
import Highlights from "./containers/Highlights"
import InitialBanner from "./containers/IntroBanner"
import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"

function App() {

  const [themeIsDark, setThemeIsDark] = useState(false)

  return (
    <ThemeProvider theme={lightTheme}>
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
    </ThemeProvider>
  )
}

export default App
