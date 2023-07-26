import { MapingList } from 'components/MapingList/MapingList'
import { footerMenuItems } from 'constants/footer.constants'
import React from 'react'
import styles from '../FooterItem.module.scss'

export const FooterItemMenu = () => {
  const { container, list } = styles
  return (
    <div className={container}>
      <h6>Menu Items</h6>
      <ul className={list}>
        <MapingList list={footerMenuItems} />
      </ul>
    </div>
  )
}
