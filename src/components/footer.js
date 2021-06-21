import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='copyright'>FrancisGuedes &copy; 2021</p>
      <Link className='about' to='/about'>About</Link>
    </footer>
  )
}

export default Footer
