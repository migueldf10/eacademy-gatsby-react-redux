import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderContainer, HeaderWrapper } from "./styled"
import { logout } from "../../utils/auth"
import { Button } from "../Ui"
import { getUser } from "../../state/session/selectors"
import { useSelector } from "react-redux"

const Header = ({ siteTitle }) => {
  const user = useSelector(getUser)
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>

        <nav>
          {user.nickname ? (
            <h3>
              Hey {user.nickname}{" "}
              <a
                href="#logout"
                onClick={e => {
                  logout()
                  e.preventDefault()
                }}
              >
                Log Out
              </a>
            </h3>
          ) : (
            <Button as={Link} to="/account">
              Login
            </Button>
          )}
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
