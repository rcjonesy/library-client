import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getPatronsDetails } from "../../data/patronData";
import { Link } from "react-router-dom";





export const PatronDetails = () => {

    const [patron, setPatron] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getPatronsDetails(id).then(setPatron);
    }, []);


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
                        <th>Email</th>
                        <th>Address</th>
                        <th>Checkout(s)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={`patron-${patron.id}`}>
                        <th scope="row">{patron.id}</th>
                        <td>{patron.firstName} {patron.lastName}</td>
                        <td>{patron.email}</td>
                        <td>{patron.address}</td>
                        <td>
                            <ul>
                                {patron.checkouts && patron.checkouts.map((checkout, index) => (
                                    <li key={index}>
                                        Checkout {index + 1}: {checkout.material.materialName}
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td>
                        <Link to={`/patrons/${patron.id}/edit`}>Edit Patron Details</Link>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );

}