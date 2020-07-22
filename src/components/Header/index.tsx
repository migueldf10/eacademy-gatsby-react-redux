import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderContainer, HeaderWrapper } from "./styled"
import { logout } from "../../utils/auth"
import { Button } from "../Ui/Button"
const Header = ({ siteTitle }) => (
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
        <Button as={Link} to="/account">
          Login
        </Button>
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
