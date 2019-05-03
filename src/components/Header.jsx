import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

function Header() {
  return(
    <div>
      <style jsx>{`
        p{
          margin: 0;
          font-size: 20px;
        }
        .main{
          background-color: black;
          height: 100px;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .right{
          display: flex;
        }
        .right p, .left p{
          color: white;
        }
      `}</style>
      <div className="main">
        <div className="left">
          <Link to="/" style={{textDecoration: 'none'}}><p>Home</p></Link>
        </div>
        <div className="right">
          <Link to="/MyStory" style={{textDecoration: 'none'}}><p>My Story</p></Link>
          <Link to="/Gallery" style={{textDecoration: 'none'}}><p>Gallery</p></Link>
          <Link to="/Store" style={{textDecoration: 'none'}}><p>Store</p></Link>
          <Link to="/Contact" style={{textDecoration: 'none'}}><p>Contact</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;