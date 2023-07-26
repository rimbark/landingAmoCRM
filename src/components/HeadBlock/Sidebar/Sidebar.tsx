import { MapingList } from 'components/MapingList/MapingList'
import { sidebarNavigation } from 'constants/sidebar.constants'
import React from 'react'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
  const { container } = styles
  return (
    <ul className={container}>
      <MapingList list={sidebarNavigation} />
    </ul>
  )
}
