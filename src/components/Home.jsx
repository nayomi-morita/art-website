import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import artReducer from './../reducers/art-reducer.js';
import { connect } from 'react-redux';

function Home(props) {
  return(
    <div>
      <style jsx>{`
        div{
          padding: 0 20px 0 20px;
        }
        .line{
          border: .5px solid black
        }
        .artForm{
          border 1px solid black;
          margin-top: 20px;
          height: 100px;
        }
      `}</style>
      <p>prop test:</p>
      <p>{props.artReducer.title[0]}</p>
      <p>{props.artReducer.description[0]}</p>
      <div className="line">
      </div>
      <div className="artForm">
      </div>
      <div className="artForm">
      </div>
      <div className="artForm">
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    artReducer: state
  }
}

Home = connect(mapStateToProps)(Home);

export default Home;
