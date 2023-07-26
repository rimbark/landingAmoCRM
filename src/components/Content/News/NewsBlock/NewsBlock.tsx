import { ButtonFilled } from 'components/Buttons/ButtonFilled/ButtonFilled'
import { NewsGreed } from 'components/Content/News/NewsBlock/NewsGreed/NewsGreed'
import { Slogan } from 'components/Slogan/Slogan'
import React from 'react'
import styles from './NewsBlock.module.scss'

export const NewsBlock = () => {
  const { container, content, heading, header } = styles
  return (
    <div className={container}>
      <div className={content}>
        <div className={heading}>
          <div>
            <Slogan />
            <div className={header}>Latest News & Articles</div>
          </div>
          <ButtonFilled text="Read More" />
        </div>
        <NewsGreed />
      </div>
    </div>
  )
}
