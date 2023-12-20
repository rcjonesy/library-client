import { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import { getMaterials } from "../../data/materialsData";
import { Link } from "react-router-dom";
import { UpdateCirculation } from "../../data/materialsData";

export default function MaterialList() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getMaterials().then((data) => {
      setMaterials(data)
    });
  }, []);

  const fetchMaterials = () => {
    getMaterials().then((data) => {
      setMaterials(data);
    });
  };

  const handleCirculationChange = (id) => {
    UpdateCirculation(id).then(() => {
      fetchMaterials()
    })
  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Materials</h4>
        <Link to="/materials/create">Add</Link>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}`}>Details</Link>
              </td>
              <td>
                <Button color="primary" onClick={() => handleCirculationChange(m.id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
