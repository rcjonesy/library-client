import { useEffect, useState } from "react";
import { Table, Button, Input, FormGroup, Label } from "reactstrap";
import { getMaterials } from "../../data/materialsData";
import { Link } from "react-router-dom";
import { UpdateCirculation } from "../../data/materialsData";
import { getGenres } from "../../data/genresData";
import { getMaterialTypes } from "../../data/materialTypesData";


export default function MaterialList() {
  const [materials, setMaterials] = useState([]);
  const [genreId, setGenreId] = useState('');
  const [materialTypeId, setMaterialTypeId] = useState('');
  const [genres, setGenres] = useState([]);
  const [materialTypes, setMaterialTypes] = useState([]);

  useEffect(() => {
    fetchMaterials();
  }, [genreId, materialTypeId]);

  const fetchMaterials = () => {
    getMaterials(genreId, materialTypeId).then((data) => {
      setMaterials(data);
    });
  };

  useEffect(() => {
    getGenres().then((data) => {
      setGenres(data);
    });
    getMaterialTypes().then((data) => {
      setMaterialTypes(data);
    });
  }, []);

  



  const handleCirculationChange = (id) => {
    UpdateCirculation(id).then(() => {
      fetchMaterials();
    });
  };

  const handleGenreChange = (e) => {
    setGenreId(e.target.value);
  };

  const handleMaterialTypeChange = (e) => {
    setMaterialTypeId(e.target.value);
  };

  return (
    <div className="container">
      <div className="sub-menu bg-light">

        <Link to="/materials/create">Add</Link>
      </div>
      <FormGroup>
        <Label for="genreSelect"></Label>
        <Input type="select" name="genre" id="genreSelect" onChange={handleGenreChange}>
          <option value="">Select Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="materialTypeSelect"></Label>
        <Input type="select" name="materialType" id="materialTypeSelect" onChange={handleMaterialTypeChange}>
          <option value="">Select Material Type</option>
          {materialTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </Input>
      </FormGroup>
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
