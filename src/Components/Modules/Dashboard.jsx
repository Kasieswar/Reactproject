import React from 'react';
import { Col, Row, Carousel } from 'react-bootstrap';
import Sidenav from '../Sidenav';
import WatchDet from '../Data/WatchDet';
import WalletDet from '../Data/WalletDet';
import ShoeDet from '../Data/ShoeDet';
import BraceletDet from '../Data/BraceletDet';
import { Link } from 'react-router-dom';

function Dashboard() {
  const Display = WatchDet.slice(0,3)
  const DisplayWal = WalletDet.slice(2,4)
  const DisplayShoe = ShoeDet.slice(4,7)
  const DisplayBracelet = BraceletDet.slice(3,5)
  return (
    <div className='container-fluid p-0'>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>

        <Col sm={10} className='m-0'>
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
              <Carousel.Caption style={{color:"black"}}>
                <h3>Elevate Your Wrists with Elegance.</h3>
                <p>Unique designs that enhance your style effortlessly.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
          <Row >
            <Col sm={7} style={{paddingLeft:"55px"}}>
              <h3 className="section-heading">Crafted for Every Second</h3>
              <Link to="/watches">
              <div className='sec'>
              
                {
                  Display.map((watch)=> {
                    return(
                      <div className="image-card">
                        <img src={watch.image} alt="" style={{width:"170px",height:"220px",borderRadius:"5px"}}/>
                      </div>
                    )
                  })
                }
              </div></Link>
            </Col>
            <Col sm={5}>
                <h3 className="section-heading">Sleek. Smart. Secure.</h3>
                <Link to={"/wallet"}>
                <div className='sec'>
                  {
                    DisplayWal.map((wallet)=>{
                      return(
                        <div className="image-card">
                          <img src={wallet.image} alt="" style={{width:"170px",height:"220px",borderRadius:"5px"}}/>
                        </div>
                      )
                    })
                  }
                </div></Link>
            </Col>
          </Row>
          <Row>
            <Col sm={5} style={{paddingLeft:"55px"}}>
              <h3 className="section-heading">Wear Your Confidence</h3>
              <Link to={"/bracelet"}>
              <div className='sec'>
                {
                  DisplayBracelet.map((bracelet)=>{
                    return(
                      <div className="image-card">
                        <img src={bracelet.image} alt="" style={{width:"170px",height:"220px",borderRadius:"5px"}}/>
                      </div>
                    )
                  })
                }
              </div></Link>
            </Col>
            <Col sm={7}>
                <h3 className="section-heading">Step into Comfort and Class</h3>
                <Link to={"/shoes"}>
                <div className='sec'>
                  {
                    DisplayShoe.map((shoe)=>{
                      return(
                        <div className="image-card">
                          <img src={shoe.image} alt="" style={{width:"170px",height:"220px",borderRadius:"5px"}}/>
                        </div>
                      )
                    })
                  }
                </div></Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
