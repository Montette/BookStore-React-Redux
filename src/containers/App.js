import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Inventory from '../components/Inventory/Inventory';
import Order from '../components/Order/Order';
import AdminPanel from '../components/AdminPanel/AdminPanel';
import './App.css';

class App extends Component {
 
  render() {
    return (
      <div className="App">
      <Header />
      <Inventory />
      <Order />
      <AdminPanel />

      </div>
    );
  }
}

export default App;
