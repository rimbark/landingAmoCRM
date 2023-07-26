import { PurchaseCounter } from 'components/HeadBlock/Header/ShopingCart/PurchaseCounter/PurchaseCounter'
import cart from 'images/headBlock/cart.png'
import React from 'react'
import styles from './ShopingCart.module.scss'

export const ShopingCart = () => {
  const { container } = styles
  return (
    <div className={container}>
      <img src={cart} alt="shopping cart" />
      <PurchaseCounter purchaseCount={0} />
    </div>
  )
}
