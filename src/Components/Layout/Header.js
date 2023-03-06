import React, { Fragment } from "react"

import chocolatesImage from '../../Assets/chocolates.jpg'
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = props => {
  return <Fragment>
    <header className={styles.header}>
      <h1>ReactChocolates</h1>
      <HeaderCartButton/>
    </header>
    <div className={styles['main-image']}>
      <img src={chocolatesImage} alt="A table full of chocolates!"/>
    </div>
  </Fragment>
}

export default Header