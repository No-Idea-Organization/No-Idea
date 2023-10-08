import { useEffect, useState } from 'react';
import { getProducts } from '../tools/axios';
import Footer from "../components/Footer";
import "nes.css/css/nes.min.css";
import Card from '../components/Card'
import Modal from '../components/Modal'



export const Products = () => {

    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(50);

    useEffect(() => {
        getProducts(startIndex, endIndex);
    }, [startIndex, endIndex])

    return (
        <>
      
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