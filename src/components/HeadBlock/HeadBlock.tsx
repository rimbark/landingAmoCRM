import { HeadContent } from 'components/HeadBlock/HeadContent/HeadContent'
import { Header } from 'components/HeadBlock/Header/Header'
import { Sidebar } from 'components/HeadBlock/Sidebar/Sidebar'
import React from 'react'
import styles from './HeadBlock.module.scss'

export const HeadBlock = () => {
  const { container, mainBlock } = styles
  return (
    <div className={container}>
      <Header />
      <div className={mainBlock}>
        <Sidebar />
        <HeadContent />
      </div>
    </div>
  )
}
