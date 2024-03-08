import Header from "./components/Header";
import Table from "./components/TableComponent";
import { useState } from "react";
import { mockedData } from "./mocks/clientsData";


function App() {
  const [clients, setClients] = useState(mockedData);
  return (
    <>
      <Header />
      <Table data={clients} />
    </>
  );
}

export default App;
