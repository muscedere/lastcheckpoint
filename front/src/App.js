import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import CardListAdmin from './components/CardListAdmin';
import Home from './components/Home';
import Post from './components/Post';
import CardListAll from './components/CardListAll';
import Modify from './components/Modify';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post" component={Post} />
          <Route path="/admin" component={CardListAdmin} />
          <Route path="/cardlistall" component={CardListAll} />
          <Route path="/modify/:id" component={Modify} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

