import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styled from "./styled"
import { logout } from "../../utils/auth"
import { Button } from "../Ui"
import { getUser } from "../../state/session/selectors"
import { useSelector } from "react-redux"

const Header = ({ siteTitle }) => {
  const user = useSelector(getUser)
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>

        <Styled.Navigation>
          {user.nickname ? (
            <>
              <Link to="/account">Hey {user.nickname} </Link>
              <a
                href="#logout"
                onClick={e => {
                  logout()
                  e.preventDefault()
                }}
              >
                Log Out
              </a>
            </>
          ) : (
            <Button.ContrastPrimary as={Link} to="/account">
              Login
            </Button.ContrastPrimary>
          )}
        </Styled.Navigation>
      </Styled.Container>
    </Styled.Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
