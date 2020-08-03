import React from "react"
import styled from "styled-components"
import mixins from "../../theme/mixins"

type videoProps = {
  url: string
}

const VideoWrapper = styled.iframe`
  max-width: 100%;
  ${mixins.shadowed.transparent.large}
  @media (max-width: 400px) {
    height: 200px;
  }
`

function Youtube(props: videoProps) {
  const { url } = props
  const embedUrl = `https://www.youtube.com/embed/${
    url.split("=")[1]
  }?autoplay=1`

  return (
    <VideoWrapper
      id="ytplayer"
      width="600"
      height="360"
      src={embedUrl}
      frameBorder="0"
    />
  )
}
export default {
  Youtube,
}
