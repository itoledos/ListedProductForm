import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
  
    return(
        <React.Fragment>
                <div style={{marginTop: '100px'}}>
                    <h3>{props.product.title}</h3>
                    <p>{props.product.price}</p>
                    <p>{props.product.description}</p>
                </div>
                <Link to='/'>
                    Volver
                </Link>
        </React.Fragment>
    )
}
export default ProductList;
