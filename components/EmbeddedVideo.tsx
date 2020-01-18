import * as React from "react"

type EmbeddedVideoProps = {
  youtubeLink: string
}
const EmbeddedVideo: React.FunctionComponent<EmbeddedVideoProps> = ({
  youtubeLink
}) => (
  <section className="iframe-wrapper">
    <iframe
      src={youtubeLink}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </section>
)

export default EmbeddedVideo

{
  /* "https://www.youtube.com/embed/4SwMKuGNBrs" */
}
