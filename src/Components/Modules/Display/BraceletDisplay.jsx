import React, { createContext, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import BraceletDet from '../../Data/BraceletDet'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../../Sidenav'
import Topbar from '../../Topbar'
import { CartContext } from './CartContext'


function BraceletDisplay() {
  
    let { id } = useParams()
    const { cart, addToCart } = useContext(CartContext)
    let productDisplay = BraceletDet.find((item)=> item.id == id)
  return (
    <div className='container-fluid p-5'>
      <Row>
        <Col sm={2}>
            <Sidenav />
        </Col>
        <Col sm={10}>
              <Topbar />
            <div className='container-fluid border rounded m-4 d-flex justify-content-around align-items-center flex-wrap' style={{backgroundColor:"#e0f2f1"}} key={productDisplay.id}>
                <div style={{width:'50%'}}>
                    <img src={productDisplay.image} alt={productDisplay.name} style={{width:'400px', height:'500px'}}/>
                </div>
                <div style={{width:'50%'}}>
                  <h5>{productDisplay.name}</h5>
                  <h6>Price : ₹{productDisplay.price}</h6>
                  <p>Brand : {productDisplay.brand}</p>
                  <p>Size : {productDisplay.size}</p>
                  <button className='btn btn-secondary' style={{width:'25%'}} onClick={() => addToCart(productDisplay)}>Add to cart</button>
                </div>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default BraceletDisplay