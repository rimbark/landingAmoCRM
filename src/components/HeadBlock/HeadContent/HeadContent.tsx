import { ButtonFilled } from 'components/Buttons/ButtonFilled/ButtonFilled'
import { Slogan } from 'components/Slogan/Slogan'
import line from 'images/headBlock/head-line.png'
import characters from 'images/headBlock/header-character.png'
import React from 'react'
import styles from './HeadContent.module.scss'

export const HeadContent = () => {
  const { container, content, heading, text, links } = styles
  return (
    <div className={container}>
      <div className={content}>
        <Slogan />
        <div className={heading}>
          Unleash the Next Generation of Gaming
          <img src={line} alt="line" />
        </div>
        <div className={text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec
          donec in morbi pulvinar. Enim non pulvinar neque.
        </div>
        <div className={links}>
          <ButtonFilled text="Explore More" />
          <div>
            <a href="##">View our team</a>
          </div>
        </div>
      </div>
      <div>
        <img src={characters} alt="characters" />
      </div>
    </div>
  )
}
