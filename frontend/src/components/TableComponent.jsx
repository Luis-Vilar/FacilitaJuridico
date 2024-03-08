import Table from "react-bootstrap/Table";
function TableComponent({ data }) {
  const keys = Object.keys(data[0]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {keys.map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {keys.map((key, index) => (
              <td key={index}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}


export default TableComponent;
