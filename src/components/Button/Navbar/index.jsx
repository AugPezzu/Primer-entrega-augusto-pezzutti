import React from 'react'
import styles from './navbar.module.css'
import { CgShoppingCart } from 'react-icons/cg'


const Navbar = () => {
  return (
    <navbar>
    <div className='logo'>
        <img src='./img/logo-main.png' alt='logo de la marca'  />
    </div>
    <ul className={styles.container}>
        <li className={styles.listnav}>Home</li>
        <li className={styles.listnav}>Productos</li>
        <li className={styles.listnav}>Nosotros</li>
        <CgShoppingCart />
    </ul>
    
    </navbar>
  )
}

export default Navbar