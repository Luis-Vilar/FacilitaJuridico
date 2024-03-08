import Header from "./components/Header";
import Table from "./components/TableComponent";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useState } from "react";
import { mockedData } from "./mocks/clientsData";


function App() {
  const [clients, setClients] = useState(mockedData);
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Table data={clients}  />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
