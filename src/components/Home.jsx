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
      `}</style>
      <p>prop test:</p>
      <p>{props.artReducer.title}</p>
      <p>{props.artReducer.description}</p>
      <div></div>
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
