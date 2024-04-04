import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <Navbar expand='lg' className='navbar'>
        <Container>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link className='nav-item nav-link text-white' to='/'><i className='fa-solid fa-house' /> Home</Link>
              <Link className='nav-item nav-link text-white' to='/contacto'><i className='fa-solid fa-address-book' /> Contacto</Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand className='text-white' href='#home'> <i className='fa-solid fa-cake-candles' /> Happy Cake</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
