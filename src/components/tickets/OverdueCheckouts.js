import { Table } from "reactstrap";
import { getOverdue } from "../../data/CheckoutData";
import { useState, useEffect } from "react";



export const OverdueCheckouts = () => {

    const [overdue, setOverdue] = useState([])

    useEffect(() => {
        getOverdue().then((data) => {
            setOverdue(data)
        })
    }, [])


    return (
        <Table>
            <thead>
                <tr>
                    <th>Overdue</th>
                    <th>Checked Out By</th>
                </tr>
            </thead>
            <tbody>
                {overdue.map((od) => (

                 <tr key={od.id}>
                    <td>{od.material.materialName}</td>
                    <td>{od.patron.firstName} {od.patron.lastName}</td>
                 </tr> 

                ))}

               
            </tbody>
        </Table>
    )
}