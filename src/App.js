import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'
import Characters from './components/Characters'
import Arcs from './components/Arcs'
import Episodes from './components/Episodes'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/layout/Header'
import './App.css';
import NotFound from './components/404'

function App() {
  return (
    <Router>
        <Header />
        <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/characters' component={ Characters } />
        <Route exact path='/episodes' component={ Episodes } />
        <Route exact path='/arcs' component={ Arcs } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/register' component={ Register } />
        <Route path='/' component={ NotFound } />
        </Switch>
    </Router >
  );
}

export default connect(null)(App);
