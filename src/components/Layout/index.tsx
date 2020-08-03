import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import { AppContainer } from "./styled"
import "./normalize.css"
import { DataLayer } from "../../models/DataLayer"
import Cart from "../Cart"
import { useSelector } from "react-redux"
import { getUiState } from "../../state/ui/selectors"
import Checkout from "../Checkout"
import AdminBar from "../AdminBar"
import { ThemeProvider } from "styled-components"
import themes from "../../theme"

declare global {
  interface Window {
    dataLayer: DataLayer
  }
}

const Layout = props => {
  const { children,template } = props
  const isActiveCheckout = useSelector(getUiState).activeCheckout
  const theme = "blue"

  if (isActiveCheckout) {
    return <Checkout />
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <Cart />
      <AppContainer>
        <AdminBar template={template}/>
        <Header />
        {children}
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default Layout
