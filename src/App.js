import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  pageSize= 20;
  render() {
    return (
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<News pageSize={this.pageSize} country="us" category="general"/>}/>
            <Route exact path='/sport' element={<News key={'sport'} pageSize={this.pageSize} country="us" category="sport"/>} />
            <Route exact path='/weather' element={<News key={'weather'} pageSize={this.pageSize} country="us" category="weather"/>}/>
            <Route exact path='/lifestyle' element={<News key={'lifestyle'} pageSize={this.pageSize} country="us" category="lifestyle"/>}/>
            <Route exact path='/health' element={<News key={'health'} pageSize={this.pageSize} country="us" category="health"/>}/>
            <Route exact path='/society' element={<News key={'society'} pageSize={this.pageSize} country="us" category="society"/>}/>
            <Route exact path='/business' element={<News key={'business'} pageSize={this.pageSize} country="us" category="business"/>}/>
            <Route exact path='/technology' element={<News key={'technology'} pageSize={this.pageSize} country="us" category="technology"/>}/>
            <Route exact path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
    )
  }
}
