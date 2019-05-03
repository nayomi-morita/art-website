import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

function Header() {
  return(
    <div>
      <style jsx>{`
        p{
          margin: 0;
        }
        .main{
          background-color: black;
          height: 100px;
          width: 100%;
        }
        .container{
          display: flex;
        }
        .container p{
          color: white;
        }
      `}</style>
      <div className="main">
        <div className="container">
          <Link to="/" style={{textDecoration: 'none'}}><p>Home</p></Link>
          <p>My Story</p>
          <p>Gallery</p>
          <p>Store</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Header;