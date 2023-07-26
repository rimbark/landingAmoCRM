import flame from 'images/general/flame.png'
import React from 'react'
import styles from './Slogan.module.scss'

export const Slogan = () => {
  const { container } = styles
  return (
    <div className={container}>
      <img src={flame} alt="flame" />
      <span>FUTURE OF ESPORTS</span>
    </div>
  )
}
