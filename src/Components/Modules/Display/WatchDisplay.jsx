import React from 'react'
import WatchDet from '../../Data/WatchDet'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../../Sidenav'
import { useParams } from 'react-router-dom'

function WatchDisplay() {
    let { id } = useParams()
    let productDisplay = WatchDet.find((item)=> item.id == id)
  return (
    <div className='container-fluid p-5'>
      <Row>
        <Col sm={2}>
            <Sidenav />
        </Col>
        <Col sm={10}>
            <div className='container-fluid' key={productDisplay.id}>
                <div>
                    <img src={productDisplay.image} alt=""/>
                </div>
                <div>
                <h5>{productDisplay.name}</h5>
                <h6>Price : ₹{productDisplay.price}</h6>
                <p>Brand : {productDisplay.brand}</p>
                <p>Band-color : {productDisplay.bandcolor}</p>
                </div>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default WatchDisplay
