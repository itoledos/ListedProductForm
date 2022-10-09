import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';

const Search = props =>{


    return(
        <Row>
            <Col xs={8} md={8}>
                <Link to={`/${props.product._id}`}>
                    {props.product.title}
                </Link>
            </Col>
            <Col xs={2} md={2}>
                <Link to={`/${props.product._id}/edit`}>
                    <AiFillEdit></AiFillEdit>
                </Link>
            </Col>
            <Col xs={2} md={2}>
                <Link to={`/`}>
                    <AiFillDelete  onClick={()=>props.handleDelete(props.product)}></AiFillDelete>
                </Link>
            </Col>
        </Row>
    )
}

export default Search;