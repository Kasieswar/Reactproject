import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Col, Row, } from 'react-bootstrap';


function Login() {
  return (
    
    <div className='login-div'>
      <Row className='login-main'>
        <Col sm={5} className='login-text'>
          <h1>Welcome to our platform!</h1>
          <p>Login quickly to access all our amazing features!</p>
        </Col>
        <Col sm={7} className='login-form'>
          <form>
            <h2>Login</h2>
            <input type="email" placeholder='Enter your Email' required />
            <input type="password" placeholder='Enter your Password' required />
            <Link to={"/signup"}><p className='signup-link'>Don't have an account?</p></Link>
            <Link to={"/dashboard"}> <button type='submit'>Login</button> </Link>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default Login
