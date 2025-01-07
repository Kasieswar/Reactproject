import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import Sidenav from '../Sidenav'
import WalletDet from '../Data/WalletDet'
import { Link } from 'react-router-dom'

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
              <img className="d-block w-100"
                src="https://img.freepik.com/free-photo/top-view-accessoires-travel_1921-116.jpg?t=st=1733997784~exp=1734001384~hmac=2bec0b8ce85f244876db2c4cb6811d7e52b7b88de166dea6f3d12496e5cd7fc5&w=740"
                alt="First slide"
                style={{height: "350px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"}}/>
              <Carousel.Caption
                style={{color: "#e0f2f1", backgroundColor: "rgba(0, 0, 0, 0.5)",padding: "20px",borderRadius: "10px",boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)"}}>
                <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Discover Accessories That Define You</h3>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem" }}>
                  From timeless classics to modern trends, all in one place.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          
                       
            <Carousel.Item>
              <img className="d-block w-100"
                src="https://images.pexels.com/photos/13225343/pexels-photo-13225343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Second slide"
                style={{height: "350px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"}}/>
              <Carousel.Caption style={{color: "#e0f2f1",backgroundColor: "rgba(0, 0, 0, 0.5)",padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)"}}>
                <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Your Essentials, Redefined</h3>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem" }}>
                  Minimalist designs with maximum utility. Find the wallet that suits your style.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          
                        
            <Carousel.Item>
              <img className="d-block w-100"
                src="https://images.pexels.com/photos/4452528/pexels-photo-4452528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Third slide"
                style={{ height: "350px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",objectFit:"cover"}}/>
              <Carousel.Caption style={{color: "#e0f2f1",backgroundColor: "rgba(0, 0, 0, 0.5)",padding: "20px",
                              borderRadius: "10px",boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)"}}>
                <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Hold Your World Together</h3>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem" }}>
                  From cards to cash, keep everything secure with wallets built to impress.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>


          
          <div className='walletmain'>
            {
              WalletDet.map((wallet)=>{
                return(
                  <Link to={`/wallet/${wallet.id}`} className='walletlink'>
                  <div key={wallet.id} className='walletcard'>
                    <img src={wallet.image} alt={wallet.name} className='walletimage'/>
                    <h5 className='walletbrand'>Brand : {wallet.brand}</h5>
                    <h5 className='walletprice'>Price : ₹{wallet.price}</h5>
                    
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

export default Wallet
