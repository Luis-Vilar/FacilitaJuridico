import { Button, Form, Container } from "react-bootstrap";
import axios from "axios";
import { endpoints } from "../utils/endpoints.backend";
const { POST_CLIENTS } = endpoints;

function Cadastro() {
  const postUser = async (data) => {
    let sucess = false;
    try {
      const response = await axios.post(POST_CLIENTS, data);
      if (response.status === 201) {
        alert("Cliente cadastrado com sucesso");
      }
      sucess = true;
    } catch (error) {
      alert("Erro ao cadastrar cliente");
    }
    return sucess;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, latitud, longitud } = event.target.elements;
    const data = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      latitud: parseFloat(latitud.value),
      longitud: parseFloat(longitud.value),
    };
    const sucess = postUser(data);
    if (sucess) {
      event.target.reset();
    }
  };
  return (
    <Container className="p-4">
      <h1>Cadastro de Clientes</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="string"
            placeholder="Informe seu nome"
            required={true}
            id="name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Informe o Email"
            required={true}
            id="email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Informe o Telefone"
            required={true}
            id="phone"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Latitude </Form.Label>
          <Form.Control
            type="number"
            placeholder="Informe a Latitude"
            required={true}
            id="latitud"
            step={0.0000000001}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Longitude </Form.Label>
          <Form.Control
            type="number"
            placeholder="Informe a Longitude"
            required={true}
            id="longitud"
            step={0.00000000001}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default Cadastro;
