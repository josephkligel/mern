import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {

    const {productId, successCallback} = props;

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => successCallback())
        .catch(err => console.log(err));
    }

    return (
        <button className='btn-sm btn-dark' onClick={deleteProduct}>Delete</button>
    )
}

export default DeleteButton;