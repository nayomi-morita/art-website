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
        .container{
          padding: 20px 20px 20px 20px;
          display: flex;
          justify-content: space-between;
        }
        .main{
          background-color: black;
          width: 100%;
        }
        .links{
          padding-right: 50px;
        }
        .right{
          display: flex;
        }
        .right p, .left p{
          color: white;
        }
      `}</style>
      <div className="main">
        <div className="container">
          <div className="left">
            <Link to="/" style={{textDecoration: 'none'}}><p>Home</p></Link>
          </div>
          <div className="right">
            <Link to="/MyStory" style={{textDecoration: 'none'}}><p className="links">My Story</p></Link>
            <Link to="/Gallery" style={{textDecoration: 'none'}}><p className="links">Gallery</p></Link>
            <Link to="/Store" style={{textDecoration: 'none'}}><p className="links">Store</p></Link>
            <Link to="/Contact" style={{textDecoration: 'none'}}><p>Contact</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;