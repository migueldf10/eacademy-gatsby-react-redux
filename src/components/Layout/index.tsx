import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header"
import Footer from "../Footer"
import { AppContainer } from "./styled"
import "./normalize.css"
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

  return (
    <AppContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </AppContainer>
  )
}

export default Layout
