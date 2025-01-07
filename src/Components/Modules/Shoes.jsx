import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import Sidenav from '../Sidenav'
import ShoeDet from '../Data/ShoeDet'
import { Link } from 'react-router-dom'

function Shoes() {
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
                src="https://img.freepik.com/free-photo/brown-leather-shoes_1203-7562.jpg?t=st=1734943460~exp=1734947060~hmac=5d6f300b5b5b3159766dbfe27f8c42c5161c904a3eaa6c8e7eea5e365c4b92af&w=740"
                alt="First slide" style={{height: "350px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"}}/>
              <Carousel.Caption style={{color: "#e0f2f1", backgroundColor: "rgba(0, 0, 0, 0.5)",padding: "20px",borderRadius: "10px",boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)"}}>
                <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Casual Yet Cool</h3>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem" }}>
                  From the gym to the streets, our sneakers are your perfect companion.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100"
                src="https://img.freepik.com/free-photo/woman-leather-shoes_1203-8263.jpg?t=st=1734943422~exp=1734947022~hmac=797a56578dd1bbc27ffc6a6bb65091874d6caff94d580d5829fc870cbb3190df&w=740"
                alt="First slide" style={{height: "350px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"}}/>
              <Carousel.Caption style={{color: "#e0f2f1", backgroundColor: "rgba(0, 0, 0, 0.5)",padding: "20px",borderRadius: "10px",boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)"}}>
                <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Classic Charm</h3>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem" }}>
                  Walk with confidence in formal shoes that never go out of style.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>



          <div className='shoemain'>
            {
              ShoeDet.map((shoe)=>{
                return(
                  <Link to={`/shoes/${shoe.id}`} className="shoelink">
                  <div key={shoe.id} className="shoecard">
                    <img src={shoe.image} alt={shoe.name} className="shoeimage"/>
                    <h5 className="shoetitle">Brand : {shoe.brand}</h5>
                    <h6 className="shoeprice">Price : ₹{shoe.price}</h6>
                    
                    
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

export default Shoes
