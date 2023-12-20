import { useParams } from "react-router-dom"
import { Form, Input, FormGroup, Label, Col, Row, Button } from "reactstrap"
import { useState } from "react"
import { newCheckout } from "../../data/CheckoutData"


export const CheckOutMaterial = () => {

    const { id } = useParams()
    const materialId = id
   

    const [patronId, setPatronId] = useState('')

    const handleOnChange = (event) => {
        setPatronId(event.target.value)
    }



    const handleClick = (event) => {
        event.preventDefault(); 
        const newCheckoutObj = 
        {
            materialId: parseInt(materialId),
            patronId: parseInt(patronId),
            // checkoutDate: Date.now()
        }

        newCheckout(newCheckoutObj)
    };

    return (
        <Form style={{ margin: '30px' }}>
            <Row className="row-cols-lg-auto g-3 align-items-center">
                <Col>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Enter Patron's Id"
                        type="email"
                        onChange={handleOnChange}
                    />
                </Col>
                <Col>
                    <Button color="primary" onClick={(event) => handleClick(event)}>
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}