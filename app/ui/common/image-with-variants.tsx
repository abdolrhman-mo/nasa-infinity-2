import { useState } from 'react'

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
  className: string
  variants: {
    normal: { height: string }
    hovered: { height: string }
  }
}

const ImageWithVariants = ({ src, alt, width, height, className, variants }: ImageProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={isHovered ? variants.hovered.height : variants.normal.height}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}

export default ImageWithVariants
