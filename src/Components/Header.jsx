import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header>
            <Link to={"/"}><button className='btn btn-outline-secondary'>Login</button></Link>
            <Link to={"/signup"}><button className='btn btn-outline-secondary'>SignUp</button></Link>
      </header>
    </div>
  )
}

export default Header
