import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Logo Fake da Facilita Jurídico"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top p-1"
          />
          Facilita Jurídico
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
