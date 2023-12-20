import { getPatrons } from "../../data/patronData"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import { DeactivatePatron } from "../../data/patronData";



export const Patrons = () => {
    const [patrons, setPatrons] = useState([])

    useEffect(() => {
        getPatrons().then(setPatrons);
    }, []);

    const handleDeactivateClick = (id) => {
        DeactivatePatron(id)
    };


    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>All Patrons</h4>
                {/* <Link to="/materials/create">Add</Link> */}
            </div>
            <Table>
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
                        <tr key={`patrons-${p.id}`}>
                            <th scope="row">{p.id}</th>
                            <td>{p.firstName} {p.lastName}</td>

                            <td>{p.isActive ? "active" : "inactive"}</td>
                            <td>
                                <Link to={`/patrons/${p.id}`}>Details</Link>
                            </td>
                            <td>
                                <Button color="primary" onClick={() => handleDeactivateClick(p.id)}>
                                    {p.isActive ? 'Deactivate' : 'Reactivate'}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );

}