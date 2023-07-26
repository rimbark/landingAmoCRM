import logo from 'images/general/logo.png'
import React from 'react'
import styles from './Logo.module.scss'

export const Logo = () => {
  const { container } = styles
  return (
    <div className={container}>
      <img src={logo} alt="logo" />
    </div>
  )
}
