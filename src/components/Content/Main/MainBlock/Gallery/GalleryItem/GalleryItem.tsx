import React from 'react'
import styles from './GalleryItem.module.scss'

export const GalleryItem = ({
  image,
  altImage,
}: {
  image: string
  altImage: string
}) => {
  const { container } = styles
  return (
    <div className={container}>
      <img src={image} alt={altImage} />
    </div>
  )
}
