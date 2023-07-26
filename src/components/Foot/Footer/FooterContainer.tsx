import { FooterItemMenu } from 'components/Foot/Footer/FooterItems/FoterItemMenu/FooterItemMenu'
import { FooterItemOther } from 'components/Foot/Footer/FooterItems/FoterItemOther/FooterItemOther'
import { Logo } from 'components/Logo/Logo'
import React from 'react'
import styles from './FooterContainer.module.scss'

export const FooterContainer = () => {
  const { container, content, logotype } = styles
  return (
    <div className={container}>
      <div className={content}>
        <div className={logotype}>
          <Logo />
          <div>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
            quam ac sed turpis volutpat. Cursus sed massa non .
          </div>
        </div>
        <FooterItemMenu />
        <FooterItemOther />
      </div>
    </div>
  )
}
