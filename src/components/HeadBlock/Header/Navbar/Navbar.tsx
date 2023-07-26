import { MapingList } from 'components/MapingList/MapingList'
import { navigation } from 'constants/navbar.constants'
import React from 'react'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  const { container } = styles
  return (
    <ul className={container}>
      <MapingList list={navigation} />
    </ul>
  )
}
