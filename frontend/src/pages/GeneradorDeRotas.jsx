import { useState, useEffect } from "react";
import axios from "axios";

import TableComponent from "../components/TableComponent";
import { endpoints } from "../utils/endpoints.backend";
const { GET_BEST_ROUTE } = endpoints;

function GeneradorDeRotas() {
  const [routes, setRoutes] = useState([{await : 'loading...'}]);
  useEffect(() => {
    axios.get(GET_BEST_ROUTE).then((response) => {
      setRoutes(response.data);
    });
  }, []);
  
  return <TableComponent data={routes} />;
}

export default GeneradorDeRotas;
