import React, { createContext, useState } from 'react'
import WatchDet from '../../Data/WatchDet'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../../Sidenav'
import { useParams } from 'react-router-dom'
import Topbar from '../../Topbar'

export const useContext = createContext()

function WatchDisplay() {
  const [cart, setCart] =useState(0)
    let { id } = useParams()
    let productDisplay = WatchDet.find((item)=> item.id == id)
  return (
    <div className='container-fluid'>
      <Row>
        <Col sm={2}>
            <Sidenav />
        </Col>
        <Col sm={10}>
            <useContext.Provider value={cart}>
             <Topbar />
            </useContext.Provider>
            <div className='container-fluid  d-flex justify-content-around align-items-center flex-wrap' key={productDisplay.id}>
                <div style={{width:'50%'}}>
                    <img src={productDisplay.image} alt={productDisplay.name} style={{width:'400px', height:'500px'}}/>
                </div>
                <div style={{width:'50%'}}>
                  <h5>{productDisplay.name}</h5>
                  <h6>Price : ₹{productDisplay.price}</h6>
                  <p>Brand : {productDisplay.brand}</p>
                  <p>Band-color : {productDisplay.bandcolor}</p>
                  <button className='btn btn-secondary' style={{width:'25%'}} onClick={() => setCart(cart+1)}>Add to cart</button>
                </div>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default WatchDisplay
