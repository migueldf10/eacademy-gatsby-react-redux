import React from "react"
import styled from "styled-components"

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  color: green;
`
export const Container = styled.section`
  grid-column: LS / RS 1;
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`
type videoProps = {
  url: string
}
export function VideoEmbed(props: videoProps) {
  const { url } = props
  const embedUrl = `http://www.youtube.com/embed/${
    url.split("=")[1]
  }?autoplay=1`
  return (
    <iframe
      id="ytplayer"
      width="600"
      height="360"
      style={{ maxWidth: "100%", height: "auto" }}
      src={embedUrl}
      frameBorder="0"
    />
  )
}
