import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "nes.css/css/nes.min.css";

// const spaceInvaders = new URL("./img/spaceInvaders.jpg",import.meta.url)

export const Home = () => {




    return (
        <>
         <section className="main-container">
            <br></br>
            <div className="nes-container with-title shopTitle">
            
                <h1>NoIdea's Webscraper</h1>
            </div>
           
            <Hero />
            <br></br>
            <br></br>
            <Footer />
            </section>
        </>
    )
}