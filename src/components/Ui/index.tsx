import React from "react"
import styled from "styled-components"
import mixins from "../../theme/mixins"
import Buttons from "./Button"
import Heros from "./Hero"
import Filters from "./Filter"
import VideoPlayer from "./VideoPlayer"
import Forms from './Form'
export const Container = styled.section`
  grid-column: LS / RS 1;
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`

export const Button = Buttons
export const Hero = Heros
export const Filter = Filters
export const VideoEmbed = VideoPlayer
export const Form = Forms
