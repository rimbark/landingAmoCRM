import { PurchaseCounterPropsTypes } from 'components/HeadBlock/Header/ShopingCart/PurchaseCounter/purchaseCounterProps.types'
import React from 'react'
import styles from './PurchaseCounter.module.scss'

export const PurchaseCounter = ({
  purchaseCount,
}: PurchaseCounterPropsTypes) => {
  const { container } = styles
  return <div className={container}>{purchaseCount}</div>
}
