import Container from "react-bootstrap/Container";
import {Navbar, Nav} from "react-bootstrap";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Logo Fake da Facilita Jurídico"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top p-1"
          />
          Facilita Jurídico
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/cadastro">Cadastrar CLientes</Nav.Link>
            <Nav.Link href="/buscar">Buscar Clientes</Nav.Link>
            <Nav.Link href="/generador/melhorRota">Generar Ruta</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
