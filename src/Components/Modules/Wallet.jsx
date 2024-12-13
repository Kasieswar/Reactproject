import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import Sidenav from '../Sidenav'
import WalletDet from '../Data/WalletDet'

function Wallet() {
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
              <Carousel.Caption style={{color:"#e0f2f1"}}>
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
              <Carousel.Caption style={{color:"#e0f2f1"}}>
                <h3>Watches That Inspire Time</h3>
                <p>Elegant, sporty, or casual - find the perfect timepiece.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/free-photo/brown-leather-shoes_1203-7561.jpg?t=st=1733998681~exp=1734002281~hmac=fa6ddfc3b612b9c23fb1994676198a2daf450f57f2cdf73d046837bcef8861cf&w=740"
                alt="Second slide" style={{height:"300px"}}
              />
              <Carousel.Caption style={{color:"#e0f2f1"}}>
                <h3>Step Up Your Style</h3>
                <p>Comfort and fashion for every occassion.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/13225343/pexels-photo-13225343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Third slide" style={{height:"300px"}}
              />
              <Carousel.Caption style={{color:"#e0f2f1"}}>
                <h3>Style in Your Pocket</h3>
                <p>Durable and stylish wallets for every personality.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/free-photo/jewellery-bangle-background-with-place-text-banner-fashion-accessories_460848-13231.jpg?t=st=1733996479~exp=1734000079~hmac=79b979c7ede45364cb63e8d349be8620a4604482a28e70096e0b03f33bb96518&w=1060"
                alt="Fourth slide" style={{height:"300px"}}
              />
              <Carousel.Caption style={{color:"#e0f2f1"}}>
                <h3>Elevate Your Wrists with Elegance.</h3>
                <p>Unique designs that enhance your style effortlessly.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',paddingLeft:"20px"}}>
            {
              WalletDet.map((wallet)=>{
                return(
                  <div key={wallet.id} style={{border:'1px solid #ddd', padding:'10px', margin:'1%',width:'280px',backgroundColor:'#e0f2f1'}}>
                    <img src={wallet.image} alt={wallet.name} style={{width:'100%',height:'300px', border:'1px solid #ddd'}}/>
                    <h5>Brand : {wallet.brand}</h5>
                    <h5>Price : ₹{wallet.price}</h5>
                    
                  </div>
                )
              })
            }
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Wallet
