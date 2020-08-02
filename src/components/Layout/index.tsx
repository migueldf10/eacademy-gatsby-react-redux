import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header"
import Footer from "../Footer"
import { AppContainer } from "./styled"
import "./normalize.css"
import { DataLayer } from "../../models/DataLayer"
import Cart from "../Cart"
import { useSelector } from "react-redux"
import { getUiState } from "../../state/ui/selectors"
import { isAdmin } from "../../state/session/selectors"
import Checkout from "../Checkout"
import AdminBar from "../AdminBar"

declare global {
  interface Window {
    dataLayer: DataLayer
  }
}

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { children } = props
  const isActiveCheckout = useSelector(getUiState).activeCheckout
  const admin = useSelector(isAdmin)

  if (isActiveCheckout) {
    return <Checkout />
  }

  return (
    <AppContainer>
      <AdminBar />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Cart />
      {children}
      <Footer />
    </AppContainer>
  )
}

export default Layout
