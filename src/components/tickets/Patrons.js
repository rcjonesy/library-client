import { getPatrons } from "../../data/patronData"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import { DeactivatePatron } from "../../data/patronData";
import { ActivatePatron } from "../../data/patronData";



export const Patrons = () => {
    const [patrons, setPatrons] = useState([])

    useEffect(() => {
        getPatrons().then(setPatrons);
    }, []);

    const fetchPatrons = () => {
        getPatrons().then((data) => {
            setPatrons(data);
        });
    };

    const handleStatusChange = async (id, status) => {
        if (status === true) {
          await DeactivatePatron(id);
          fetchPatrons();
        } else {
          await ActivatePatron(id);
          fetchPatrons();
        }
      };





    return (
        <div className="container">
            <div className="sub-menu bg-light p-3">
                <h4>All Patrons</h4>
                {/* <Link to="/materials/create">Add</Link> */}
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {patrons.map((p) => (
                        <tr key={`patrons-${p?.id}`}>
                            <th scope="row">{p?.id}</th>
                            <td>{p?.firstName} {p?.lastName}</td>
                            <td>{p?.isActive ? "Active" : "Inactive"}</td>
                            <td>
                                <Link to={`/patrons/${p?.id}`}>Details</Link>
                            </td>
                            <td>
                                <Button
                                    color={p?.isActive ? "danger" : "success"}
                                    onClick={() => handleStatusChange(p?.id, p?.isActive)}
                                >
                                    {p?.isActive ? 'Deactivate' : 'Reactivate'}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};
