import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header"
import Footer from "../Footer"
import { AppContainer, CheckoutContainer } from "./styled"
import "./normalize.css"
import { DataLayer } from "../../models/DataLayer"
import Cart from "../Cart"
import { useSelector, useDispatch } from "react-redux"
import { getCart, getActiveCheckout } from "../../state/commerce/selectors"

declare global {
  interface Window {
    dataLayer: DataLayer
  }
}

const finishOrder = () => {
  useDispatch
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
  const activeCheckout = useSelector(getActiveCheckout)

  if (activeCheckout) {
    return (
      <AppContainer>
        <CheckoutContainer>
          <form>
            <input />
            <input />
            <input />
            <button onClick={finishOrder}>Finish checkout</button>
          </form>
        </CheckoutContainer>
      </AppContainer>
    )
  }

  return (
    <AppContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Cart />
      {children}
      <Footer />
    </AppContainer>
  )
}

export default Layout
