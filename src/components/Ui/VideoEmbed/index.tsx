import React from "react"

type PropTypes = {
  url: string
}
export default function VideoEmbed(props: PropTypes) {
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
