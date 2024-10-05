import { NextPage } from 'next'

interface Props {
  videoId: string
}

const YoutubeEmbed: NextPage<Props> = ({
  videoId,
}) => {
  return (
    <div className="relative pt-[56.25%] overflow-hidden w-full h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YoutubeEmbed