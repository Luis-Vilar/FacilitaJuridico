import { Button, Form, Container } from "react-bootstrap";
import TableComponent from "./TableComponent";
import { useState } from "react";
import axios from "axios";
import { endpoints } from "../utils/endpoints.backend";
const { GET_CLIENTS } = endpoints;

function SearchComponent({ searchBy }) {
  const [data, setData] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const value = document.getElementById(searchBy).value;
    let query = undefined;

    switch (searchBy) {
      case "Nome":
        query = { name: value };
        break;
      case "Email":
        query = { email: value };
        break;
      case "Telefone":
        query = { phone: value };
        break;
      default:
        alert("Erro ao buscar");
        break;
    }
    try {
      const response = await axios.get(GET_CLIENTS, { params: query });
      if (response.status === 200) {
        setData(response.data);
        event.target.reset();
      }
    } catch (error) {
      alert("Nheum usuario foi encontrado");
    }
  };
  const handleLimpar = () => {
    setData(undefined);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>{searchBy}</Form.Label>
          <Form.Control
            type="string"
            placeholder={`Informe ${searchBy}`}
            required={true}
            id={searchBy}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Buscar
        </Button>
        {data && (
          <Button className="m-3" variant="primary" onClick={handleLimpar}>
            Limpar
          </Button>
        )}
      </Form>
      {data && (
        <Container className="mt-5">
          <TableComponent data={data} />
        </Container>
      )}
    </Container>
  );
}

export default SearchComponent;
