import { useState } from "react";
import { Link } from "react-router-dom";
import "./CategoriesHeader.css";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="sports">
              <button onClick={() => handleBtnName("sports")}>
                Sports </button>
            </Link>
            <Link to="platform">
              <button onClick={() => handleBtnName("platform")}>
                Platform </button>
            </Link>
            <Link to="puzzle">
              <button onClick={() => handleBtnName("puzzle")}>Puzzle</button>
            </Link>
            <Link to="action">
              <button onClick={() => handleBtnName("action")}>Action</button>
            </Link>
            <Link to="racing">
              <button onClick={() => handleBtnName("racing")}>Racing</button>
            </Link>
            <Link to="role-playing">
              <button onClick={() => handleBtnName("role playing")}>
                Role Playing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
