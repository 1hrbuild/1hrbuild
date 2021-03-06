import * as React from "react"
import { NextPageContext } from "next"
import { Episode, Technology } from "../interfaces"

// import GlobalStyle from "./GlobalStyles"
import Layout from "../components/Layout"
import EmbeddedVideo from "../components/EmbeddedVideo"
import EpisodeBrowser from "../components/EpisodeBrowser"

function toTitleCase(s: string) {
  return s
    .charAt(0)
    .toLocaleUpperCase()
    .concat(s.slice(1))
}

type Props = {
  epId: string
  episode: Episode
  extraContent?: React.FunctionComponent
}

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    const { epId } = query
    const episode = require(`../episodes/${epId}.json`)
    return { epId, episode }
  }

  render() {
    const { epId, episode } = this.props
    const displayTitle = `${toTitleCase(epId)}:  ${episode.title}`
    return (
      <Layout title={displayTitle}>
        <article>
          <section>
            {episode.introText.map((paragraph: string, idx: number) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </section>
          <section>
            <h3>
              Tech:{" "}
              {episode.technologies.map((tech: Technology, idx: number) => (
                <React.Fragment key={idx}>
                  <a href={tech.link} key={idx} target="__blank">
                    {tech.name}
                  </a>
                  {idx === episode.technologies.length - 1 || " | "}
                </React.Fragment>
              ))}
              &nbsp;&nbsp;&nbsp;Code:{" "}
              <a href={episode.links.github} target="__blank">
                GitHub
              </a>
            </h3>
          </section>
          <EmbeddedVideo youtubeLink={episode.links.youtube} />
          <EpisodeBrowser activeEpId={epId} />
        </article>
      </Layout>
    )
  }
}

export default InitialPropsDetail
