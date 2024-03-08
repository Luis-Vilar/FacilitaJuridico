import { Tab, Tabs, Container } from "react-bootstrap";
import TableComponent from "../components/TableComponent";
import SearchComponent from "../components/SearchComponent";
import axios from "axios";
import { useEffect, useState } from "react";

function Busca() {
  const [clientes, setClientes] = useState([{ await: "loading..." }]);

  const getAll = () => {
    axios.get("http://localhost:3000/clients").then((response) => {
      setClientes(response.data);
    });
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Container className="p-4">
      <h1>Busca de Clientes</h1>
      <Tabs
        defaultActiveKey="todos"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="todos" title="Todos">
          <TableComponent data={clientes} />
        </Tab>
        <Tab eventKey="name" title="Por Nome">
          <SearchComponent searchBy="Nome" />
        </Tab>
        <Tab eventKey="email" title="Por Email">
          <SearchComponent searchBy="Email" />{" "}
        </Tab>
        <Tab eventKey="phone" title="Por Telefone">
          <SearchComponent searchBy="Telefone" />{" "}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Busca;
