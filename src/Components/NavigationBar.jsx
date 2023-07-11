import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// import { CartContext } from '../pages/CartContext';
// import React, { useContext } from 'react';

function NavigationBar() {
    // const { cart } = useContext(CartContext);
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className='navbar-brand fw-bold fs-4' to="/">MOKINGO</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link fs-5' to="/">Home</Link>
                        <Link className='nav-link fs-5' to="/products">Products</Link>
                        <Link className='nav-link fs-5' to="/login">Login</Link>
                        <Link className='ms-4 btn fs-5 btn-dark' to="/signup">SignUp</Link>
                        {/* <Link to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({cart.length})
            </Link> */}


                    </Nav>
                </Navbar.Collapse>
            </Container>
     
        </Navbar>
        <div className="bg-warning fs-6 fw-semibold text-center text-white ">
  
 
  <div className="container p-2 pb-0  bg-danger">

</div>
</div>
      
        </>
    );
}

export default NavigationBar;