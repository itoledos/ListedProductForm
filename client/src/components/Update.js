import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';


const Update = (props) => {

    const navigate=useNavigate();
    const [titleUd,setTitleUd] = useState('');
    const [priceUd,setPriceUd] = useState('');
    const [descriptionUd,setDescriptionUd] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/"+props.product._id,
            {title: titleUd,
            price: priceUd,
            description: descriptionUd})
        .then(ud=>{console.log(ud);
            navigate('/')
        })
    }

    return(
        <React.Fragment>

            <Form className="FormMain">

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">

                    <Form.Label column sm={4}>
                        Product
                    </Form.Label>

                    <Col sm={8}>
                        <Form.Control type="text" defaultValue={props.product.title} onChange={e=>setTitleUd(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">

                    <Form.Label column sm={4}>
                        Price
                    </Form.Label>

                    <Col sm={8}>
                        <Form.Control type="number"  defaultValue={props.product.price} onChange={e=>setPriceUd(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalText" >

                    <Form.Label column sm={4}>
                        Description
                    </Form.Label>

                    <Col sm={8}>
                        <Form.Control type="textarea" defaultValue={props.product.description} onChange={e=>setDescriptionUd(e.target.value)} />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleUpdate}>
                    Edit
                </Button>
            </Form>

            <Link to='/'>
                    Volver
            </Link>
        </React.Fragment>
    )
}

export default Update;