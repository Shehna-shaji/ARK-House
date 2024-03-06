import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header/Header';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
    </div>
  )
}
