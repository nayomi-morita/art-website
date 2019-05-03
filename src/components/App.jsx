import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
import Admin from './Admin';
import Contact from './Contact'
import Gallery from './Gallery'
import Store from './Store'
import MyStory from './MyStory'

function App(){
  return(
    <div>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Admin' component={Admin} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Gallery' component={Gallery} />
        <Route path='/Store' component={Store} />
        <Route path='/MyStory' component={MyStory} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;