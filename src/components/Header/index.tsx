import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderContainer } from "./styled"
const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div>
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
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
