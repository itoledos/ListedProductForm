import React, { Component, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import ProductList from "./components/ProductList";
import {Link, Nav, NavLink} from "react-router-dom";
import Search from "./components/Search";


const Main = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [data, setData] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description,
        })
            .then(res=>{
                // res contiene  .data por defecto al usar axios
                setData(res.data)
            })
            .catch(err=>console.log(err))
    }
    
    const handleDelete = (prod) => {
        axios.delete('http://localhost:8000/api/products/'+prod._id)
            .then(props.setAllData(props.allData.filter(itm=>itm._id!==prod._id)))
            .catch(err=>console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/all")
            .then(res=>{
                props.setAllData(res.data.products);
            })
            .catch(err=>console.log("Error: "+{err}))
    },[data])

    return(
        <React.Fragment>
            <h1>Product Manager</h1>
            <Form className="FormMain">
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
                    <Form.Label column sm={4}>
                        Product
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" placeholder="Product" onChange={e=>setTitle(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
                    <Form.Label column sm={4}>
                        Price
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="number" placeholder="0.00" onChange={e=>setPrice(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalText" >
                    <Form.Label column sm={4}>
                        Description
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="textarea" placeholder="Add a description" onChange={e=>setDescription(e.target.value)} />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Create
                </Button>
            </Form>
            <div className="hLine"></div>
            <h2>All Products</h2>
            <div className="fullList">
                {props.allData.map((itm,idx)=> {return(
                    <span key={idx}>
                        <Search product={itm} handleDelete={handleDelete} />
                    </span>
                )})}
            </div>
            
        </React.Fragment>
    )
}

export default Main;