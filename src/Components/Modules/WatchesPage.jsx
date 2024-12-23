import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import Sidenav from '../Sidenav'
import WatchDet from '../Data/WatchDet'
import { Link } from 'react-router-dom'



function WatchesPage() {
  return (
      <div className='container-fluid'>
        <Row>
          <Col sm={2}>
            <Sidenav />
          </Col>
          <Col sm={10}>
            {/* Carousel */}
            <Carousel interval={3000} fade={true}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/free-photo/top-view-accessoires-travel_1921-116.jpg?t=st=1733997784~exp=1734001384~hmac=2bec0b8ce85f244876db2c4cb6811d7e52b7b88de166dea6f3d12496e5cd7fc5&w=740"
                  alt="First slide" style={{height:"300px"}}
                />
                <Carousel.Caption style={{color:"#e0f2f1",backgroundColor: "rgba(0, 0, 0, 0.532)"}}>
                  <h3>Discover Acccessories That Define You</h3>
                  <p>From timeless classics to modern trends,all in one place.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/free-photo/gray-scale-shot-black-watch_181624-422.jpg?t=st=1733996228~exp=1733999828~hmac=8fb1a422d512946039b636bec84558ceb372a2a0af22f025544d8c5f0ac58bc1&w=740"
                  alt="Second slide" style={{height:"300px"}}
                />
                <Carousel.Caption style={{color:"#e0f2f1",backgroundColor: "rgba(0, 0, 0, 0.532)"}}>
                  <h3>Watches That Inspire Time</h3>
                  <p>Elegant, sporty, or casual - find the perfect timepiece.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/free-photo/black-wrist-watch_1057-4040.jpg?t=st=1734676442~exp=1734680042~hmac=98b7e086eecb31c5fc5cb0202810329858ceeae45abb41ccb6d9e705a0006a51&w=740"
                  alt="Second slide" style={{height:"300px"}}
                />
                <Carousel.Caption style={{color:"#e0f2f1",backgroundColor: "rgba(0, 0, 0, 0.532)"}}>
                  <h3>Timeless Elegance</h3>
                  <p>Explore our watches, crafted for precision, style, and sophistication.</p>
                </Carousel.Caption>
              </Carousel.Item>
              
            </Carousel>

            
            <div  style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',paddingLeft:"20px"}}>
              {
                WatchDet.map((watch)=>{
                  return(
                    <Link to={`/watches/${watch.id}`} className='text-decoration-none'>
                    <div key={watch.id} style={{border:'1px solid #ddd', padding:'10px', margin:'1%',width:'280px',backgroundColor:'#e0f2f1'}}> 
                      <img src={watch.image} alt={watch.name} style={{width:'100%',height:'300px', border:'1px solid #ddd'}}/>
                      <h5>Brand : {watch.brand}</h5>
                      <h6>Price : ₹{watch.price}</h6>
                    </div></Link>
                  )
                })
              }
            </div>
          </Col>
        </Row>
      </div>
  )
}


export default WatchesPage