import React from "react"

export default function VideoEmbed({ url: string }) {
  return (
    <iframe
      id="ytplayer"
      width="600"
      height="360"
      style={{ maxWidth: "100%", height: "auto" }}
      src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
      frameBorder="0"
    />
  )
}
