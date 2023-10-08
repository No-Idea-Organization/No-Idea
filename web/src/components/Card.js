import React from 'react'
import './Card.css'
import Popup from '../components/Popup';
import { useState } from 'react';

function Card({title,imgUrl,body}) {
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
            
            <div className="btn">
            <button onClick={() => setButtonPopup(true)}>Open Popup</button>
        
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>My popup</h3>
                <p>This is my button triggered popup</p>
            </Popup>
            </div>
        </div>
    )
}

export default Card


