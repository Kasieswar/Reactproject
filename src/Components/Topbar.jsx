import React from 'react'
import { useContext } from "./Modules/Display/WatchDisplay";
import { useContextWal } from "./Modules/Display/WalletDisplay";
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <div className='container-fluid border p-2 d-flex justify-content-end' style={{paddingTop:'10px'}}>
      <Link to={'/cartpage'}>
        <useContext.Consumer>
          {value=><div>
            <button className='btn btn-warning'>Cart({value})</button>
            </div>}
        </useContext.Consumer>
        
        </Link>
        
    </div>
  )
}

export default Topbar
