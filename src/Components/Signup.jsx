import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    
    <div className="signup-main">
      <Row className='w-100'>
        <Col sm={7} className='signup-form'>
          <form action="">
            <h2>SignUp</h2>
            <input type="text" placeholder='Enter your Full name' required />
            <input type="email" placeholder='Enter your email' required />
            <input type="password" placeholder='Enter your password' required />
            <Link to={"/Reactproject"}><p className='login-link'>Already have an account?</p></Link>
            <Link to={"/Reactproject"}><button type='submit'>SignUp</button></Link>
          </form>
        </Col>

        <Col sm={5} className='signup-text'>
          <h1>Welcome to our Platform!</h1>
          <p>Create an account here to enjoy personalized features</p>
        </Col>
      </Row>
    </div>
  )
}

export default Signup
