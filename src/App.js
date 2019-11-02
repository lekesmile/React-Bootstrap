
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar'
import { Route, Switch } from "react-router-dom";
import About from './routes/About';
import clients from './routes/clients';
import home from './routes/home';




export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
        <Route exact path ="/" component={home}/>
        <Route exact path ="/about" component={About}/>
        <Route exact path ="/clients" component={clients}/>
        </Switch>
       
      </div>
    )
  }
}
