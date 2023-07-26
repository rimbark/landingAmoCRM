import { Gallery } from 'components/Content/Main/MainBlock/Gallery/Gallery'
import { Slogan } from 'components/Slogan/Slogan'
import mainCheracter from 'images/mainBlock/main/mainBlock-character.png'
import React from 'react'
import styles from './MainBlock.module.scss'

export const MainBlock = () => {
  const { container, content, textContent, heading, text } = styles
  return (
    <div className={container}>
      <div className={content}>
        <img src={mainCheracter} alt="" />
        <div className={textContent}>
          <Slogan />
          <div className={heading}>Customize Your Own Character</div>
          <p className={text}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae.
          </p>
          <Gallery />
        </div>
      </div>
    </div>
  )
}
