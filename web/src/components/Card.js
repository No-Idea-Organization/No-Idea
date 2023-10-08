import React from 'react'
import './Card.css'
import Popup from '../components/Popup';
import { useState } from 'react';

function Card({title,imgUrl,body,desc}) {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={imgUrl} alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div classname="card-body">
                    <p>{body}</p>
                </div>
            </div>
            
            <div className="desc">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Card


