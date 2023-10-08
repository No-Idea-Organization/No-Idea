import "./Header.css";
import Main1 from "../img/header/retro-games.png";
import Main2 from "../img/header/RetroGames.jpeg";
import Main3 from "../img/header/OIP.jpeg";
import Main4 from "../img/header/help-icon-6.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="categories/furnitures">
                <div id="img1" className="lil-overlay"></div>
                <img src={Main1} alt="img1" />
                <p className="main-description">Categories</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="categories/skin-care">
                <div id="img2" className="lil-overlay"></div>
                <img src={Main2} alt="img2" />
                <p className="main-description">All Games</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="categories/kitchen">
                <div id="img3" className="lil-overlay"></div>
                <img src={Main3} alt="img3" />
                <p className="main-description">About</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="categories/electronics">
                <div id="img4" className="lil-overlay"></div>
                <img src={Main4} alt="img4" />
                <p className="main-description">Help</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
