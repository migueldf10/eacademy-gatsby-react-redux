import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Styled from "./styled"
import { login } from "../../utils/auth"
import { Button } from "../Ui"
import { getUser } from "../../state/session/selectors"
import { useSelector } from "react-redux"
import getLocales from "../../utils/locales"
const Header = props => {
  const user = useSelector(getUser)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <Link to="/">Shop</Link>
        <Styled.Navigation>
          {user.nickname ? (
            <Link to="/account">{getLocales("ui.myAccount")}</Link>
          ) : (
            <Button.ContrastPrimary onClick={() => login()}>
              {getLocales("ui.login")}
            </Button.ContrastPrimary>
          )}
        </Styled.Navigation>
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default Header
