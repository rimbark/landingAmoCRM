import { GalleryItem } from 'components/Content/Main/MainBlock/Gallery/GalleryItem/GalleryItem'
import { imageGallery } from 'constants/gallery.constants'
import React from 'react'
import styles from './Gallery.module.scss'

export const Gallery = () => {
  const { container } = styles
  return (
    <div className={container}>
      {imageGallery.map((element) => (
        <GalleryItem
          key={element.id}
          image={element.image}
          altImage={element.altImage}
        />
      ))}
    </div>
  )
}
