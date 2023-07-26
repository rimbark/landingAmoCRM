import { MapingList } from 'components/MapingList/MapingList'
import { footerOtherItems } from 'constants/footer.constants'
import React from 'react'
import styles from '../FooterItem.module.scss'

export const FooterItemOther = () => {
  const { container, list } = styles
  return (
    <div className={container}>
      <h6>Other Pages</h6>
      <ul className={list}>
        <MapingList list={footerOtherItems} />
      </ul>
    </div>
  )
}
