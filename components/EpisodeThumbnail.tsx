import * as React from "react"
import Link from "next/link"

import { Episode } from "../interfaces"

type ThumbnailProps = {
  epId: string
  isActive: boolean
}

const EpisodeThumbnail: React.FunctionComponent<ThumbnailProps> = ({
  epId,
  isActive
}) => {
  const episode: Episode = require(`../episodes/${epId}.json`)
  const epNum = epId.match(/\d+/g)?.join("")
  const imageClass = isActive
    ? "image-thumbnail image-thumbnail-active"
    : "image-thumbnail bigly"
  const containerClass = isActive ? "thumbnail thumbnail-active" : "thumbnail"
  const button = () => (
    <button aria-role={`Go to Episode ${epNum}`}>
      <img className={imageClass} src={`${epId}.png`} alt={`Episode ${epNum} thumbnail`}/>
    </button>
  )
  return (
    <div className={containerClass}>
      {isActive ? button() : <Link href={`/${episode.id}`}>{button()}</Link>}
      <div className="thumbnail-text">
        <h4>
          Episode {epNum}: {episode.title}
        </h4>
        {isActive || <p>{episode.teaserText}</p>}
      </div>
    </div>
  )
}

export default EpisodeThumbnail
