import Footer from "../components/Footer";
import "nes.css/css/nes.min.css";
import Card from '../components/Card'


export const Products = () => {

    return (
        <>
            <div className="nes-container with-title shopTitle">
            <h1>NoIdea's Webscraper</h1>
        </div>
        <br></br>
        <div className="App">
           
                <Card 
                title='Card Title'
                imgUrl='https://upload.wikimedia.org/wikipedia/en/e/e7/World_Tennis_Championships.jpg'
                body='test1'/>
            </div>
        </>
    )
}

export default Products