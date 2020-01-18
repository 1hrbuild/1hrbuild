import * as React from "react"

import EpisodeThumbnail from "./EpisodeThumbnail"

const allEpisodes = require('../episodes/manifest.json')

type EpisodeBrowserProps = {
  activeEpId?: string
}
const EpisodeBrowser: React.FunctionComponent<EpisodeBrowserProps> = ({
  activeEpId
}) => {
  return (
    <section>
      {!!activeEpId && <h3>More episodes</h3>}
      <div className="thumbnail-container">
        {allEpisodes.map((epId: string) => (
          <EpisodeThumbnail key={epId} epId={epId} isActive={epId === activeEpId} />
        ))}
      </div>
    </section>
  )
}


export default EpisodeBrowser
