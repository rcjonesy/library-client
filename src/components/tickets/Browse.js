import { getNotCheckedOut } from "../../data/materialsData"
import { List, Button } from "reactstrap"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const Browse = () => {

    const navigate = useNavigate()

    const [materials, setMaterials] = useState([])

    useEffect(() => {
        getNotCheckedOut().then((data) =>
            setMaterials(data))
    }, [])

    const handleClick = (id) => {
        navigate(`/browse/${id}`)
    }

    return (

        <div>
            <List style={{ listStyleType: 'none', margin: '20px 20px' }}>
                {materials?.map((material) => (
                    <li key={material.id} style={{ margin: '10px 0' }}>
                        {material.materialName}
                        <div>
                            <Button color="primary" style={{ margin: '10px' }}
                                onClick={() => handleClick(material.id)}>
                                Check Out
                            </Button>
                        </div>
                    </li>
                ))}
            </List>
        </div>
    );

}

