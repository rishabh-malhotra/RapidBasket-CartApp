import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavbarComponent from './components/Shared/NavbarComponent';

const TITLE="Rapid Basket";
function App() {
  document.title=TITLE;
  return (
    <NavbarComponent />
    
  );
}

export default App;
