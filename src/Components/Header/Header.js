import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const Header = () => {
  const {user, LOgout} = useContext(AuthContext)

  const singout =()=>{
    LOgout()
  }
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/" className='text-decoration-none fw-semibold text-warning h5'>Kader</Link>
          <div className='mx-auto'></div>

          <Nav className="me-auto">
            {/* {user?.uid} */}
            <Link to="/" className='text-decoration-none ms-3  '>Home</Link>
            <Link to="/features" className='text-decoration-none ms-3  '>Features</Link>
            <Link to="/pricing" className='text-decoration-none ms-3  '>Pricing</Link>
            {user?.uid ? <Link onClick={singout}  className='text-decoration-none ms-3  '>Logout</Link> :
            <>
            <Link to="/login" className='text-decoration-none ms-3  '>Login</Link>
            <Link to="/signup" className='text-decoration-none ms-3  '>Signup</Link>
            </>}

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;