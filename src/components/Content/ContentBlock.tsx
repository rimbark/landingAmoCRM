import React from 'react'
import styles from './ContentBlock.module.scss'
import { MainBlock } from './Main/MainBlock/MainBlock'
import { NewsBlock } from './News/NewsBlock/NewsBlock'

export const ContentBlock = () => {
  const { container } = styles
  return (
    <div className={container}>
      <MainBlock />
      <NewsBlock />
    </div>
  )
}
