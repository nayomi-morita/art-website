import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import artReducer from './../reducers/art-reducer.js';
import { connect } from 'react-redux';

function Admin(props) {
  let _title = null;
  let _description = null;
  
  function updater(event) {
    let newTitle = props.artReducer.title;
    newTitle = _title.value;
    let newDescription = props.artReducer.description;
    newDescription = _description.value;
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'FORM_SUBMIT',
      title: newTitle,
      description: newDescription
    };
    dispatch(action);
    _title.value = '';
    _description.value = '';
  }
  
  return(
    <div>
    <style jsx>{`
    `}</style>
      <form onSubmit={updater}>
        <p>Title <input type='text' id='title' placeholder={props.artReducer.title} ref={(input) => {_title = input;}}/></p>
        <p>Description<input className="descriptor" type='text' id='description' placeholder={props.artReducer.description} ref={(input) => {_description = input;}}/></p>
        <button type='submit'></button>
      </form>
    </div>    
  );
}

const mapStateToProps = state => {
  return {
    artReducer: state
  }
}

Admin = connect(mapStateToProps)(Admin);

export default Admin;