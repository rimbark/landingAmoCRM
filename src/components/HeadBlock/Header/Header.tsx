import { ButtonEmpty } from 'components/Buttons/ButtonEmpty/ButtonEmpty'
import { Navbar } from 'components/HeadBlock/Header/Navbar/Navbar'
import { ShopingCart } from 'components/HeadBlock/Header/ShopingCart/ShopingCart'
import { Logo } from 'components/Logo/Logo'
import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {
  const { container, rightBlock } = styles
  return (
    <div className={container}>
      <Logo />
      <Navbar />
      <div className={rightBlock}>
        <ShopingCart />
        <ButtonEmpty text="Contact Us" />
      </div>
    </div>
  )
}
