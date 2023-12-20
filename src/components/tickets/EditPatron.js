import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getPatronsDetails, EditPatronDetails } from '../../data/patronData';
import { useNavigate } from 'react-router-dom';


export const EditPatron = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [details, setDetails] = useState({});
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        getPatronsDetails(id).then((data) => {
            setDetails(data);
            setEmail(data?.email); // Set email from fetched details
            setAddress(data?.address); // Set address from fetched details
        });
    }, [id]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value); // Update email state on input change
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value); // Update address state on input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const patronObj = {
            email: email,
            address: address
        }
        
        EditPatronDetails(id, patronObj)
        navigate(`/patrons/${id}`);
    };

    return (
        <div>
            <h2>Edit Details</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="exampleEmail" hidden>Email</Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={email} // Bind 'email' state to the input value
                        onChange={handleEmailChange} // Handle email input change
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword" hidden>Address</Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Address"
                        type="text"
                        value={address} // Bind 'address' state to the input value
                        onChange={handleAddressChange} // Handle address input change
                    />
                </FormGroup>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};
