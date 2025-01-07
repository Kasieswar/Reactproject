import React from 'react'
import Sidenav from '../Sidenav'
import { Carousel, Col, Row } from 'react-bootstrap'
import BraceletDet from '../Data/BraceletDet'
import { Link } from 'react-router-dom'

function Bracelet() {
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
                <img className="d-block w-100"
                  src="https://img.freepik.com/free-photo/top-view-accessoires-travel_1921-116.jpg?t=st=1733997784~exp=1734001384~hmac=2bec0b8ce85f244876db2c4cb6811d7e52b7b88de166dea6f3d12496e5cd7fc5&w=740"
                  alt="First slide" style={{height: "350px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"}}/>
                <Carousel.Caption style={{color: "#e0f2f1", backgroundColor: "rgba(0, 0, 0, 0.5)",padding: "20px",borderRadius: "10px",boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)"}}>
                  <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Discover Accessories That Define You</h3>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem" }}>
                    From timeless classics to modern trends, all in one place.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100"
                  src="https://img.freepik.com/free-photo/old-photo-nuts-bolts-wrench_155003-8095.jpg?t=st=1734945700~exp=1734949300~hmac=40472282b2b46260f5e7cfd6c52ff6b43aa2c67e65ed2a0bd5e557821767f1b3&w=740"
                  alt="First slide" style={{height: "350px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"}}/>
                <Carousel.Caption style={{color: "#e0f2f1", backgroundColor: "rgba(0, 0, 0, 0.5)",padding: "20px",borderRadius: "10px",boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)"}}>
                  <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Timeless Charm</h3>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem" }}>
                    Add a touch of sophistication with bracelets that blend that speaks to you.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100"
                  src="https://img.freepik.com/free-photo/bracelets-with-metallic-ornaments-stones_114579-11806.jpg?t=st=1734945905~exp=1734949505~hmac=a460274a8a39e901ea32abb10d36109ef4a122d2f1157ce1bebf36206792b07b&w=740"
                  alt="First slide" style={{height: "350px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"}}/>
                <Carousel.Caption style={{color: "#e0f2f1", backgroundColor: "rgba(0, 0, 0, 0.5)",padding: "20px",borderRadius: "10px",boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)"}}>
                  <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>The Perfect Accessory</h3>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem" }}>
                    Complete your look with bracelets designed to shine every day.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>


            <div className='braceletmain'>
              {
                BraceletDet.map((bracelet)=>{
                  return(
                    <Link to={`/bracelet/${bracelet.id}`} className='braceletlink'>
                    <div key={bracelet.id} className='braceletcard'> 
                      <img src={bracelet.image} alt={bracelet.name} className='braceletimage'/>
                      <h5 className='braceletbrand'>Brand : {bracelet.brand}</h5>
                      <h6 className='braceletprice'>Price : ₹{bracelet.price}</h6>
                      
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

export default Bracelet
