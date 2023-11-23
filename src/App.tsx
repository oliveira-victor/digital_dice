import GlobalStyle, { Container, ContentWrapper } from "./styles"
import Headroom from 'react-headroom'
import { ThemeProvider } from "styled-components"
import { useState } from "react"

/* import PhoneMenu from "./components/PhoneMenu" */
import Footer from "./containers/Footer"
import GamesSection from "./containers/GamesSection"
import Header from "./containers/Header"
import Hero from "./containers/Hero"
import Highlights from "./containers/Highlights"
import InitialBanner from "./containers/IntroBanner"
import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"
import { Provider } from "react-redux"
import { store } from "./store"
import AddCartMsg from "./components/AddCartMsg"

export type Game = {
  id: number
  title: string
  previousPrice: number
  currentPrince: number
  genre: string[]
  thumbnail: string
  highlight: boolean
}

function App() {

/*   const [games, setGames] = useState<Game[]>([]) */

  /* 'http://localhost:4000/products' */
/*   https://github.com/oliveira-victor/servidor_estaticos/blob/main/digital-dice_server/db.json */

  const [themeIsDark, setThemeIsDark] = useState(false)

  const switchTheme = () => {
    setThemeIsDark(!themeIsDark)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeIsDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Container>
          <Headroom>
            <Header switchTheme={switchTheme} themeIsDark={themeIsDark} />
          </Headroom>
          {/* <PhoneMenu /> */}
          <Hero />
          <ContentWrapper>
            <AddCartMsg />
            <InitialBanner />
            {/* <Highlights /> */}
            <GamesSection />
          </ContentWrapper>
          <Footer />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default App
