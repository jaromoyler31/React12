import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FCLogo from '../assets/FCLogo.png'

export default function NavComp() {
  return (
      <Navbar expand="lg">
        <Container className="d-flex justifiy-content-space-between">
          <span className="text-light display-3"><i className="bi bi-justify"></i></span>
          <img className="img-fluid" alt="Fighting Chance" href="#" src={FCLogo} />
          <span></span>
        </Container>
      </Navbar>
  );
}
