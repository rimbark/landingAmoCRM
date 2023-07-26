import { ButtonsPropsTypes } from 'components/Buttons/buttons.types'
import React from 'react'
import styles from './ButtonFilled.module.scss'

export const ButtonFilled = ({ text }: ButtonsPropsTypes) => {
  const { container } = styles
  return <div className={container}>{text}</div>
}
