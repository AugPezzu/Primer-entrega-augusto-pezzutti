import React from 'react'
import styles from './navbar.module.css'
import { CgShoppingCart } from 'react-icons/cg'


const Navbar = () => {
  return (
    <navbar className={styles.container}>
    <div className={styles.logo}>
        <img src='.logomain.png' />
    </div>
    <ul className={styles.containerul}>
        <li className={styles.listnav}>Home</li>
        <li className={styles.listnav}>Productos</li>
        <li className={styles.listnav}>Nosotros</li>
    </ul>
    <div className={styles.containercart}>
    <p><CgShoppingCart />4</p>
    </div>
    
    </navbar>
  )
}

export default Navbar