import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FCLogo from '../assets/FCLogo.png'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';



export default function NavComp() {
  return (
<>
{[false].map((expand) => (
  <Navbar key={expand} variant="dark" expand={expand} className="mb-3">
    <Container fluid>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Brand href="#"><img className="img-fluid" alt="Fighting Chance" href="#" src={FCLogo} /></Navbar.Brand>
      <span></span>
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
))}
</>


  );
}
