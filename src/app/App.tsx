import 'styles/index.scss'
import { ContentBlock } from 'components/Content/ContentBlock'
import { FooterContainer } from 'components/Foot/Footer/FooterContainer'
import { HeadBlock } from 'components/HeadBlock/HeadBlock'
import React from 'react'
import styles from './App.module.scss'

export const App = () => {
  const { container } = styles
  return (
    <div className={container}>
      <HeadBlock />
      <ContentBlock />
      <FooterContainer />
    </div>
  )
}
