import Footer from "../components/Footer";
import "nes.css/css/nes.min.css";
import Card from '../components/Card'
import Popup from '../components/Popup';
import { useState } from 'react';


export const Products = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <>
        <main>
            <h1>React Popups</h1>
            <br></br>
            <button onClick={() => setButtonPopup(true)}>Open Popup</button>
        </main>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>My popup</h3>
                <p>This is my button triggered popup</p>
            </Popup>
            <div className="nes-container with-title shopTitle">
            <h1>Products</h1>
        </div>
        <br></br>
        <div className="App">
           
                <Card 
                title='Card Title'
                imgUrl='https://upload.wikimedia.org/wikipedia/en/e/e7/World_Tennis_Championships.jpg'
                body='Rating:'/>
            </div>
            
            <br></br>
            <br></br>
            <Footer />
        </>
    )
}

export default Products