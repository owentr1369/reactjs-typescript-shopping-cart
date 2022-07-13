import React from 'react'
import { Navbar as NavbarBs, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <NavbarBs className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav>
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}

export default NavBar