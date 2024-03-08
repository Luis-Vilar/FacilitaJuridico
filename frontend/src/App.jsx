import Header from "./components/Header";
import Table from "./components/TableComponent";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Busca from "./pages/Busca";
import Cadastro from "./pages/Cadastro";
import GeneradorDeRotas from "./pages/GeneradorDeRotas";

import { useState } from "react";
import { mockedData } from "./mocks/clientsData";

function App() {
  const [clients, setClients] = useState(mockedData);
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table data={clients} />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/buscar" element={<Busca />} />
          <Route path="/generador/melhorRota" element={<GeneradorDeRotas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
