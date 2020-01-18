import * as React from "react"
// import Link from 'next/link'
import Layout from "../components/Layout"
import { NextPage } from "next"
// import { Episode } from "../interfaces"
// import EpisodeThumbnail from "../components/EpisodeThumbnail"
import EpisodeBrowser from "../components/EpisodeBrowser"

// const allEpisodes = require('../episodes/manifest.json')

// const ThumbnailContainer: React.FunctionComponent = props => (
//   <section className="container-thumbail-container">{props.children}</section>
// )

const IndexPage: NextPage = () => {
  return (
    <Layout title="1hr build">
      <article>
        <section>
          Welcome to 1 Hour Build! I'm a professional coder who likes to build
          stuff for fun. Here you can see a collection of one hour projects I've
          designed and built. Each of them has a brief write-up and a video on
          Youtube. It's a fun challenge to try to complete a reasonably complex
          functioning piece of software within an hour.
        </section>
        <section>
          <EpisodeBrowser />
        </section>
      </article>
      {/* <ThumbnailContainer>
        {allEpisodes.map((epId: string) => (
          <EpisodeThumbnail
            key={epId}
            epId={epId}
            isActive={false}
          />
        ))}
      </ThumbnailContainer> */}
    </Layout>
  )
}

export default IndexPage
