import clsx from 'clsx'
import { NewsItemHeading } from 'components/Content/News/NewsBlock/NewsGreed/NewsItemHeading/NewsItemHeading'
import { newsList } from 'constants/news.constants'
import React from 'react'
import styles from './NewsGreed.module.scss'

export const NewsGreed = () => {
  return (
    <div className={styles.container}>
      {newsList.map((el) => (
        <div
          key={el.id}
          className={clsx(el.isMain ? styles.mainNews : styles[`news${el.id}`])}
        >
          <img src={el.preview} alt={el.altPreview} />
          <NewsItemHeading when={el.when} what={el.what} isMain={el.isMain} />
        </div>
      ))}
    </div>
  )
}
