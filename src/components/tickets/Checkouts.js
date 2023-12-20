import { getCheckouts } from "../../data/CheckoutData"
import { useState, useEffect } from "react"
import { List, Button } from "reactstrap";
import { ReturnMaterial } from "../../data/materialsData";

export const Checkouts = () => {

    const [checkouts, setCheckouts] = useState([])

    useEffect(() => {
        getCheckouts().then((data) => {
            setCheckouts(data)
        });
    }, []);

    const handleReturnClick = (id) => {
        ReturnMaterial(id)
    }

    return (
        <div>
            <List style={{ marginTop: '20px', padding: '10px 30px', backgroundColor: '#f5f5f5', borderRadius: '5px', listStyleType: 'none'}}>
                {checkouts.map((checkout) => (
                    <li key={checkout.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: 'white', borderRadius: '3px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <span>{checkout.material.materialName}</span>
                        <div style={{ marginTop: '5px' }}>
                            <Button color="primary" onClick={() => handleReturnClick(checkout.id)}>Return</Button>
                        </div>
                    </li>
                ))}
            </List>
        </div>
    );
}