import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useSelector, useDispatch } from "react-redux"
import Styled from "./styled"
import { login } from "../../utils/auth"
import { Button } from "../Ui"
import { getUser } from "../../state/session/selectors"
import getLocales from "../../utils/locales"
import { getUiState } from "../../state/ui/selectors"
import { showCart } from "../../state/ui/actions"
import { getCart } from "../../state/commerce/selectors"

const Header = () => {
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
  const uiState = useSelector(getUiState)
  const cart = useSelector(getCart)
  const dispatch = useDispatch()

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <Link to="/">Shop</Link>
        {!uiState.displayCart && cart[0] && cart[0].id && (
          <a onClick={() => dispatch(showCart())}>Cart</a>
        )}
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
