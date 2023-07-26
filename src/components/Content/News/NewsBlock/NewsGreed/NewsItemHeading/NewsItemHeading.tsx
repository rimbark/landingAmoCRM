import clsx from 'clsx'
import React from 'react'
import styles from './NewsItemHeading.module.scss'

export const NewsItemHeading = ({
  when,
  what,
  isMain,
}: {
  when: string
  what: string
  isMain?: boolean
}) => {
  const { container, date, head, mainDate, mainHead } = styles
  return (
    <div className={container}>
      <div className={clsx(isMain ? mainDate : date)}>{when}</div>
      <div className={clsx(isMain ? mainHead : head)}>{what}</div>
    </div>
  )
}
