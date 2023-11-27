import GlobalStyle, { Container } from "./styles"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import Headroom from 'react-headroom'
import { store } from "./store"

import Footer from "./containers/Footer"
import Header from "./containers/Header"
import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"

import Home from "./pages/Home"
import Company from "./pages/Company"
import Login from "./pages/Login"
import CartPage from "./pages/CartPape"
import ScrollToTop from "./components/ScrollToTop"

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

  const [themeIsDark, setThemeIsDark] = useState(false)

  const switchTheme = () => {
    setThemeIsDark(!themeIsDark)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeIsDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <BrowserRouter>
        <ScrollToTop />
          <Container>
            <Headroom>
              <Header switchTheme={switchTheme} themeIsDark={themeIsDark} />
            </Headroom>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
