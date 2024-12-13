import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='side'>

        <ul> 
          <Link to={"/dashboard"}><li>Dashboard</li></Link>
          <Link to={"/watches"}><li>Watch</li></Link>
          <Link to={"/shoes"}><li>Shoes</li></Link>
          <Link to={"/wallet"}><li>Wallet</li></Link> 
          <Link to={"/bracelet"}><li>Bracelet</li></Link>
          <Link to={"/"}><li style={{backgroundColor:'#ff4b4bb5',borderRadius:"5px" }}>Logout</li></Link>
        </ul>
    </div>
  )
}

export default Sidenav
