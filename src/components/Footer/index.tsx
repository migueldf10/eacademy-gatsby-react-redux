import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styled from "./styled"
import Hero from "../Ui/Hero"

const Footer = () => (
  <Styled.Wrapper>
    <Styled.Container>
      <span>
        An open source project that you can find{" "}
        <a href={`https://github.com/migueldf10/eacademy-gatsby-react-redux0`}>
          here
        </a>
      </span>
    </Styled.Container>
  </Styled.Wrapper>
)

export default Footer
