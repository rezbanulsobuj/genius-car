import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Service.css'

const Service = (props) => {
    const { id, name, price, img, description } = props.service
    const navigate = useNavigate()
    const navigateHaldle = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <p>Price : {price}</p>
            <p>{description}</p>
            <button onClick={() => navigateHaldle(id)} className='btn btn-primary mt-3 mb-4'>Book {name}</button>
        </div>

    );
};

export default Service;