import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

import TableComponent from "../components/TableComponent";
import { endpoints } from "../utils/endpoints.backend";
const { GET_BEST_ROUTE } = endpoints;

function GeneradorDeRotas() {
  const [routes, setRoutes] = useState([{ await: "loading..." }]);
  useEffect(() => {
    axios.get(GET_BEST_ROUTE).then((response) => {
      setRoutes(response.data);
    });
  }, []);

  return (
    <Container  className="p-4">
      <h1>Gerador de Rotas</h1>
      <TableComponent data={routes} />
    </Container>
  );
}

export default GeneradorDeRotas;
