import { NextPage } from 'next'

interface Props {
  videoId: string
}

const YoutubeEmbed: NextPage<Props> = ({
  videoId,
}) => {
  return (
    <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YoutubeEmbed