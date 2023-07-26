import { ButtonsPropsTypes } from 'components/Buttons/buttons.types'
import React from 'react'
import styles from './ButtonEmpty.module.scss'

export const ButtonEmpty = ({ text }: ButtonsPropsTypes) => {
  const { container } = styles
  return <div className={container}>{text}</div>
}
